<?php
session_start();

header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');

include_once '../dataBaseConn/connection.php';
include_once '../models/manager.php';

//
if ($_SERVER['REQUEST_METHOD'] === 'GET'&& isset($_SESSION['login'])&&isset($_SESSION['admin'])) {
    $db = new Database();
    $conn = $db->connect();
    $manager = new Manager($conn);
  
    $stmt=$manager->getAllUsers();
    $data = array();

    if ($stmt && $stmt->rowCount() > 0) {
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

            array_push($data, $row);
        }
        print_r(json_encode(mb_convert_encoding($data, "UTF-8")));
        exit();
    } else {
        print_r(json_encode(mb_convert_encoding("Empty", "UTF-8")));
    }
}