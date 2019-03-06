<?php 
ini_set('display_errors', 'On');
error_reporting(E_ALL);
    if (isset($_GET['allusers'])) {
      require_once('../../includes/connect.php');

        $get_all_users_query = 'SELECT * FROM tbl_user';

        $get_all_users = $pdo->prepare($get_all_users_query);
        $get_all_users->execute();

        $users = array();

        while($user = $get_all_users->fetch(PDO::FETCH_ASSOC)) {
            $currentuser =  array();
            $currentuser['id'] = $user['user_id'];
            $currentuser['username'] = $user['user_name'];
            $currentuser['name'] = $user['user_fname'];
            $currentuser['admin'] = $user['user_admin'];
            $currentuser['access'] = $user['user_access'];
            $currentuser['avatar'] = $user['user_avatar'];

            $users[] = $currentuser;
        }

        echo json_encode($users);
    }
