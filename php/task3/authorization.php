<?php
session_start();
//ini_set('error_reporting', E_ALL);
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
$post = $_POST;
$filename = 'base.csv';
//$_SESSION['auth'] = false;
$res = file ( $filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
if (isset($post['login'])){
    if(!empty($res)){
        foreach ($res as $onerow){
            $userLogin = explode(";", $onerow);
            if($post['login'] !== $userLogin[0]){
                continue;
            }
            elseif ($post['login'] == $userLogin[0]){
                if (password_verify($post['password'], $userLogin[1])) {
                    $_SESSION['echo'] = 'Вы успешно авторизовались';
                    $_SESSION['name'] = $userLogin[0];
                    $_SESSION['auth'] = true;
                    break;
                } else {
                    $_SESSION['echo'] = 'Пароль неправильный.';
                }
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Авторизация</title>
    <link rel="stylesheet" href="css/css.css">
</head>
<body>
<?php if($_SESSION['auth'] == true){?>
   <a id="out" href="logout.php">Выйти</a>
    <h2>Привет <? echo $_SESSION['name']?>, поздравляем с авторизацией</h2>
<?}else{?>
<h2>Авторизация</h2>
<form method="post" action="">
    <input name="login" type="text" placeholder="Введите Логин" required>
    <input name="password" type="password" placeholder="Введите пароль" required>
    <input type="submit" value="Войти">
</form>
<p id="res"><? if($post['login'] != null){
    echo $_SESSION['echo'];};}?></p>
</body>
</html>

