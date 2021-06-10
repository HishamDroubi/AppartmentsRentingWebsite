<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');

include_once '../dataBaseConn/connection.php';
include_once '../models/customer.php';
include_once '../testInput.php';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $db = new Database();
    $conn = $db->connect();
    $customer = new Customer($conn);
    $customer->customer_id = test_input($_POST['customer_id']);
    $customer->password = password_hash(test_input($_POST['password']), PASSWORD_DEFAULT);
    $customer->name = test_input($_POST['name']);
    $customer->phone = test_input($_POST['phone']);
    $customer->email = test_input($_POST['email']);
    $customer->status = 1;
    $customer->register_date =  date("Y/m/d");
    $respone = $customer->signUpCustomer();
    print_r(json_encode($respone));
}
