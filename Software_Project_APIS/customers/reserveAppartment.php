<?php
session_start();
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
include_once '../dataBaseConn/connection.php';
include_once '../models/customer.php';
include_once '../testInput.php';



if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['id'])) {
    $db = new Database();
    $conn = $db->connect();
    $customer = new Customer($conn);
    $customer->customer_id = $_SESSION['id'];
    $customer->appartment_id = $_POST['appartment_id'];
    $customer->message = $_POST['message'];
    $customer->reservation_status = 2;
    $token = $_POST['token'];
    $senderToken = $_POST['mytoken'];
    $customer->date = date("Y/m/d");
    $stmt = $customer->reserveAppartment();
    print_r($_POST);
    $customer->sendFCM('res', $token, $senderToken, $customer->message);
    if ($stmt) {
        print_r(json_encode(true));
        exit();
    }
    print_r(json_encode(false));
}
