<?php

class Customer
{
    // customers
    public $customer_id;
    public $name;
    public $phone;
    public $email;
    public $password;
    public $register_date;
    public $status = 1;
    // reservations 
    public $reservation_id;
    public $appartment_id;
    public $date;
    public $message;
    public $reservation_status;
    public $cost;

    //appartments 

    public    $title;
    public    $floor_number;
    public    $number_of_rooms;
    public     $description;

    public    $price;
    public     $type;
    public     $address;

    //public 	$status;
    public $sub_city_id;
    public $pic_url = array();
    public $token;
    private $conn;




    function __construct($conn)
    {
        $this->conn = $conn;
    }

    public  function getAllCustomerData()
    {
        // updated
        try {
            $sql = "SELECT * FROM `customer`  WHERE customer_id = ? ";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);
            if ($stmt->execute()) {
                return $stmt;
            }
        } catch (PDOException $err) {
            echo $err->getMessage();
            return false;
        }
    }

    public function signUpCustomer()
    {
        // updated
        try {
            // first check if the customer exists or not
            $sql  = 'SELECT `customer_id` FROM `customer` WHERE `customer_id`=?';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);
            $stmt->execute();
            if ($stmt->rowCount() > 0) {
                return 'exists';
            }
            $sql  = 'SELECT `email` FROM `customer` WHERE `email`=?';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->email);
            $stmt->execute();
            if ($stmt->rowCount() > 0) {
                return 'exists';
            }
            //
            $sql = 'INSERT INTO `customer`(`customer_id`, `name`, `phone`,`email`, `password`, `register_date`, `status`) VALUES (?,?,?,?,?,?,1)';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);
            $stmt->bindParam(2, $this->name);
            $stmt->bindParam(3, $this->phone);
            $stmt->bindParam(4, $this->email);
            $stmt->bindParam(5, $this->password);
            $stmt->bindParam(6, $this->register_date);
            if ($stmt->execute()) return true;
        } catch (PDOEXCEPTION $err) {

            echo $err->getMessage();
            return false;
        }
    }
    public function getWishlist()
    {
        try {
            $sql = "SELECT c.customer_id,c.status,a.appartment_id,a.title,a.status,a.sub_city_id FROM `wishlist` as w join customer as c 
            USING (customer_id) join appartments as a using (appartment_id)
            where 
            c.customer_id=? 
            and 
            c.status=1
            and a.status = 1";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);


            if ($stmt->execute()) {
                return $stmt;
            }
        } catch (PDOException $err) {
            return false;
        }
    }



    function updateCustomer()
    {
        //updated
        try {
            if (!empty($this->password)) {
                $sql = 'UPDATE `customer` SET `name`=?,`phone`=?,`email`=?,`password`=?  where customer_id = ? ';
                $stmt = $this->conn->prepare($sql);
                $stmt->bindParam(1, $this->name);
                $stmt->bindParam(2, $this->phone);
                $stmt->bindParam(3, $this->email);
                $stmt->bindParam(4, $this->password);
                $stmt->bindParam(5, $this->customer_id);
            } else {
                $sql = 'UPDATE `customer` SET `name`=?,`phone`=?,`email`=? where customer_id = ? ';
                $stmt = $this->conn->prepare($sql);
                $stmt->bindParam(1, $this->name);
                $stmt->bindParam(2, $this->phone);
                $stmt->bindParam(3, $this->email);
                $stmt->bindParam(4, $this->customer_id);
            }
            if ($stmt->execute()) return true;
        } catch (PDOEXCEPTION $err) {
            return $err->getMessage();
        }
    }

    function reserveAppartment()
    {   // updated

        try {
            $sql = 'INSERT INTO `reservation`(`appartment_id`, `date`, `customer_id`,`status`,`message`) VALUES (?,?,?,?,?)';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->appartment_id);
            $stmt->bindParam(2, $this->date);
            $stmt->bindParam(3, $this->customer_id);
            $stmt->bindParam(4, $this->reservation_status);
            $stmt->bindParam(5, $this->message);
            if ($stmt->execute())
                return true;
        } catch (PDOEXCEPTION $err) {
            echo $err->getMessage();
            return false;
        }
    }

    function editUserData()
    {
        try {
            $sql = "UPDATE customer 
        SET 
            phone = ?
        WHERE
            customer_id = ?;";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->password);
            $stmt->bindParam(2, $this->customer_id);

            if ($stmt->execute()) {
                return $stmt;
            }
        } catch (PDOException $err) {
            echo $err->getMessage();
            return false;
        }
    }
    public function addToWishlist()
    {
        try {
            $sql = "insert into wishlist(customer_id,appartment_id) values (?,?);";

            $stmt = $this->conn->prepare($sql);

            $stmt->bindParam(1, $this->customer_id);
            $stmt->bindParam(2, $this->appartment_id);

            if ($stmt->execute()) {
                return $stmt;
            }
        } catch (PDOException $err) {
            echo $err->getMessage();
            return false;
        }
    }
    public function removeFromWishList()
    {
        try {
            $sql = "DELETE  from wishlist where customer_id=? and appartment_id=?;";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);
            $stmt->bindParam(2, $this->appartment_id);


            if ($stmt->execute()) {
                return $stmt;
            }
        } catch (PDOException $err) {
            echo $err->getMessage();
            return false;
        }
    }

    public function addAppartment()
    {


        try {
            $sql = "Insert into appartments (title,floor_number,number_of_rooms,description,price,type,address,customer_id,
        status,sub_city_id)
        Values(?,?,?,?,?,?,?,?,2,?)";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->title);
            $stmt->bindParam(2, $this->floor_number);
            $stmt->bindParam(3, $this->number_of_rooms);
            $stmt->bindParam(4, $this->description);
            $stmt->bindParam(5, $this->price);
            $stmt->bindParam(6, $this->type);
            $stmt->bindParam(7, $this->address);
            $stmt->bindParam(8, $this->customer_id);
            $stmt->bindParam(9, $this->sub_city_id);

            if ($stmt->execute()) {
                $id = $this->conn->lastInsertId();
                $n = count($this->pic_url);
                for ($i = 0; $i < $n; $i++) {
                    $sql = "Insert into appartment_pic (appartment_id,pic_path) values(?,?)";
                    $stmt = $this->conn->prepare($sql);
                    $stmt->bindParam(1, $id);
                    $stmt->bindParam(2, $this->pic_url[$i]);
                    $stmt->execute();
                }
                return true;
            }
        } catch (PDOException $err) {
            echo $err->getMessage();
            return false;
        }
    }
    public function removeAppartment()
    {
        try {
            $sql = "delete from appartments where appartment_id=?";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->appartment_id);
            if ($stmt->execute()) {
                return $stmt;
            }
        } catch (PDOException $err) {
            echo $err->getMessage();
            return false;
        }
    }
    function getCustomerReservations()
    {   // updated

        try {
            $sql = 'SELECT r.*,a.*,c.*,s.*,city.* FROM `reservation` as r
            join customer as c using(customer_id) 
            join appartments as a using(appartment_id)
            join sub_cities as s using(sub_city_id) 
            join cities as city  using(city_id)
            where r.customer_id=?';

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);

            if ($stmt->execute()) {
                return $stmt;
            }
        } catch (PDOException $err) {
            echo $err->getMessage();
            return false;
        }
    }

    function getPictures()
    {
        try {
            $sql = 'SELECT * FROM appartment_pic where appartment_id=?';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->appartment_id);
            if ($stmt->execute()) {
                return $stmt;
            }
        } catch (PDOException $err) {
            echo $err->getMessage();
            return false;
        }
    }
    function deleteToken()
    {
        try {
            $sql = 'update customer set token = null where customer_id = ?';
            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(1, $this->customer_id);
            if ($stmt->execute()) {
                return true;
            }
        } catch (PDOException $err) {
            echo $err->getMessage();
            return false;
        }
    }

    function sendFCM($type, $reciver, $senderToken, $text)
    {

        $API_KEY = "AAAAz0etoLY:APA91bGfqTzBjuwt8gGEnwqCTIx760VVgcpybk0AQ_-z4HqegbRA8rtfwqFcfdNolx025cso8Rhop2lAVeOC90QZJe-6iaAlrmXTCuaDTky6BCOQ-riDBpfYqgTO-FXsdGHs0DhZx-NC";
        $url = 'https://fcm.googleapis.com/fcm/send';
        $message = array(
            'header' =>  $type,
            'body' => $text,
            'sender' => $senderToken,
        );
        $fields = array(
            'to' => $reciver,
            'data' => $message,
        );
        $fields = json_encode($fields);
        $headers = array(
            'Authorization: key=' . $API_KEY,
            'Content-Type: application/json'
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
        $result = curl_exec($ch);
        curl_close($ch);
        return 'success';
    }


    function sendFCM1($type, $senderToken, $ReciverToken, $text)
    {
        if (!isset($ReciverToken)) {
            return 'offline';
        }

        $API_KEY = "AAAAz0etoLY:APA91bGfqTzBjuwt8gGEnwqCTIx760VVgcpybk0AQ_-z4HqegbRA8rtfwqFcfdNolx025cso8Rhop2lAVeOC90QZJe-6iaAlrmXTCuaDTky6BCOQ-riDBpfYqgTO-FXsdGHs0DhZx-NC";
        $url = 'https://fcm.googleapis.com/fcm/send';
        $message = array(
            'header' =>  $type,
            'body' => $text,
            'sender' => $senderToken,
        );
        $fields = array(
            'to' => $ReciverToken,
            'data' => $message,
        );
        $fields = json_encode($fields);
        $headers = array(
            'Authorization: key=' . $API_KEY,
            'Content-Type: application/json'
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
        $result = curl_exec($ch);
        curl_close($ch);
        return 'success';
    }
}
