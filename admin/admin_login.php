<?php 
  ini_set('display_errors', 'On');
  error_reporting(E_ALL);
  require_once('./scripts/config.php');

  if(empty($_POST['username']) || empty($_POST['password'])){
    $message = 'Login Failed';
  }else {
    $username = trim(htmlspecialchars($_POST['username']));
    $password = trim(htmlspecialchars($_POST['password']));
    $message = login($username,$password);
  }
  echo json_encode($message);
