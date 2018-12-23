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
                    $_SESSION['name'] = $userLogin[0];
                    $_SESSION['auth'] = true;
                    echo '0';
                    break;
                } else {
                    echo '3';
                }
            }
        }
    }
}



