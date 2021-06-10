<?php
session_start();
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');


include_once '../dataBaseConn/connection.php';
include_once '../models/customer.php';


if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_SESSION['id'])) {
    session_destroy();
}
