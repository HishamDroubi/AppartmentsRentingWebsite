<?php

class City
{
    private $conn;
    public $city_id;
    public $city_name;
    public $sub_city;

    function __construct($conn)
    {
        $this->conn = $conn;
    }



    public function getAllCities()
    {
        try {
            $sql = "select * from cities";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            if ($stmt->execute()) {
                return $stmt;
            }
        } catch (PDOException $ex) {
            echo $ex->getMessage();
        }
    }

    public function getCityAppartments()
    {
        try {
            $sql = "select * from appartments join sub_cities using (sub_city_id) join appartment_pic using (appartment_id) join customer using(customer_id) where city_id=?
         GROUP BY appartment_id ";
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
}
