<?php

class Sub_City
{
    private $conn;
    public $sub_city_id;
    public $sub_city_name;
    public $city_id;

    function __construct($conn)
    {
        $this->conn = $conn;
    }



    public function getAllSub_CitiesForCity()
    {
        try {
            $sql = "select * from sub_cities where city_id=?";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->city_id);
            $stmt->execute();
            if ($stmt->execute()) {
                return $stmt;
            }
        } catch (PDOException $ex) {
            echo $ex->getMessage();
        }
    }

    public function getSub_CityAppartments()
    {
        try {
            $sql = "select * from appartments join appartment_pic using(appartment_id) join customer using(customer_id) where sub_city_id=? group by (appartment_id)";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->sub_city_id);
            $stmt->execute();
            if ($stmt->execute()) {
                return $stmt;
            }
        } catch (PDOException $ex) {
            echo $ex->getMessage();
        }
    }


    public function getAllSub_Cities()
    {
        try {
            $sql = "select * from sub_cities";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            if ($stmt->execute()) {
                return $stmt;
            }
        } catch (PDOException $ex) {
            echo $ex->getMessage();
        }
    }
}
