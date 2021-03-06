<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$subscribe = $_POST['subscribe'];

// Формирование самого письма
$title = "Письмо с сайта Best Tour Plan";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message<br>
";

$bodySubscribe = "
<h2>Новое письмо</h2>
<b>Отзыв:</b><br>$subscribe
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'karpenoksa@mail.ru'; // Логин на почте
    $mail->Password   = ''; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('karpenoksa@mail.ru', 'Сергей Карпенок'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('shamanito@rambler.ru');  
    
// Отправка сообщения
if ($name == true) {
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;
}
else {
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $bodySubscribe;
}
    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
if ($name == true) {header('location: thankyou.html');}
else {header('location: gratefulness.html');}