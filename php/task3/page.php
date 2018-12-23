<?php
session_start();
if (!isset($_SESSION['auth'])){
    header('location:http://raiding.ru/php/task3/authform.php');
    exit();
};?>

<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>страница которая не доступна для не авторизированных юзеров</title>
</head>
<body>
<p id="redirect">вы авторизованы и видете этот текст</p>


</body>
</html>