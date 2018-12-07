<?php 

$host = "localhost";
$un = "root";
$pass = "";
$db= "db_avapp";

$conn = mysqli_connect($host, $un, $pass, $db);
mysqli_set_charset($conn, 'utf8');

// if(!$conn){
//     echo "something broke...";
//     exit;
// }

// echo "connected!";

if(isset($_GET["vid"])){
    $videos = $_GET["vid"];

    $query = "SELECT * FROM tbl_video";
    $result = mysqli_query($conn, $query);
    $rows = array();

    while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
}

echo json_encode($rows);

?>