<?php
$to="ms.oldorf@gmail.com";

$navn=$_REQUEST['navn'];
$email=$_REQUEST['email'];
$telefon=$_REQUEST['telefon'];

$besked=$_REQUEST['besked'];
$subject="Så er der post! Du har fået en besked fra " . $navn . ": ". $email;
$message= "<h1 style='color: #d6abdc'>Så er der post!</h1> <p style='color: #a7bea3'>Du har fået følgende besked fra " . $navn . ":</p><br>" . "<p style='color:#d6abdc'>" . $besked . "</p><br>". " <p style='color:#a7bea3'> Vedkommende kan træffes på telefon nr. " . $telefon . "</p>" . "<h3 style='color:#cedcc9'> Hav en skøn dag!</h3>";

$header = "Content-type: text/html; charset=utf-8" . "\r\n";
$header.="from:ms.oldorf@mathildeoldorf.dk";

mail($to, $subject, $message, $header);
header("Location: index.html");
?>
