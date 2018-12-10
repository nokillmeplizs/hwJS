<?php
session_start();
unset($_SESSION['auth']);
header('Location: authorization.php');
exit();
