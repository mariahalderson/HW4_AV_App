<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);

function login($username, $password)
{
  require_once('./../../includes/connect.php');

   //Check user password
   $check_user_psw = "SELECT user_password FROM tbl_user WHERE user_name = :username";
   $user_psw = $pdo->prepare($check_user_psw);
   $user_psw->execute(
     array(
       ':username'=> $username,
     )
   );
   $user_pass = $user_psw->fetchColumn();
   echo $user_pass;
   if($user_pass === $password) 
   {
     
    $get_user_query = "SELECT * FROM tbl_user WHERE user_name = :username";
    $get_user_set = $pdo->prepare($get_user_query);
    $get_user_set->execute(
        array(
      ":username" => $username
      )
    );
      while ($found_user = $get_user_set->fetch(PDO::FETCH_ASSOC)) 
      {
        $id = $found_user['user_id'];
        // $_SESSION['user_id'] = $id;
        // $_SESSION['user_name'] = $found_user['user_name'];
        // $_SESSION['user_login_time'] = $found_user['user_login_time'];

        
        $user = array();
        $user["id"] = $found_user["user_id"];
        $user["username"] = $found_user["user_name"];
        $user["admin"] = $found_user["user_admin"];
        $user["access"] = $found_user["user_access"];
        return $user;
   }
 } 
 else 
 {
  $message = 'Login Failed';
  return $message;
 }
}