<?php
session_start();

header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');

include_once '../dataBaseConn/connection.php';
include_once '../models/appartment.php';
//
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_SESSION['name'])) {
    $db = new Database();
    $conn = $db->connect();
    $appartment = new Appartment($conn);
    $appartment->appartment_id = $_GET['appartment_id'];
    $stmt = $appartment->getAppartmentReservations();
    $data = array();

    if ($stmt && $stmt->rowCount() > 0) {
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            array_push($data, $row);
        }
        print_r(json_encode(mb_convert_encoding($data, "UTF-8")));
        exit();
    } else {
        print_r(json_encode(mb_convert_encoding(array(), "UTF-8")));
    }
}
