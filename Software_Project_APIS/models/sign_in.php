<?php
session_start();

include_once '../dataBaseConn/connection.php';
class signin
{


    private $conn;
    function __construct($conn)
    {
        $this->conn = $conn;
    }
    
    function UserLogin($id, $enter_password, $token)
    {

        $result = '';
        if (empty(trim($id))) {
            $result = 'empty';
            return $result;
        }
        try {
            $sql = "SELECT * FROM `customer` WHERE   customer_id= ?";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $id);
            $stmt->execute();

            if ($stmt->rowCount() == 0) {
                //this id is not in the database
                $jsonObj = '{"status":"2"}';
                return $jsonObj;
            }

            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $username = $row['name'];
            $email = $row['email'];
            $password = $row['password'];
            $status = $row['status'];
            $phone = $row['phone'];
            $register_date = $row['register_date'];
            if ($status == 0) {
                //banned user
                $jsonObj = '{"status":"3"}';
                return $jsonObj;
            } else {
                $de_hashed = password_verify($enter_password, $password);

                if ($de_hashed) {
                    $_SESSION['name'] = $username;
                    $_SESSION['id'] = $id;
                    $sql = 'UPDATE `customer` SET `token`= ? WHERE customer_id = ?';
                    $stmt = $this->conn->prepare($sql);
                    $stmt->bindParam(1, $token);
                    $stmt->bindParam(2, $id);
                    $stmt->execute();
                    $result = true;
                } else {
                    //password doesnt match
                    $jsonObj = '{"status":"4"}';
                    return $jsonObj;
                }
            }
        } catch (Exception $err) {
            $result = $err->getMessage();
        }
        //successful login
        $jsonObj = '{"status":"1"}';
        return $jsonObj;
    }
}
