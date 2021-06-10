<?php

session_start();

header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');

include_once '../dataBaseConn/connection.php';
include_once '../models/customer.php';


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $db = new Database();
    $conn = $db->connect();
    $customer = new Customer($conn);
    $customer->appartment_id = $_GET['appartment_id'];
    $stmt = $customer->getPictures();
    $data = array();
    if ($stmt->rowCount() > 0) {
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            array_push($data, $row);
        }
        print_r(json_encode($data));
    } else {
        print_r(json_encode(false));
    }
}
