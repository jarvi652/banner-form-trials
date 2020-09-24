<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $organization = $_POST["organization"];
    $message = $_POST["message"];
    $email_from = "Akanbren Nigeria Limited";
    $email_subject = "New Mail From Migrant Solutions";
    $email_body =   "name: $name.\n".
                    "email: $email.\n".
                    "organization: $organization.\n".
                    "message: $message. \n";
    $to = 'info@akanbren.com';
    $headers = "FROM: $email_from \r\n";
    $headers = "REPLY-TO: $email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("location: index.html");