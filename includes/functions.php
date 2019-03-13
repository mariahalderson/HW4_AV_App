<?php
require_once 'connect.php';


function get_all_videos($pdo, $decade)
{
  if($decade !== '0'){
    $query = "SELECT * FROM tbl_video WHERE video_year LIKE '__$decade%'";
    $get_decade = $pdo->query($query);
  }else{
    $query = "SELECT * FROM tbl_video";
    $get_decade = $pdo->query($query);
  }

    while ($row = $get_decade->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results;
}


function get_single_video($pdo, $vid)
{
    $query = "SELECT * FROM tbl_video WHERE video_id = :id";
    //echo $query;exit;
    $get_video = $pdo->prepare($query);
    $get_video->execute(array(
      ':id'=>$vid
    ));
    //var_dump($get_video);exit;

    $results = array();

    while ($row = $get_video->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;

        // you could run subresult queries here - just write another function and append.
    }

    return $results;
}
function get_all_music($pdo, $decade)
{
    // $query = "SELECT * FROM tbl_music";
    //echo $decade;exit();
    if($decade !== '0'){
      $query = "SELECT * FROM tbl_music WHERE video_year LIKE '__$decade%'";
      $get_decade = $pdo->query($query);
    }else{
      $query = "SELECT * FROM tbl_music";
      $get_decade = $pdo->query($query);
    }

    $results = array();

    while ($row = $get_decade->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results;
}


function get_single_music($pdo, $music)
{
    $query = "SELECT * FROM tbl_music WHERE music_id = :id";
    //echo $query;exit;
    $get_music = $pdo->prepare($query);
    $get_music->execute(array(
      ':id'=>$music
    ));
    //var_dump($get_video);exit;

    $results = array();

    while ($row = $get_music->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;

        // you could run subresult queries here - just write another function and append.
    }

    return $results;
}

function get_all_tv($pdo, $decade)
{
  if($decade !== '0'){
    $query = "SELECT * FROM tbl_tv WHERE tv_year LIKE '__$decade%'";
    $get_decade = $pdo->query($query);
  }else{
    $query = "SELECT * FROM tbl_tv";
    $get_decade = $pdo->query($query);
  }
    $results = array();

    while ($row = $get_decade->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results;
}


function get_single_tv($pdo, $tv)
{
    $query = "SELECT * FROM tbl_tv WHERE tv_id = :id";
    //echo $query;exit;
    $get_tv = $pdo->prepare($query);
    $get_tv->execute(array(
      ':id'=>$tv
    ));
    //var_dump($get_video);exit;

    $results = array();

    while ($row = $get_tv->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;

        // you could run subresult queries here - just write another function and append.
    }

    return $results;
}
