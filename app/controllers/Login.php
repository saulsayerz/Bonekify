<?php 
class Login extends Controller{
    public function index(){
        if (!isset($_SESSION["username"])) {
            //MENANGKAP KALAU TOMBOL SUBMIT DIPENCET
            if (isset($_POST["emailnama"])){
                $data = array();
                $emailnama = $_POST["emailnama"];
                $sandi = $_POST["sandi"];

                $data = $this->model("user_model")->isLoginValid($emailnama,$sandi);

                if ($data["valid"] == 1){
                    setcookie("username", $data["username"], time() + (86400 * 30), "/"); 
                    setcookie("isAdmin", $data["isAdmin"], time() + (86400 * 30), "/"); 
                    setcookie("playCount_LoggedIn", $data["playCount"], time() + (86400 * 30), "/"); 
                    $_SESSION["username"] = $data["username"];
                    $_SESSION["isAdmin"] = $data["isAdmin"];
                    $_SESSION["playCount_LoggedIn"] = $data["playCount"];
                    header('Location: ' . BASEURL . '/');
                }
                else{
                    $this->view('Login/index', $data);
                }
            // INI KALAU RENDER TEMPLATE BIASA
            } else {
                $this->view('Login/index');
            }
        } else {
            header('Location: ' . BASEURL . '/');
        }
    }
}
?>