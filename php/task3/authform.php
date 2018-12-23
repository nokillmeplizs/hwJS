<?php
include 'authorization.php';
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Авторизация</title>
    <link rel="stylesheet" href="css/css.css">
    <script src="sendForm.js"></script>
</head>
<body>
   <div id="out"></div>
   <?php
   if($_SESSION['auth'] == true){?>
   <div id="out"><a href="logout.php">Выйти</a></div>
   <?};?>
   <h2 id="word"><?php if(isset($_SESSION['auth'])){echo 'Вы авторизированы';}else{echo 'Авторизация';}?></h2>
<form method="post" action="authorization.php">
    <input name="login" type="text" placeholder="Введите Логин" required>
    <input name="password" type="password" placeholder="Введите пароль" required>
    <input type="submit" value="Войти">
</form>
<p id="res"></p>
<div id = "page"><a href="page.php">страница доступная авт пользователям</a> </div>
<script src="sendForm.js"></script>
</body>
</html>

