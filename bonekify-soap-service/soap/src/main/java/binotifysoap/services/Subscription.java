package binotifysoap.services;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

import javax.annotation.Resource;
import javax.xml.ws.WebServiceContext;
import javax.xml.ws.handler.MessageContext;

import com.sun.net.httpserver.HttpExchange;
import java.text.SimpleDateFormat;
import java.sql.*;
import java.util.*;

@WebService
@SOAPBinding(style=Style.DOCUMENT)
public class Subscription {
  @Resource
  WebServiceContext wsContext;

  

  private void log(String desc, String endpoint){
    try{    
      MessageContext msgx = this.wsContext.getMessageContext();
      HttpExchange exchange = (HttpExchange)msgx.get("com.sun.xml.ws.http.exchange");  
      System.out.println("Client IP = " + exchange.getRemoteAddress()); 
      DBUtil db = new DBUtil();
      System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date()));
      db.create(String.format("INSERT INTO Logging(description,IP,endpoint,requested_at) VALUES ('%s','%s','%s','%s')",desc,exchange.getRemoteAddress(),endpoint, new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date())));
    }catch(Exception e){
      e.printStackTrace();
    }
  }

  private boolean check(){
    MessageContext msgx = this.wsContext.getMessageContext();
    HttpExchange exchange = (HttpExchange)msgx.get("com.sun.xml.ws.http.exchange");
    String apiKey = exchange.getRequestHeaders().getFirst("x-api-key");
    String source = exchange.getRequestHeaders().getFirst("origin");
    Boolean legal = (apiKey.equals("123123") && source.equals("REST") )|| (apiKey.equals("321321") && source.equals("PLAIN"));
    System.out.println(apiKey+source+legal);
    System.out.println(apiKey);
    System.out.println(source);
    //bandingkan apikey dan source
    return legal;
    
  }

  @WebMethod
  public void add(int creator_id, int subscriber_id){
    try{
      if(check()){
        this.log(String.format("menambahkan permintaan subscription baru untuk creator_id=%d dan subscriber_id =%d",creator_id,subscriber_id),"localhost/soap/subscription");
        DBUtil db = new DBUtil();
        db.create(String.format("INSERT INTO Subscription(creator_id,subscriber_id) VALUES (%d,%d)",creator_id,subscriber_id));
      }
    }catch(Exception e){
      e.printStackTrace();
    }
  }

  @WebMethod
  public void setStatus(int creator_id, int subscriber_id, String status){
    try{
      if(check()){
        this.log(String.format("mengubah status subscription creator_id=%d dan subscriber_id =%d",creator_id,subscriber_id),"localhost/soap/subscription");
        DBUtil db = new DBUtil();
        db.create(String.format("UPDATE Subscription SET status='%s' WHERE creator_id=%d AND subscriber_id=%d",status,creator_id,subscriber_id));
        Process process = Runtime.getRuntime().exec(String.format("curl -X GET http://bonekify-plain-app/public/subscribe/setstatus/%d/%d/%s",creator_id,subscriber_id,status));
      }
    }catch(Exception e){
      e.printStackTrace();
    }
  }

  @WebMethod
  public ArrayList<ADTSubscription> getPendingSubscriber() throws Exception {
    try{
      if(check()){
        this.log("mengambil semua pending subscriber","localhost/soap/subscription");
        DBUtil db = new DBUtil();
        ResultSet rs = db.read("SELECT creator_id,subscriber_id FROM Subscription WHERE status='PENDING'");
        ArrayList<ADTSubscription> records=new ArrayList<ADTSubscription>();
        while(rs.next()){
          int cols = rs.getMetaData().getColumnCount();
          Object[] arr = new Object[cols];
          for(int i=0; i<cols; i++){
            arr[i] = rs.getObject(i+1);
          }
          records.add(new ADTSubscription((int) arr[0], (int) arr[1]));
        }
        return records;
      }else{
        throw new Exception();
      }
    }catch(Exception e){
      e.printStackTrace();
      throw e;
    }
  }

  @WebMethod
  public Boolean validate(Integer creator_id, Integer subscriber_id) throws Exception{
    try{
      if(check()){
        this.log("validasi subscription","localhost/soap/subscription");
        DBUtil db = new DBUtil();
        ResultSet rs = db.read(String.format("SELECT status FROM Subscription WHERE creator_id=%d AND subscriber_id=%d",creator_id,subscriber_id));
        if(rs.next()){
          return ((String) rs.getObject(1)).equals("ACCEPTED");
        }else{
          return  false;
        }
      }else{
        throw new Exception();
      }
    }catch(Exception e){
      e.printStackTrace();
      throw e;
    }
  }

//   @WebMethod
//   public ArrayList<Integer> getSubscribed(Integer user_id) throws Exception{
//     try{
//       if(check()){
//         this.log("mengambil semua artis yang telah disubscribe","localhost/soap/subscription");
//         DBUtil db = new DBUtil();
//         ResultSet rs = db.read(String.format("SELECT creator_id FROM Subscription WHERE subscriber_id=%d AND status='ACCEPTED'",user_id));
//         ArrayList<Integer> records=new ArrayList<Integer>();
//         while(rs.next()){
//           int cols = rs.getMetaData().getColumnCount();
//           Object[] arr = new Object[cols];
//           for(int i=0; i<cols; i++){
//             arr[i] = rs.getObject(i+1);
//           }
//           records.add((int) arr[0]);
//         }
//         return records;
//       }else{
//         throw new Exception();
//       }
//     }catch(Exception e){
//       e.printStackTrace();
//       throw e;
//     }
//  }
}
