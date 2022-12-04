package binotifysoap.services;

import java.io.Serializable;
import javax.xml.bind.annotation.XmlElement;

public class ADTSubscription implements Serializable {
  @XmlElement
  private int creator_id;
  @XmlElement
  private int subscriber_id;

  public ADTSubscription(int creator_id, int subscriber_id){
    this.creator_id = creator_id;
    this.subscriber_id = subscriber_id;
  }
}
