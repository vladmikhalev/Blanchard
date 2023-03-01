<?php

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "Тема письма";
$file = $_FILES['file'];

$c = true;

$title = "Заголовок письма";
foreach ( $_POST as $key => $value ) {
    if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
        $body .= "
        " . ( ($c = !$c) ? '<tr>' : '<tr sryle="background-color: #f8f8f8;">' ) . "
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'> $value</td>
        </tr>
        ";
    }
}

$body = "<table style='width: 100%;'>$body</table>";


$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
$mail -> isSMTP();
$mail -> CharSet = "UTF-8";
$mail -> SMTPAuth = true;

$mail->Host         = 'smtp.gmail.com';
$mail->Username     = 'v.a.mikhalevv@gmail.com';
$mail->Password     = 'fzjqadvzhlufvyua';
$mail->SMTPSecure   = 'ssl';
$mail->Port         = 465;

// отправитель
$mail->setForm('v.a.mikhalevv@gmail.com', 'Заказ обратного звонка');

// получатель письма
$mail->addAddress('v.a.mikhalevv@gmail.com');

$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

$mail->send();

} catch (Exception $e) {
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
