<?
class Premium extends Controller{
  public function index(){
    $data['penyanyi'] = $this->model("rest_model")->getPenyanyi();
    $data['title'] = "Daftar Penyanyi Premium | Bonekify";
    $data['route'] = 'premium';
    $data['status'] = $this->model("subscription_model")->getStatus($_SESSION['user_id']);
    foreach($data['status'] as $id => $status){
      if($status=='PENDING'){
        $acc = $this->model("soap_model")->validate($id,$_SESSION['user_id']);
        if($acc){
          $data['status'][$id] = 'ACCEPTED';
          $this->model("subscription_model")->setStatus($id,$_SESSION['user_id'],"ACCEPTED");
        }
      }
    }
    $this->view('Templates/header',$data);
    $this->view("Premium/index",$data);
    $this->view('Templates/footer',$data);
  }
}
?>