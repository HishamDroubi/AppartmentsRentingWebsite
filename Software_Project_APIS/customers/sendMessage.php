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
    print_r($_POST);
    $senderToken = $_POST['senderToken'];
    $ReciverToken = $_POST['ReciverToken'];
    $response = $_POST['response'];
    echo  $customer->sendFCM1('res', $senderToken, $ReciverToken, $_POST['response']);
}
