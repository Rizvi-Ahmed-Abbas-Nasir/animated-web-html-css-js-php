<?php
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "contact@cleverstudio.in, aditya@cleverstudio.in";
$subject = "Contact Mail From $email";
$body ="Name = ". $name . "\r\n Email =" . $email . "\r\n Message =" . $message;
$headers = "From: Clever Studio <contact@cleverstudio.in>";
if($email!=NULL){
    mail($to,$subject,$body,$headers);
}
header("Location:../thankyou.html");
?>