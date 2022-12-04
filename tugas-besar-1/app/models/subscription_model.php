<?
require_once "db_util.php";

class subscription_model{
  public function add($creator_id,$subscriber_id){
    $db = db_util::connect();
    $stmt = $db->prepare("INSERT INTO Subscription(creator_id,subscriber_id) VALUES (?,?)");
    $stmt->bind_param("ii", $creator_id, $subscriber_id);
    $stmt->execute();
    $stmt->close();
    $db->close();
  }

  public function setStatus($creator_id,$subscriber_id,$status){
    $db = db_util::connect();
    $stmt = $db->prepare("UPDATE Subscription SET status=? WHERE creator_id=? AND subscriber_id=?");
    $stmt->bind_param("sii", $status, $creator_id, $subscriber_id);
    $stmt->execute();
    $stmt->close();
    $db->close();
  }

  public function getStatus($user_id){
    $db = db_util::connect();
    $query = "SELECT creator_id,status FROM Subscription WHERE subscriber_id=".$user_id;
    $result = mysqli_query($db, $query);
    $json = mysqli_fetch_all($result, MYSQLI_ASSOC);
    $final = [];
    foreach($json as $elmt){
      $final[$elmt["creator_id"]] = $elmt["status"];
    }
    return $final;
  }
}
?>