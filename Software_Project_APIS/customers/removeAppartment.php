<?php
session_start();

header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');

include_once '../dataBaseConn/connection.php';
include_once '../models/customer.php';

//
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['id'])) {
    $db = new Database();
    $conn = $db->connect();
    $customer = new Customer($conn);
    $customer->appartment_id = $_POST['appartment_id'];
    $customer->token = $_POST['token'];
    $customer->message = $_POST['message'];
    $stmt = $customer->removeAppartment();
    if ($stmt) {
        print_r(json_encode(mb_convert_encoding("Sucsses", "UTF-8")));
        exit();
    } else {
        print_r(json_encode(mb_convert_encoding("Fail", "UTF-8")));
    }
}
