<?php
session_start();

header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');

include_once '../dataBaseConn/connection.php';
include_once '../models/appartment.php';

//
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['login'])) {
  $db = new Database();
  $conn = $db->connect();
  $appartment = new Appartment($conn);

  $appartment->appartment_id = $_POST['appartment_id'];

  //succsesfull upload
  $jo = '{"status":"3"}';
  if (!isset($_FILES['picture'])) {
    //no picture
    $jo = '{"status":"0"}';
    echo $jo;
  } else {
    $file = $_FILES['picture'];
    $file_name = $file['name'];
    $full_name_array = explode('.', $file_name);
    $file_ext = strtolower(end($full_name_array));
    $alowwed_ext = array('jpg', 'png', 'jpeg');
    if (!in_array($file_ext, $alowwed_ext)) {
      //this file type is not allowed
      $jo = '{"status":"1"}';
      echo $jo;
    } else {
      if ($file['error'] != 0) {
        //there is an error
        $jo = '{"status":"2"}';
        echo $jo;
      } else {
        $file_new_name = uniqid('', true) . '.' . $file_ext;
        $file_new_dest = 'C:/xampp/htdocs/software-project/uploads/' . $file_new_name;
        move_uploaded_file($file['tmp_name'], $file_new_dest);
        $appartment->pic_path = $file_new_dest;
      }
    }
  }

  $stmt = $appartment->addPicture();
  if ($stmt)
    print_r(json_encode(mb_convert_encoding(TRUE, "UTF-8")));
  else
    print_r(json_encode(mb_convert_encoding(False, "UTF-8")));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['customer_id'])) {
  $db = new Database();
  $conn = $db->connect();
  $appartment = new Appartment($conn);

  $appartment->appartment_id = $_POST['appartment_id'];

  //succsesfull upload
  $jo = '{"status":"3"}';
  if (!isset($_FILES['picture'])) {
    //no picture
    $jo = '{"status":"0"}';
    echo $jo;
  } else {
    $file = $_FILES['picture'];


    $file_name = $file['name'];
    $full_name_array = explode('.', $file_name);

    $file_ext = strtolower(end($full_name_array));

    $alowwed_ext = array('jpg', 'png', 'jpeg');

    if (!in_array($file_ext, $alowwed_ext)) {
      //this file type is not allowed
      $jo = '{"status":"1"}';
      echo $jo;
    } else {
      if ($file['error'] != 0) {
        //there is an error
        $jo = '{"status":"2"}';
        echo $jo;
      } else {
        $file_new_name = uniqid('', true) . '.' . $file_ext;
        $file_new_dest = 'C:/xampp/htdocs/software-project/uploads/' . $file_new_name;
        move_uploaded_file($file['tmp_name'], $file_new_dest);
        $appartment->pic_path = $file_new_dest;
      }
    }
  }

  $stmt = $appartment->addPicture();
  if ($stmt)
    print_r(json_encode(mb_convert_encoding(TRUE, "UTF-8")));
  else
    print_r(json_encode(mb_convert_encoding(False, "UTF-8")));
}
