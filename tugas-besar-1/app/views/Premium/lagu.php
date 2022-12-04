<div id="list-user-heading"><h1>Lagu Premium <? echo $data['detailpenyanyi'] ?></h1></div>

<table id='list-lagu' class="col-8 col-s-6" style="font-size:20px; color:black;padding:30px;table-layout: fixed">
<colgroup>
    <col class="40persen" />
    <col class="60persen" />
  </colgroup>
<thead>
        <tr>
          <th style="font-size:20px;padding-left:10px">JUDUL</th>
          <th style="font-size:20px;text-align:center">PUTAR LAGU</th>
        </tr>
      </thead>
<?foreach($data['lagupremium'] as $id => $lagu){?>
    
<tr>
      <td style="font-size:20px;padding-left:10px;margin: 5px 5px 0px 0px" class='judullagupremium'><?=$lagu['Judul']?></td>
      <td> <audio class="putarpremium" controls controlsList="nodownload noplaybackrate" id="songplayer"><source src= '<?=REST.$lagu['Audio_path']?>' > </audio> </td>
      </tr>
  <?}?>

  </table>