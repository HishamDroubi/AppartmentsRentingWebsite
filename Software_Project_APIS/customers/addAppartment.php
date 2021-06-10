<?php
session_start();

header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');

include_once '../dataBaseConn/connection.php';
include_once '../models/customer.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['id'])) {
  $db = new Database();
  $conn = $db->connect();
  $customer = new Customer($conn);
  $customer->customer_id = $_SESSION['id'];
  $customer->floor_number = $_POST['floor_number'];
  $customer->title = $_POST['title'];
  $customer->number_of_rooms = $_POST['number_of_rooms'];
  $customer->description = $_POST['description'];
  $customer->price = $_POST['price'];
  $customer->type = $_POST['type'];
  $customer->address = null;
  $customer->sub_city_id = $_POST['sub_city_id'];
  $failedPictures = array();
  $file_new_dest = 'hi';
  //succsesfull upload   
  $n = count($_FILES);

  $jo = '{"status":"3"}';
  if ($n == 0) {
    //no picture
    $jo = '{"status":"0"}';
    echo $jo;
  } else {
    $_FILES = array_values($_FILES);
    for ($i = 0; $i < $n; $i++) {
      $file_name = $_FILES[$i]['name'];
      $full_name_array = explode('.', $file_name);
      $file_ext = strtolower(end($full_name_array));
      $alowwed_ext = array('jpg', 'png', 'jpeg');
      if (!in_array($file_ext, $alowwed_ext)) {
        //this file type is not allowed
        array_push($failedPictures, $_FILES[$i]['name']);
      } else {
        if ($_FILES[$i]['error'] != 0) {
          //there is an error
          array_push($failedPictures, $_FILES[$i]['name']);
        } else {
          $file_new_name = uniqid('', true) . '.' . $file_ext;
          $file_new_dest = 'uploads/' . $file_new_name;
          move_uploaded_file($_FILES[$i]['tmp_name'], $file_new_dest);
          array_push($customer->pic_url, $file_new_dest);
        }
      }
    }
  }
  $stmt = $customer->addAppartment();
  if ($stmt) {
    print_r(json_encode(mb_convert_encoding(true, "UTF-8")));
    exit();
  } else {
    print_r(json_encode(mb_convert_encoding(false, "UTF-8")));
  }
}
