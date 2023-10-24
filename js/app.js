// Глобальный массив для хранения ID
const copiedTagsIds = [];
// Получаем теги и блок для копий
const tag = document.querySelectorAll('.tag');
const selectedTags = document.querySelector('.selected-tags');
const cor = document.querySelector('#tag_none');

// Создает копию тега
function createCopy(tag) {
  // Генерируем уникальный ID
  const tagId = generateId(tag.id);
  let template = document.querySelector('#template');
  let clone = template.content.cloneNode(true);
  
  clone.querySelector('.copy').textContent = tag.textContent;
  clone.querySelector('.copy').dataset.id=tagId;
  clone.querySelector('.copy').classList=tag.classList;
  // Сохраняем ID в массив  
  copiedTagsIds.push(tagId);
  return clone;
}

// Генерирует уникальный ID
function generateId(tagId) {
  return `${tagId}_${Date.now()}`; 
}

document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('click', () => {

// Проверяем текущий цвет фона
if (tag.style.background == "white") {
// Находим ID копии этого тега
const tagId = copiedTagsIds.find(id => id.startsWith(tag.id));
      
// Удаляем копию по этому ID  
const copy = selectedTags.querySelector(`[data-id="${tagId}"]`);
copy.remove();

// Удаляем ID из массива
copiedTagsIds.splice(copiedTagsIds.indexOf(tagId), 1);
// Если белый - красим в черный и меняем цвет текста
tag.style.background = "black";
tag.style.color = "white";
if(copiedTagsIds.length === 0) {
  cor.style.display = "block";
}

} else {
// Создаем копию тега  
const copy = createCopy(tag);
selectedTags.appendChild(copy);
// Иначе - красим обратно в белый и черный текст
tag.style.background = "white";
tag.style.color = "black";
cor.style.display="none";
}     
  });
});

function kart1(){
  krepost.style.display="none";
  kalyan_karta.style.display="block";
}
function kart2(){
  krepost.style.display="block";
  kalyan_karta.style.display="none";
}

// Получаем форму по id
const form = document.getElementById('krepost');

// Вешаем обработчик на отправку формы

form.addEventListener('submit', function(event) {

// Предотвращаем отправку формы по умолчанию
event.preventDefault();

// Получаем radio с классом "inp" 
const tabacoRadios = form.querySelectorAll('.inp:checked');

// Получаем radio с классом "ho"
const coldRadios = form.querySelectorAll('.ho:checked');

// Получаем значения из текстовых полей
const textareas = form.querySelectorAll('textarea');

// Получаем блок с тегами
const tagsBlock = document.querySelector('.selected-tags');

// Находим все выбранные теги
const selectedTags = tagsBlock.querySelectorAll('.tag');

// значение выбранного табака
let selectedTabaco = '';

// значение выбора холодка
let selectedCold = '';

// Значение из текстареа
let selectedTextarea;

// Массив для тегов
let tagsArray = [];


// Перебираем теги
selectedTags.forEach(tag => {

// Добавляем в массив
tagsArray.push(tag.innerText);

});

tabacoRadios.forEach((radio) => {
  selectedTabaco = radio.value;
});

coldRadios.forEach((radio) => {
  selectedCold = radio.value;
});

// Перебираем поля
textareas.forEach(textarea => {

// Записываем значение 
selectedTextarea = textarea.value;
});

const tagsString = tagsArray.join(', ');

// Выводим результаты в консоль для проверки
console.log('Выбранные теги:', tagsString);
console.log('Выбранный табак:', selectedTabaco);
console.log('Нужен холодок:', selectedCold);
console.log('Комментарий:', selectedTextarea);

});

document.querySelectorAll('.zakazz').forEach(button => {

  button.addEventListener('click', handleButtonClick);

});

document.querySelectorAll('.zakaz_1').forEach(button => {

  button.addEventListener('click', handleButtonClick);

});
function handleButtonClick(event) {

  // Предотвращаем отправку формы по умолчанию
event.preventDefault();
const button = event.target;
const block = button.closest('.block');
const title = block.querySelector('.nazvan').textContent;

const radioValue = block.querySelector('input[name="hol"]:checked').value;

console.log('Название:',title);
console.log('Нужен холодок:',radioValue);
};


// Конфиг с данными для авторизации 
const config = {
  clientId: '29966803',
  clientSecret: 'mqlqfclzKKrEAbG7xU90BVLEy5dBUpTra9kApUvMnuiu4RtmrxXESQzX8PfKSgAh',
  redirectUri: 'https://dungeon-samara.github.io/Dungeon-MIX/',
};

// Функция для получения токена и обмена кода 
async function getToken(code) {

  const url = 'https://www.amocrm.ru/oauth2/access_token';

  const body = {
    client_id: config.clientId,
    client_secret: config.clientSecret,
    redirect_uri: config.redirectUri,
    grant_type: 'authorization_code',
    code: code,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };

  const response = await fetch(url, options);

  const data = await response.json();

  // Сохраняем токен в cookies
  document.cookie = `amo_token=${data.access_token}`;

  return data.access_token;
}

// Usage

const code = getCode(); // Получение кода авторизации  

const token = await getToken(code);

// webhook.js

export default async function handler(request) {

  const data = await request.json();

  const leadId = data.lead_id;
  
  console.log('Lead ID:', leadId);
  
  // ... другая обработка данных  

  return { status: 200 };

}
