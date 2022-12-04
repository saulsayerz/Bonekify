<?
class rest_model{
  public function getPenyanyi(){
    $webservice_url = "http://bonekify-rest-service:3000/penyanyi";

    $ch = curl_init($webservice_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_VERBOSE, false );
    
    $data = curl_exec ($ch);

    $result = $data;
    
    if ($result === FALSE) {
        printf("CURL error (#%d): %s<br>\n", curl_errno($ch),
        htmlspecialchars(curl_error($ch)));
    }
    curl_close ($ch);
    return json_decode($data,true);    
  }

  public function getDetailPenyanyi($id){
    $webservice_url = "http://bonekify-rest-service:3000/penyanyi/detail?user_id=".$id;

    $ch = curl_init($webservice_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_VERBOSE, false );
    
    $data = curl_exec ($ch);

    $result = $data;
    
    if ($result === FALSE) {
        printf("CURL error (#%d): %s<br>\n", curl_errno($ch),
        htmlspecialchars(curl_error($ch)));
    }
    curl_close ($ch);
    return json_decode($data,true);    
  }

  public function getLaguPremium($creator_id,$subscriber_id){
    $webservice_url = "http://bonekify-rest-service:3000/subscription/listlagu";
    
    $request_param = '{"creator_id" : '.$creator_id.',"subscriber_id" : '.$subscriber_id.'}';

    $headers = array(
        'Content-Type: application/json',
        'Content-Length: '.strlen($request_param)
    );
    
    $ch = curl_init($webservice_url);
    // curl_setopt ($ch, CURLOPT_GET, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_VERBOSE, false );
    curl_setopt($ch, CURLOPT_POSTFIELDS,$request_param); 
    // curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    
    $data = curl_exec ($ch);

    $result = $data;
    
    if ($result === FALSE) {
        printf("CURL error (#%d): %s<br>\n", curl_errno($ch),
        htmlspecialchars(curl_error($ch)));
    }
    curl_close ($ch);
    return json_decode($data,true); 
  }
}
?>