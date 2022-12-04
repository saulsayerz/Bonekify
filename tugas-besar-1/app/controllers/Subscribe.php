<?
class Subscribe extends Controller{
  public function index(){
    $this->model('rest_model')->getPenyanyi();
  }

  public function add($creator_id,$subscriber_id){
    $this->model('subscription_model')->add($creator_id,$subscriber_id);
    $this->model('soap_model')->addSubscription($creator_id,$subscriber_id);
    header('Location: ' . BASEURL . '/premium');
  }

  public function setstatus($creator_id,$subscriber_id,$status){
    $this->model('subscription_model')->setstatus($creator_id,$subscriber_id,$status);
  }
}
?>