<?php
session_start();

header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');


include_once '../dataBaseConn/connection.php';
include_once '../models/customer.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_SESSION['name'])) {
    $db = new Database();
    $conn = $db->connect();
    $customer = new Customer($conn);
    $customer->customer_id = $_SESSION['id'];
    $stmt = $customer->getAllCustomerData();
    if ($stmt->rowCount() > 0) {
        $data = array();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        print_r(json_encode($row));
        exit();
    }
    print_r(json_encode('user_not_found'));
}
