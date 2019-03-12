<?php

require 'functions.php';

if (isset($_GET['tv'])) {
    // pass the connection and the movie id to a function
    $data = get_single_tv($pdo, $_GET['tv']);
    echo json_encode($data);
} else {
    // pass the connection and the movie id to a function
    $data = get_all_tv($pdo);
    echo json_encode($data);
}
