<?php
class TambahLagu extends Controller{
    public function index(){
        if (isset($_SESSION["username"])) {
            if ($_COOKIE["playCount_LoggedIn"] != $_SESSION["playCount_LoggedIn"]) {
                $_SESSION["playCount_LoggedIn"] = $_COOKIE["playCount_LoggedIn"];
                $this->model("user_model")->updatePlayCount($_SESSION["username"], $_SESSION["playCount_LoggedIn"]);
            }
        }

        if (isset($_SESSION["isAdmin"]) and $_SESSION["isAdmin"] == 1) {
            $data=[];
            $data["route"] = 'Tambah Lagu';
            $data["title"] = 'Tambah Lagu | Bonekify';
            $data["album"] = $this->model('album_model')->getAllAlbum();
            
            if (isset($_FILES["lagu"]) and isset($_FILES["file"]) and isset($_POST["album"]) and isset($_POST["judul"]) and isset($_POST["penyanyi"]) and isset($_POST["tanggalterbit"]) and isset($_POST["genre"]) and isset($_POST["durasi-lagu"])) {
                if ($_POST["album"] >= 0 and $_FILES["lagu"]["name"] != "" and $_POST["judul"] != "" and $_POST["tanggalterbit"] != "" and $_POST["genre"] != "" and $_POST["durasi-lagu"] != "") {
                    $data["album1"]=$this->model('album_model')->getAlbum($_POST["album"]);
                    $this->model('song_model')->addSong($_POST["judul"], $data["album1"]["Penyanyi"], $_POST["tanggalterbit"], $_POST["genre"], $_POST["durasi-lagu"], $_FILES["lagu"], $data["album1"]["Image_path"], $_POST["album"],false);
                    $this->model('album_model')->updateDuration($_POST["album"]);
                    unset($_FILES["lagu"]);
                    unset($_FILES["file"]);
                    header('Location: ' . BASEURL . '/tambahlagu');
                } else if ($_POST["album"] == -1 and $_FILES["file"]["name"] != "" and $_FILES["lagu"]["name"] != "" and $_POST["judul"] != "" and $_POST["penyanyi"] != "" and $_POST["tanggalterbit"] != "" and $_POST["genre"] != "" and $_POST["durasi-lagu"] != "") {
                    $this->model('song_model')->addSong($_POST["judul"], $_POST["penyanyi"], $_POST["tanggalterbit"], $_POST["genre"], $_POST["durasi-lagu"], $_FILES["lagu"], $_FILES["file"], $_POST["album"],true);
                    unset($_FILES["lagu"]);
                    unset($_FILES["file"]);
                    header('Location: ' . BASEURL . '/tambahlagu');
                } else {
                    $data["error"] = "Pastikan semua field terisi<br><br>";
                }
            }

            $this->view('Templates/header',$data);
            $this->view('TambahLagu/index',$data);
            $this->view('Templates/footer');
        } else {
            header('Location: ' . BASEURL . '/');
        }   
    }
}
?>