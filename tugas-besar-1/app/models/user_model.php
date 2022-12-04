<?php
require_once "db_util.php";
class user_model{
    public function getListUser(){
        $db = db_util::connect();
        $query = "SELECT user_id, username, email, isAdmin, playCount FROM User ORDER BY user_id ASC";
        $result = mysqli_query($db, $query);
        $json = mysqli_fetch_all($result, MYSQLI_ASSOC);
        return $json;
    }

    public function getPlayCount($username){
        $db = db_util::connect();
        $query = "SELECT playCount FROM User WHERE username = \"" . $username . "\"";
        $result = mysqli_query($db, $query);
        $json = mysqli_fetch_all($result, MYSQLI_ASSOC);
        return $json;
    }

    public function updatePlayCount($username, $playcount){
        $db = db_util::connect();
        $query = "UPDATE User SET playCount=" . $playcount . " WHERE username =\"" . $username . "\"";
        return mysqli_query($db, $query);
    }

    public function isEmailTaken($email){
        $db = db_util::connect();
        $sql = "SELECT * FROM User WHERE email = \"" . $email . "\"";

        $result = mysqli_query($db, $sql);
        $result2 = mysqli_fetch_assoc($result);


        if ($result2) { // KALAU KETEMU
            return 1;
        }
        else{
            return 0;
        }
    }
    public function isNamaTaken($nama){
        $db = db_util::connect();
        $sql = "SELECT * FROM User WHERE username = \"" . $nama . "\"";

        $result = mysqli_query($db, $sql);
        $result2 = mysqli_fetch_assoc($result);


        if ($result2) { // KALAU KETEMU
            return 1;
        }
        else{
            return 0;
        }
    }

    public function addAccount($email, $password, $nama){
        $db = db_util::connect();
        $passwordHashed = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO User (email, password, username, isAdmin, playCount) VALUES
        ('" . $email . "','" . $passwordHashed . "','" . $nama ."',0,0)";
        mysqli_query($db, $sql) ;

        $sql = "SELECT user_id FROM User WHERE username='".$nama."'";
        $result = mysqli_query($db, $sql);
        $result2 = mysqli_fetch_assoc($result);
        return $result2["user_id"];
    }

    public function isLoginValid($emailnama, $sandi){
        $data = array();

        $db = db_util::connect();
        $sql = "SELECT * FROM User WHERE email = \"" . $emailnama . "\" OR username = \"" . $emailnama . "\"";

        $result = mysqli_query($db, $sql);
        $result2 = mysqli_fetch_assoc($result);


        if ($result2) { // KALAU username / emailnya ada
            $data["exists"] = 1;
            if (password_verify($sandi, $result2["password"])){
                $data["valid"] = 1;
            }
            else{
                $data["valid"] = 0;
            }
            $data["isAdmin"] = $result2["isAdmin"];
            $data["username"] = $result2["username"];
            $data["playCount"] = $result2["playCount"];
            $data["user_id"] = $result2["user_id"];
        }
        else{
            $data["exists"] = 0;
            $data["valid"] = 0;
        }
        return $data;
    }
}
?>