<?php

class Appartment
{
    private $conn;
    public  $appartment_id;
    public    $title;
    public    $floor_number;
    public    $number_of_rooms;
    public     $description;
    public  $capacity;
    public    $price;
    public     $type;
    public     $address;
    public     $manager_id;
    public     $status;
    public     $sub_city_id;
    public  $pic_path;

    function __construct($conn)
    {
        $this->conn = $conn;
    }


    function getAllAppartments()
    {
        try {
            $sql = "select * from appartments join sub_cities using (sub_city_id) join cities using (city_id)
        join appartment_pic using (appartment_id) join customer using (customer_id) GROUP BY(appartment_id)";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            $n = $stmt->rowCount();
            if ($stmt->execute())
                return $stmt;
        } catch (PDOException $ex) {
            echo $ex->getMessage();
        }
    }
    function addPicture()
    {
        try {
            $sql = "insert into appartment_pic (appartment_id,pic_path) values (?,?)";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->appartment_id);
            $stmt->bindParam(2, $this->pic_path);

            if ($stmt->execute())
                return true;
        } catch (PDOException $ex) {
            echo $ex->getMessage();
        }
    }


    function getAppartmentReservations()
    {
        try {
            $sql = "select reservation_id,appartment_id,date,customer_id,phone,name from reservation join customer using (customer_id)
             where appartment_id=?";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->appartment_id);

            if ($stmt->execute())
                return $stmt;
        } catch (PDOException $ex) {
            echo $ex->getMessage();
        }
    }
    function filterByPrice()
    {
        try {
            $sql = "select * from appartments join appartment_pic using (appartment_id) join customer using(customer_id) where price between ? and ? GROUP BY(appartment_id) ";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->min_price);
            $stmt->bindParam(2, $this->max_price);

            if ($stmt->execute())
                return $stmt;
        } catch (PDOException $ex) {
            echo $ex->getMessage();
        }
    }
}
