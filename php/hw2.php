<?php
//ini_set('error_reporting', E_ALL);
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//Выбрать 6-7 наиболее важных на Ваш взгляд функций для работы с массивами и разобрать их.
//

//Задача 1
//Написать рекурсивную функцию удаления непустого каталога:
//1. написать функцию, которая будет удалять каталог и все его содержимое
//2. Осуществить рекурсивный вызов в подкаталогах
//3. Дано: path - путь к каталогу
//

function deleteDir($dir){
    rmdir($dir);
    if(file_exists($dir)){
        $content = scandir($dir);
        $amount_content = count($content);
        for($i = 2; $i < $amount_content; $i++){
            $current_file = $content[$i];
            $path_current_file = "$dir".'/'."$current_file";
            if(!is_dir($path_current_file)) unlink($path_current_file);
            else{
                $path_current_file = "$path_current_file";
                deleteDir($path_current_file);
            }
        }
        rmdir($dir);
    }
}
//deleteDir('rrr');

function removeDirectory($dir) {
        foreach(glob($dir."/*") as $file_or_dir) {
            is_dir($file_or_dir) ? removeDirectory($file_or_dir) : unlink($file_or_dir);
        }
    rmdir($dir);
}
//removeDirectory('rrr');

//Задача 2
//1. создать html форму с одним текстовым полем и кнопкой submit
//2. пользователь вводит в форму ссылку (URL адрес)
//3. написать обработчик,
//который проверяет наличие такой же ссылки в файле,
//если не находит, то записывает ее в конец файла

$filename = 'test.txt';
$url = $_POST['url'];
function writeFile($filename, $data) {
    $fp = fopen($filename, 'a'); // w
    fwrite($fp, $data);
    fclose($fp);
}
if (filter_var($url, FILTER_VALIDATE_URL) === FALSE) {
    echo 'Это не является верным URL';
}
else{
    $res = file ( $filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if(in_array($url,$res)){
        echo 'такая ссылка уже есть в файле';
    }
    else{
        writeFile($filename, $url."\r\n");
        echo 'Url добавлен в файл';
    }
//    $count = 1;
//    foreach ($res as $item){
//        if ($item == $url){
//            echo 'такая ссылка уже есть в файле';
//            $count=0;
//            break;
//        }
//    }
//    if ($count === 1){
//        writeFile($filename, $url."\r\n");
//        echo 'Url добавлен в файл';
//    }
}
?>

<form method="post" action="">
    <input name="url" type="text" placeholder="Введите URL адрес">
    <input type="submit" value="отправить">
</form>

<?php
//Задачки к субботе и вторнику:
//Задание 1
//Реализовать загрузку нескольких файлов на сервер. На сервере проверять размер и тип файла, файлы, которые прошли проверку, загружать. Если файл не загружен сообщать пользователю имя файла и почему файл не был загружен.
//Пишите функции!
//
?>

<form enctype="multipart/form-data" action="" method="post">
    только фотографии не более 1мб <input name="picture[]" type="file" multiple accept="image/*"> <br>
    <input type="submit" value="Send">
</form>

<?php
function upload_image()
{
    $files = $_FILES;
    $name = $files['picture']['name'];
    $tmp_name = $files['picture']['tmp_name'];
    $type_file = $files['picture']['type'];
    $file_size = $files['picture']['size'];
    for ($i = 0; $i < count($tmp_name); $i++) {
        $string_to_search = "$type_file[$i]";
        $regex = "/image/";
        $num_matches = preg_match($regex, $string_to_search);
        if ($num_matches > 0) {
            if ($file_size[$i] < 1048576) {
                move_uploaded_file($tmp_name[$i], "rrr/$name[$i]");
                echo $name[$i] . ' загружен' . '<br>';
            } else {
                echo 'файл ' . $name[$i] . ' слишком большой и не будет загружен' . '<br>';
            }

        } else {
            echo 'файл ' . $name[$i] . ' не является изображением и не загружен' . '<br>';
        }
    }
}

    upload_image();



//Задание 2
//Простая система аутентификации по логин/паролю.
//Для хранения информации о пользователе использовать CSV файл.
//Пример записи:
//username;password;sess_id
//username;password;sess_id
//username;password;sess_id
//
//Имя пользователя должно быть уникальными.
//1)Сверстать HTML-форму для регистрации нового пользователя.
//2)Написать обработчик регистрационной формы:
//операция добавить нового пользователя в файл.
//Логин пользователя должен быть уникальным
//(реализовать функцию поиска совпадений по имени пользователя).
//3)Сверстать HTML-форму входа пользователя на сайт.
//4)Написать обработчик формы входа,
//который будет проверять существование пользователя в файле,
//сверять введенный хеш пароля и хеш из файла на равенство.
//Посмотрите функции password_hash() и password_verify()
//5)Создать закрытую страницу сайта, которая будет доступна только тем пользователям,
//которые прошли регистрацию и выполнили вход на сайт.
//Посмотрите функцию header("Location: адрес");
//6) Реализовать возможность разлогиниться
//Нравится
//Показать список оценивших
//Комментарий
//Поделиться
//Показать список поделившихся
