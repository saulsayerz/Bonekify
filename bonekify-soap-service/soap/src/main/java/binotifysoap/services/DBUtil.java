package binotifysoap.services;

import java.sql.*;

public class DBUtil {
  private Connection connection;
  private static String DB_URL = "jdbc:mysql://db-soap/soap_database";
  private static String DB_Username = "root";
  private static String DB_Password = "root";

  public DBUtil(){
    try{
      this.connection = DriverManager.getConnection(DB_URL, DB_Username, DB_Password);
    }catch(Exception e){
      e.printStackTrace();
    }
  }

  public int create(String query) throws Exception{
    try{
      Statement stmt = this.connection.createStatement();
      stmt.executeUpdate(query);
      return 1;
    }catch(Exception e){
      e.printStackTrace();
      return 0;
    }
  }

  public ResultSet read(String query) throws Exception{
    try{
      Statement stmt = this.connection.createStatement();
      ResultSet rs = stmt.executeQuery(query);
      return rs;
    }catch(Exception e){
      e.printStackTrace();
      throw e;
    }
  }
}
