<?php 
class Search extends Controller{
    public function index(){
        // PAGINATION CONFIG
        $data=[];
        $rowsperpage = 10;
        $currentPage = 1;
        $startRow = ($rowsperpage * $currentPage) - $rowsperpage ;
        $data["route"] = 'Search';
        $data["genres"] = $this->model('song_model')->getGenres();

        if (isset($_POST["navbar-search"])){
            $data["song"] = $this->model('song_model')->getQuerySong($_POST["navbar-search"], $startRow);

            $banyakrows = $this->model('song_model')->countQuerySong($_POST["navbar-search"]);
            $data["banyakPage"] = ceil($banyakrows/$rowsperpage);
            $data["search"] = $_POST["navbar-search"];
            $data["currentPage"] = $currentPage;

            $this->view('Templates/header',$data);
            $this->view('Search/index', $data);
            $this->view('Templates/tabellagu',$data);
            $this->view('Templates/footer');
        }
        else{
            $this->view('Templates/header',$data);
            $this->view('Search/index', $data);
            $this->view('Templates/tabellagu',$data);
            $this->view('Templates/footer');
        }
    }

    public function livesearchphp($search,$currentPage, $orderby, $filters){
        // PAGINATION CONFIG
        $data=[];
        $rowsperpage = 10;
        $startRow = ($rowsperpage * $currentPage) - $rowsperpage ;

        $data["song"] = $this->model('song_model')->getQuerySongLengkap($search,$startRow,$orderby,$filters);
        $data["banyakData"] = $this->model('song_model')->countQuerySong($search,$filters);
        $data["exists"] = (count($data["song"]) > 0) ? 1 : 0 ;

        echo json_encode($data);
    }

    public function getGenres(){
        $data = array();
        $data["genres"] = $this->model("user_model")->getGenres();
        echo json_encode($data);
    }

}
?>