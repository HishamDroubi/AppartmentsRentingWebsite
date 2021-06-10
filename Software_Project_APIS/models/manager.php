<?php

class Manager
{
    // customers
    public $customer_id;
    public $name;
    public $phone;
    public $email;
    public $password;
    public $register_date;
    public $status;
  

    //Appartments
    public  $appartment_id;
    public	$title;
    public	$floor_number;
    public	$number_of_rooms;
    public 	$description;
    public  $capacity;
    public	$price;
    public 	$type;
    public 	$address;
    public 	$manager_id;
    public 	$appartment_status;
    public 	$sub_city_id;

    private $conn;




    function __construct($conn)
    {
        $this->conn = $conn;
    }

    

   public function banUser(){
      try{
       
        $sql = "UPDATE customer 
        SET 
            status = 0
        WHERE
            customer_id = ?;";
            
            $stmt=$this->conn->prepare($sql);
            $stmt->bindParam(1,$this->customer_id);
            $stmt->execute();
            if($stmt){
            return true;
            }


      }catch (PDOEXCEPTION $err) {

        echo $err->getMessage();
        return false;
    }
   }

  public function getAllUsers(){
    try{
       
        $sql = "select * from customer";
            $stmt=$this->conn->prepare($sql);
           
            $stmt->execute();
            if($stmt){
            return $stmt;
            }


      }catch (PDOEXCEPTION $err) {

        echo $err->getMessage();
        return false;
    }
  }
   public function approveAppartmentRequest(){
    try{
       
        $sql = "UPDATE appartments
        SET 
            status = 1
        WHERE
            appartment_id = ?;
        ";
            $stmt=$this->conn->prepare($sql);
            $stmt->bindParam(1,$this->appartment_id);
            $stmt->execute();
            if($stmt){
            return true;
            }


      }catch (PDOEXCEPTION $err) {

        echo $err->getMessage();
        return false;
    }
   }

   
   
}
