<?
class Album extends Controller{
    public function index(){
        $data = [];
        $data['album'] = $this->model('album_model')->getAllAlbum();
        $data['route'] = 'album';
        $data["title"] = 'Daftar Album | Bonekify';
        $this->view('Templates/header',$data);
        $this->view('Album/index',$data);
        $this->view('Templates/footer');
    }

    public function detail($id){
        if(isset($_POST["hapus-lagu"])){
            $berhasil = $this->model('song_model')->hapusDariAlbum($id,$_POST["hapus-lagu"]);
        }
        if(isset($_POST["hapus-album"])){
            $berhasil = $this->model('song_model')->hapusAlbum($id);
            $berhasil = $this->model('album_model')->hapusAlbum($id);
            header('Location: ' . BASEURL . '/album');
        }
        if(isset($_POST["judul-baru"]) and $_POST["judul-baru"] != ""){
            $berhasil = $this->model('album_model')->gantiJudul($id,$_POST["judul-baru"]);
        }
        if(isset($_POST["genre-baru"]) and $_POST["genre-baru"] != ""){
            $berhasil = $this->model('album_model')->gantiGenre($id,$_POST["genre-baru"]);
        }
        if(isset($_POST["tanggal-baru"]) and $_POST["tanggal-baru"] != ""){
            $berhasil = $this->model('album_model')->gantiTanggal($id,$_POST["tanggal-baru"]);
        }
        if(isset($_FILES["cover-baru"]) and $_FILES["cover-baru"]["name"] != ""){
            $cover_baru = $_FILES['cover-baru'];
            $cover_baru = $this->model('song_model')->gantiCover($id,$cover_baru,'all');
            $berhasil = $this->model('album_model')->gantiCover($id,$cover_baru);
        }
        $data['album_detail'] = $this->model('album_model')->getAlbumDetail($id);
        $data["title"] = $data["album_detail"]["Judul"] . ' - ' . $data["album_detail"]["Penyanyi"] . " | Bonekify";
        $data['route'] = 'detail_album';
        $data['song'] = $this->model('song_model')->getAlbumSong($id);
        $this->view('Templates/header',$data);
        $this->view('Album/detail',$data);
        $this->view('Templates/footer');
    }
}
?>