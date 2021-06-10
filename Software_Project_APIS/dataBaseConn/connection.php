<?php
class Database
{
    private $host='localhost';
    private $db_name='software_project';
    private $usernmae='root';
    private $password ='';
    private $charset='utf8mb4';
    private $conn;
    public $eMessage;
    public function connect()
    {
        $this->conn = null;
        try {
            $this->eMessage = 'connected';
            $this->conn = new PDO("mysql:host=" . $this->host . ';dbname=' . $this->db_name .';charset='.$this->charset, $this->usernmae, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $this->conn;
        } catch (PDOException $ex) {

            $this->eMessage = $ex->getMessage();
        } 
    }
}
