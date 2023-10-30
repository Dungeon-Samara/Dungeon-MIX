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

const button = document.getElementById('test');

button.addEventListener('click', async () => {
// Конфиг для авторизации 
const authConfig = {
  clientId: '29966803',
  clientSecret: 'o7hrkGhmGa2bFUPwnHQNRc0EsaRjiB4f5nYXCKe1pYWiL0n2wjtAkbqhTKzJsYtY', 
  redirectUri: 'https://dungeon-samara.github.io/Dungeon-MIX/'
};
// Использование

// 1. Получение кода авторизации и обмен на токен
const code = 'def502007d7452bcd667282784b11b916dcfdeed29ce41375448cac29ee319efb9448a87f7e4224caff0dcc02720bb31bf46b8997a74dfdfef1b08585257e2bdedfde3f089d7e386707af78393067c7aa31dccafc18687ec0d49f889ea8fdc645dae4d2d5c38c090b620110bc14af3e2b0e69fceec2fa3e9efc535199c6517d028902a7bd68170e7074aeb5ba6e32f348e11f0873c90a4264a212a800f028c89d4f8eed963525eba3b4fa2789d4048f4c66ffb461052abdcfcbd0ee4e25150039bb6dcb5e24b46b52cf5c7c6d539d524a952e07eaac9717c1eb207617e49604b4e9c8105238ea5d5e44e0932c6425cb964fc3897a37d33e3f60e634578603c933815c54b1263b42ae65eb8faa9e62f2eb1002b369eacd456387ba3f7f126ab32a4b1a878a15d2b8a27adba68fe54c2f68a4fe21305860110f21742a70416091586f535bc1ee9197d279538bf72a447d022fdc823cb2129ace52ceaed9fe879c18e35273759bf24624f105ccf230fe9aee4d30e7cb7c1743e29cc8b0a64a8ef38a59690beaca763767c4734f45cd84ba8ab3f495837a804c84d2c363b35e8a297ec961d2b0fb7fe11ebe656381b2185b8b36714f91bfbb0b46d4f723024a53ea9720819fb2cfc10e85c2a0afc6f5dc25a0fd53c85410585eec159b79d18f0ec5afc7eda850291be1cd556f93bd2058aacaba5b2447d962f2b978bbd67c00e0a'; 

const tokenData = await exchangeCode(code);
const accessToken = tokenData.access_token;
// Константа с URL API
const API_URL = 'https://www.amocrm.ru/api/v2/leads';

// Базовый URL прокси 
const PROXY = 'https://api.allorigins.win/raw?url=';

// Функция для запросов через прокси
async function fetchViaProxy(endpoint) {

  const fullUrl = PROXY + encodeURIComponent(API_URL + endpoint);
  
  const response = await fetch(fullUrl);  

  return await response.json();

}

// Функция обмена кода на токен
async function exchangeCode(code) {

  // Запрос на получение токена 
  const response = await fetchViaProxy('https://www.amocrm.ru/oauth2/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: authConfig.clientId,
      client_secret: authConfig.clientSecret,
      grant_type: 'authorization_code',
      redirect_uri: authConfig.redirectUri,
      code: 'def502007d7452bcd667282784b11b916dcfdeed29ce41375448cac29ee319efb9448a87f7e4224caff0dcc02720bb31bf46b8997a74dfdfef1b08585257e2bdedfde3f089d7e386707af78393067c7aa31dccafc18687ec0d49f889ea8fdc645dae4d2d5c38c090b620110bc14af3e2b0e69fceec2fa3e9efc535199c6517d028902a7bd68170e7074aeb5ba6e32f348e11f0873c90a4264a212a800f028c89d4f8eed963525eba3b4fa2789d4048f4c66ffb461052abdcfcbd0ee4e25150039bb6dcb5e24b46b52cf5c7c6d539d524a952e07eaac9717c1eb207617e49604b4e9c8105238ea5d5e44e0932c6425cb964fc3897a37d33e3f60e634578603c933815c54b1263b42ae65eb8faa9e62f2eb1002b369eacd456387ba3f7f126ab32a4b1a878a15d2b8a27adba68fe54c2f68a4fe21305860110f21742a70416091586f535bc1ee9197d279538bf72a447d022fdc823cb2129ace52ceaed9fe879c18e35273759bf24624f105ccf230fe9aee4d30e7cb7c1743e29cc8b0a64a8ef38a59690beaca763767c4734f45cd84ba8ab3f495837a804c84d2c363b35e8a297ec961d2b0fb7fe11ebe656381b2185b8b36714f91bfbb0b46d4f723024a53ea9720819fb2cfc10e85c2a0afc6f5dc25a0fd53c85410585eec159b79d18f0ec5afc7eda850291be1cd556f93bd2058aacaba5b2447d962f2b978bbd67c00e0a'
    })
  });
  
  return response.json();

}

// Получение сделки по ID
async function getLead(leadId, accessToken) {

  const response = await fetchViaProxy(`https://www.amocrm.ru/api/v2/leads/${leadId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  return response.json();

}

// Обновление сделки
async function updateLead(lead, accessToken) {

  const response = await fetchViaProxy(`https://www.amocrm.ru/api/v2/leads`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,  
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(lead)
  });

  return response.json();

}

// 2. Получение сделки по ID  
const lead = await getLead(23151673, accessToken);

console.log(lead);

const field = lead.custom_fields_values.find(f => f.field_id === 933055); //имя контакта
field.values[0].value = 'Валерий'; 
const field1 = lead.custom_fields_values.find(f => f.field1_id === 407891); //комментарий
field1.values[0].value = 'Я сделалъ'; 

const updatedLead = await updateLead(lead, accessToken);

});
