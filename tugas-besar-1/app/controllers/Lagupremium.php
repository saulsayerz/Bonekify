<?
class LaguPremium extends Controller{
  public function detail($creator_id){
    $data['lagupremium'] = $this->model('rest_model')->getLaguPremium($creator_id,$_SESSION['user_id']);
    $data['detailpenyanyi'] = ($this->model("rest_model")->getDetailPenyanyi($creator_id))["data"][0]['name'];
    $data['route'] = "lagupremium";
    $data['title'] = "Lagu Premium ".$data['detailpenyanyi']." | Bonekify";

    $this->view('Templates/header',$data);
    $this->view('Premium/lagu',$data);
    $this->view('Templates/footer',$data);
  }
}
?>