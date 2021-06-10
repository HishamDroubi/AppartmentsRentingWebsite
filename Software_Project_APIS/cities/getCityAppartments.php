<?php
session_start();

header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');

include_once '../dataBaseConn/connection.php';
include_once '../models/city.php';

//

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $db = new Database();


    $conn = $db->connect();


    $city = new City($conn);

    $city->city_id = $_GET['city_id'];

    $stmt = $city->getCityAppartments();

    if ($stmt && $stmt->rowCount() > 0) {
        $data = array();

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

            array_push($data, $row);
        }

        print_r(json_encode(mb_convert_encoding($data, "UTF-8")));
    } else {
        print_r(json_encode(mb_convert_encoding(array(), "UTF-8", "UTF-8")));
    }
}
