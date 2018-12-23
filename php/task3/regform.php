<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Регистрация</title>
    <link rel="stylesheet" href="css/css.css">

</head>
<body>
<?php
include 'registration.php';
if($_SESSION['auth'] == true){?>
    <div id="out"><a href="logout.php">Выйти</a></div>
<?};?>
    <h2>Регистрация</h2>
<form method="post" action="registration.php">
    <input name="login" type="text" placeholder="Введите Логин" required>
    <input name="password" type="password" placeholder="Введите пароль" required>
    <input type="hidden" name="id" value="<? echo $_SESSION['id'];?>">
    <input type="submit" value="отправить">
</form>

<p id="res"></p>
<script src="sendForm.js"></script>
</body>
</html>