<?php
$nombre = $_POST["name"];
$email = $_POST["email"];
$msg = $_POST["message"];

$email_from = "berrojas45@gmail.com";
$email_subject = "SOLICITUD DE INFORMACIÓN";
$email_body =  "Ha llegado una solicitud de: " .$nombre .". que solicita información al correo: " .$email .". 
Su mensaje: 
" .$msg;

$to = "berrojas45@gmail.com";
$headers = "From: $email_from \r\n";

mail($to,$email_subject,$email_body,$headers);


header("Location: ../index.html#home");
 ?>
