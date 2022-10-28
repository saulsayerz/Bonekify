<?php 
class Users extends Controller{
    public function index() {
        if (isset($_SESSION["username"])) {
            if ($_COOKIE["playCount_LoggedIn"] != $_SESSION["playCount_LoggedIn"]) {
                $_SESSION["playCount_LoggedIn"] = $_COOKIE["playCount_LoggedIn"];
                $this->model("user_model")->updatePlayCount($_SESSION["username"], $_SESSION["playCount_LoggedIn"]);
            }
        }

        if (isset($_SESSION["isAdmin"]) and $_SESSION["isAdmin"] == 1) {
            $data=[];
            $data["users"] = $this->model('user_model')->getListUser();
            $data["route"] = 'Daftar User';
            $data["title"] = 'Daftar User | Bonekify';
            
            $this->view('Templates/header',$data);
            $this->view('Users/index',$data);
            $this->view('Templates/footer');
        
        } else {
            header('Location: ' . BASEURL . '/');
        }   
    }
}
?>