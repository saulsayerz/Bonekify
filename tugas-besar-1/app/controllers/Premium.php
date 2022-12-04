<?
class Premium extends Controller{
  public function index(){
    $data['penyanyi'] = $this->model("rest_model")->getPenyanyi();
    $data['title'] = "Daftar Penyanyi Premium | Bonekify";
    $data['route'] = 'premium';
    $data['status'] = $this->model("subscription_model")->getStatus($_SESSION['user_id']);
    $this->view('Templates/header',$data);
    $this->view("Premium/index",$data);
    $this->view('Templates/footer',$data);
  }
}
?>