<?php

// Подключаем библиотеку AmoCRM
use AmoCRM\Client\AmoCRMApiClient;

// Данные для авторизации 
$clientId = '29966803';
$clientSecret = 'mqlqfclzKKrEAbG7xU90BVLEy5dBUpTra9kApUvMnuiu4RtmrxXESQzX8PfKSgAh';
$redirectUri = 'https://dungeon-samara.github.io/Dungeon-MIX/'; 

// Создаем объект клиента
$apiClient = new AmoCRMApiClient($clientId, $clientSecret, $redirectUri);

// Проверяем, есть ли токен в сессии
if (!empty($_SESSION['amo_token'])) {

  // Если есть - устанавливаем его
  $apiClient->setAccessToken($_SESSION['amo_token']); 

} else {

  // Если нет, получаем код авторизации
  $code = $_GET['code'];

  // Запрашиваем токен по коду авторизации
  $accessToken = $apiClient->getOAuthClient()->getAccessTokenByCode($code);
  
  // Сохраняем токен в сессию
  $_SESSION['amo_token'] = $accessToken;

  // Устанавливаем токен в клиент
  $apiClient->setAccessToken($accessToken);

}

$webhook_data = file_get_contents('php://input');
$data = json_decode($webhook_data, true);
$lead_id = $data['lead_id'];
console.log('Lead ID:', lead_id);