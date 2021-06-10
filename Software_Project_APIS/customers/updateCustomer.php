<?php
session_start();

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers:  Content-Type');

include_once '../dataBaseConn/connection.php';
include_once '../models/customer.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['id'])) {
    $db = new Database();
    $conn = $db->connect();
    $customer = new Customer($conn);
    // 
    // fill data
    $customer->customer_id = $_SESSION['id'];
    $customer->name = $_POST['name'];
    $customer->phone = $_POST['phone'];
    $customer->password = empty($_POST['new_password']) ? "" :  password_hash($_POST['new_password'], PASSWORD_DEFAULT);
    $customer->email = $_POST['email'];
    // functions
    $response = $customer->updateCustomer();
    print_r(json_encode($response));
}
