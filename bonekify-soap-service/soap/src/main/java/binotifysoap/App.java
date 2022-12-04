package binotifysoap;

import javax.xml.ws.Endpoint;
import binotifysoap.services.*;

public class App 
{
    public static void main( String[] args )
    {
        Endpoint.publish("http://0.0.0.0:1401/",new Subscription());
    }
}
