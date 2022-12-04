<div id="list-user-heading"><h1>Daftar Penyanyi Premium</h1></div>

<div>
<table id='list-lagu' class="col-8 col-s-6" style="font-size:20px; color:black; padding:30px">
  <thead>  
    <tr >
    <th style="font-size:20px;padding-left:10px">PENYANYI</th>
    <th style="font-size:20px">STATUS</th>
    <th style="font-size:20px;text-align:center">AKSI</th>
    </tr>
  </thead>

  <?foreach($data["penyanyi"]["data"] as $penyanyi){?>
      <tr class="list-lagu-item">
      <td class="penyanyi" style=" padding:20px 0px; padding-left:10px"> <?=$penyanyi["name"]?> </td>
      <?if(isset($data["status"][$penyanyi['user_id']])){?>
        <?if($data["status"][$penyanyi['user_id']]=="ACCEPTED"){?>
          <td style=" padding:20px 0px">Accepted</td>
        <?}else if($data["status"][$penyanyi['user_id']]=="REJECTED"){?>
          <td style=" padding:20px 0px">Rejected</td>
        <?}else if($data["status"][$penyanyi['user_id']]=="PENDING"){?>
          <td style=" padding:20px 0px">Waiting Approval</td>
      <?}} else { ?>
          <td style=" padding:20px 0px">Not requested</td>
        <? } if(!isset($data["status"][$penyanyi['user_id']])){?>
            <td style="text-align:center"><button class="subsbutton" onclick="location.href='<?=BASEURL?>/subscribe/add/<?=$penyanyi['user_id']?>/<?=$_SESSION['user_id']?>'" type="button">SUBSCRIBE</button></td>
            <?}else{?>
              <?if($data["status"][$penyanyi['user_id']]=="ACCEPTED"){?>
                    <td style="text-align:center"><button class="listenbutton" onclick="location.href='<?=BASEURL?>/lagupremium/detail/<?=$penyanyi['user_id']?>'" type="button">LISTEN</button></td>
              <?} else {?>
                    <td></td><? }}}?>
</table>


