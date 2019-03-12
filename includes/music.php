<?php

require 'functions.php';

if (isset($_GET['music'])) {
    // pass the connection and the movie id to a function
    $data = get_single_music($pdo, $_GET['music']);
    echo json_encode($data);
} else {
    // pass the connection and the movie id to a function
    $data = get_all_music($pdo);
    echo json_encode($data);
}
