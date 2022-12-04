<?php
class TambahAlbum extends Controller{
    public function index(){
        if (isset($_SESSION["username"])) {
            if ($_COOKIE["playCount_LoggedIn"] != $_SESSION["playCount_LoggedIn"]) {
                $_SESSION["playCount_LoggedIn"] = $_COOKIE["playCount_LoggedIn"];
                $this->model("user_model")->updatePlayCount($_SESSION["username"], $_SESSION["playCount_LoggedIn"]);
            }
        }

        if (isset($_SESSION["isAdmin"]) and $_SESSION["isAdmin"] == 1) {
            $data=[];
            $data["route"] = 'Tambah Album';
            $data["title"] = 'Tambah Album | Bonekify';
            
            if (isset($_FILES["file"]) and isset($_POST["judul"]) and isset($_POST["penyanyi"]) and isset($_POST["tanggalterbit"]) and isset($_POST["genre"])) {
                if ($_FILES["file"]["name"] != "" and $_POST["judul"] != "" and $_POST["penyanyi"] != "" and $_POST["tanggalterbit"] != "" and $_POST["genre"] != "") {
                    $this->model('album_model')->addAlbum($_FILES["file"], $_POST["judul"], $_POST["penyanyi"], $_POST["tanggalterbit"], $_POST["genre"]);
                    unset($_FILES["file"]);
                    header('Location: ' . BASEURL . '/tambahalbum');
                } else {
                    $data["error"] = "Pastikan semua field terisi<br><br>";
                }
            }

            $this->view('Templates/header',$data);
            $this->view('TambahAlbum/index',$data);
            $this->view('Templates/footer');
        } else {
            header('Location: ' . BASEURL . '/');
        }   
    }
}
?>