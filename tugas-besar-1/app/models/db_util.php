<?php
class db_util{
    public static function connect(){
        $mysqli = new mysqli("db-plain","user","user","plain_database");

        if($mysqli->connect_error) {
            exit('Could not connect');
        }

        return $mysqli;
    }
}
?>