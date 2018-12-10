<!--Простая система аутентификации по логин/паролю.-->
<!--Для хранения информации о пользователе использовать CSV файл.-->
<!--Пример записи:-->
<!--username;password;sess_id-->
<!--username;password;sess_id-->
<!--username;password;sess_id-->
<!---->
<!--Имя пользователя должно быть уникальными.-->
<!--1)Сверстать HTML-форму для регистрации нового пользователя.-->
<!--2)Написать обработчик регистрационной формы:-->
<!--операция добавить нового пользователя в файл.-->
<!--Логин пользователя должен быть уникальным-->
<!--(реализовать функцию поиска совпадений по имени пользователя).-->
<!--3)Сверстать HTML-форму входа пользователя на сайт.-->
<!--4)Написать обработчик формы входа,-->
<!--который будет проверять существование пользователя в файле,-->
<!--сверять введенный хеш пароля и хеш из файла на равенство.-->
<!--Посмотрите функции password_hash() и password_verify()-->
<!--5)Создать закрытую страницу сайта, которая будет доступна только тем пользователям,-->
<!--которые прошли регистрацию и выполнили вход на сайт.-->
<!--Посмотрите функцию header("Location: адрес");-->
<!--6) Реализовать возможность разлогиниться-->
<?php
session_start();
//ini_set('error_reporting', E_ALL);
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
$post = $_POST;
$filename = 'base.csv';
$res = file ( $filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$_SESSION['id']= session_id();
$result = $post['login'].';'.password_hash($post['password'],PASSWORD_DEFAULT).';'.$post['id'];
unset ($_SESSION['echo']);
$_SESSION['echo'];
$count = 0;
if (isset($post['login'])){
    if(!empty($res)){
        foreach ($res as $onerow){
            $userLogin = explode(";", $onerow);
            if($post['login'] !== $userLogin[0]){
                continue;
            }
            elseif ($post['login'] == $userLogin[0]){
                $_SESSION['echo'] = 'пользователь с таким логином уже зарегестрирован';
                $count++;
                break;
            }
        }
        if ($count == 0){
            writeFile($filename, $result."\r\n");
            $_SESSION['echo'] = 'регистрация прошла успешно';

        }
    }
    else{
        writeFile($filename, $result."\r\n");
        $_SESSION['echo'] = 'регистрация прошла успешно';
        ;
    }
}
function writeFile($filename, $data) {
    $fp = fopen($filename, 'a'); // w
    fwrite($fp, $data);
    fclose($fp);
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Регистрация</title>
    <link rel="stylesheet" href="css/css.css">
</head>
<body>
<?php if($_SESSION['auth'] == true){?>
    <a id="out" href="logout.php">Выйти</a>
<?}?>
<h2>Регистрация</h2>
<form method="post" action="">
    <input name="login" type="text" placeholder="Введите Логин" required>
    <input name="password" type="password" placeholder="Введите пароль" required>
    <input type="hidden" name="id" value="<? echo $_SESSION['id'];?>">
    <input type="submit" value="отправить">
</form>
<p id="res"><? echo $_SESSION['echo'];if($_SESSION['echo'] == 'регистрация прошла успешно'){
    echo '<script>
setTimeout(function() {
  window.location.href = "http://raiding.ru/php/task3/authorization.php";
}, 3000);
</script>';
    }?></p>
</body>
</html>

