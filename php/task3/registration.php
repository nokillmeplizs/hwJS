<?php
session_start();
$post = $_POST;
$filename = 'base.csv';
$res = file ( $filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$_SESSION['id']= session_id();
$result = $post['login'].';'.password_hash($post['password'],PASSWORD_DEFAULT).';'.$post['id'];
$count = 0;
if (isset($post['login'])){
    if(!empty($res)){
        foreach ($res as $onerow){
            $userLogin = explode(";", $onerow);
            if($post['login'] !== $userLogin[0]){
                continue;
            }
            elseif ($post['login'] == $userLogin[0]){
                echo  '2';
                $count++;
                break;
            }
        }
        if ($count == 0){
            writeFile($filename, $result."\r\n");
            echo  '1';
        }
    }
    else{
        writeFile($filename, $result."\r\n");
        echo  '1';
        ;
    }
}
function writeFile($filename, $data) {
    $fp = fopen($filename, 'a'); // w
    fwrite($fp, $data);
    fclose($fp);
}



