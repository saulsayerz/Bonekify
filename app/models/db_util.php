<?php
class db_util{
    public static function connect(){
        $mysqli = new mysqli("db","user","user","song_database");

        if($mysqli->connect_error) {
            exit('Could not connect');
        }

        return $mysqli;
    }
}
?>