<?php 
  ini_set('display_errors', 'On');
  error_reporting(E_ALL);
  require_once('./scripts/config.php');

  if(empty($_POST['username']) || empty($_POST['password'])){
    $message = 'Login Failed';
  }else {
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);
    $message = login($username,$password);
  }
  echo json_encode($message);
