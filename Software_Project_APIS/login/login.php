<?php
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
include_once '../dataBaseConn/connection.php';
include_once '../models/sign_in.php';
include_once '../testInput.php';

if ($_SERVER['REQUEST_METHOD'] === "POST") {

    $db = new Database();
    $conn = $db->connect();
    $customer_id = $_POST['customer_id'];
    $password = $_POST['password'];
    $token = $_POST['token'];
    $signin = new signin($conn);
    $isloggedin = $signin->UserLogin($customer_id, $password, $token);
    print_r(json_encode($isloggedin));
}
