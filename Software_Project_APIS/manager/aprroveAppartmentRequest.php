<?php
session_start();
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
include_once '../dataBaseConn/connection.php';
include_once '../models/manager.php';
include_once '../testInput.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST'&& isset($_SESSION['login'])&&isset($_SESSION['admin']) ) {
    $db = new Database();
    $conn = $db->connect();
    
    $manager = new Manager($conn);
    $manager->appartment_id=$_POST['appartment_id'];
    $stmt=$manager->approveAppartmentRequest();
    if($stmt)
    print_r(json_encode(mb_convert_encoding(True, "UTF-8")));
    else
    print_r(json_encode(mb_convert_encoding(False, "UTF-8")));
}
