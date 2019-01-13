<?php
require 'connect.php';


function get_all_videos($pdo) {
    $query = "SELECT * FROM tbl_video";

    $get_video = $pdo->query($query);
    $results = array();

    while($row = $get_video->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results;
}


function get_single_video($pdo, $vid) {
    $query = "SELECT * FROM tbl_video WHERE id = :id";

    $get_video = $pdo->prepare($query);
    $get_video->execute(array(
      'id'=>$vid
    ));
    $results = array();

    while($row = $get_video->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;

        // you could run subresult queries here - just write another function and append.
    }

    return $results;
}


?>