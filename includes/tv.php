<?php

require 'functions.php';

if (isset($_GET['id'])) {
    // pass the connection and the movie id to a function
    $data = get_single_tv($pdo, $_GET['id']);
    echo json_encode($data);
} else {
    // pass the connection and the movie id to a function
    if(isset($_GET['decade'])){
      $decade = $_GET['decade'];
    }else{
      $decade = '0';
    }
    $data = get_all_tv($pdo, $decade);
    echo json_encode($data);
}
