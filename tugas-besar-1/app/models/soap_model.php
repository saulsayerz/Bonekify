<?
class soap_model{
  public static function addSubscription($creator_id,$subscriber_id){
    $webservice_url = "http://bonekify-soap-service:1401/";
    
    $request_param = '<?xml version="1.0" encoding="utf-8"?>
    <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
        <Body>
            <add xmlns="http://services.binotifysoap/">
                <arg0 xmlns="">'.$creator_id.'</arg0>
                <arg1 xmlns="">'.$subscriber_id.'</arg1>
            </add>
        </Body>
    </Envelope>';

    $headers = array(
        'Content-Type: text/xml; charset=utf-8',
        'Content-Length: '.strlen($request_param),
        'x-api-key:321321',
        'origin:PLAIN'
    );
    
    $ch = curl_init($webservice_url);
    curl_setopt ($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt ($ch, CURLOPT_POSTFIELDS, $request_param);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    
    $data = curl_exec ($ch);
    
    // $result = $data;
    
    // if ($result === FALSE) {
    //     printf("CURL error (#%d): %s<br>\n", curl_errno($ch),
    //     htmlspecialchars(curl_error($ch)));
    // }
    
    curl_close ($ch);
    
    //echo $input_celsius . ' Celsius => ' . $data . ' Fahrenheit';
  }

  public static function validate($creator_id,$subscriber_id){
    $webservice_url = "http://bonekify-soap-service:1401/";
    
    $request_param = '<?xml version="1.0" encoding="utf-8"?>
    <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
        <Body>
            <validate xmlns="http://services.binotifysoap/">
                <arg0 xmlns="">'.$creator_id.'</arg0>
                <arg1 xmlns="">'.$subscriber_id.'</arg1>
            </validate>
        </Body>
    </Envelope>';

    $headers = array(
        'Content-Type: text/xml; charset=utf-8',
        'Content-Length: '.strlen($request_param),
        'x-api-key:321321',
        'origin:PLAIN'
    );
    
    $ch = curl_init($webservice_url);
    curl_setopt ($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt ($ch, CURLOPT_POSTFIELDS, $request_param);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    
    $data = curl_exec ($ch);
    
    // $result = $data;
    
    // if ($result === FALSE) {
    //     printf("CURL error (#%d): %s<br>\n", curl_errno($ch),
    //     htmlspecialchars(curl_error($ch)));
    // }
    
    curl_close ($ch);
    return $data;
    //echo $input_celsius . ' Celsius => ' . $data . ' Fahrenheit';
  }
}
?>