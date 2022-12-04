<!-- TABEL LAGUNYA -->
<table id='list-lagu' class="col-9 col-s-7">
<?php if (isset($data["song"]) && count($data["song"])>0) {?>
    <tr>
        <th style="text-align: center;">#</th>
        <th colspan=2>JUDUL</th>
        <th>TAHUN TERBIT</th>
        <th>GENRE</th>
        <th style="text-align: center;">DURASI</th>
    </tr>
    <?php $i=1; foreach($data["song"] as $id => $song){  ?>
        <tr class="list-lagu-item">
            <td class="nomertabel"><?echo $i?></td>
            <td>
                <a class="tabel-lagu-img" href="<?echo BASEURL;?>/lagu/putar/<?echo $song["song_id"];?>">
                    <img id ="logo" src="<?echo BASEURL;?>/img/<?echo $song["Image_path"]?>" onerror="this.onerror=null;this.src='<?echo BASEURL;?>/img/cover-album.png';">
                </a>
            </td>
            <td class="container">
                <div class="judul-lagu"><a href="<?echo BASEURL;?>/lagu/putar/<?echo $song["song_id"];?>" style="text-decoration:none;"><?echo $song["Judul"]?></a></div>
                <div class="penyanyi"><?echo $song["Penyanyi"]?></div>
            </td>
            <td class="tahun-terbit"><?echo explode("-", $song["Tanggal_terbit"])[0]?></td>
            <td class="genre"><?echo $song["Genre"]?></td>
            <td class="nomertabel"><?
                $hour = floor($song["Duration"]/3600);
                $left = $song["Duration"]%3600;
                $minute = floor($left/60);
                $second = $left%60;
                if ($hour > 0) {
                    echo $hour . ":";
                    if ($minute < 10) {
                        echo '0' . $minute . ":";
                    } else {
                        echo $minute . ":";
                    }
                } else {
                    echo $minute . ":";
                }
                if ($second < 10) {
                    echo '0' . $second;
                } else {
                    echo $second;
            }?></td>
        </tr>
    <?php  $i++;  }} ?>
</table>

<div id='gaadacontainer' class="col-9 col-s-7">
<?php if ((isset($data["song"]) && !count($data["song"])>0)) {?>
    <p id='kagakada' class='kagakada'>Tidak ada lagu dengan query tersebut :(</p>
<?php } ?>
</div>

<!-- PAGINATION -->
<?php echo "<div id=\"pagination\" class=\"pagination\">" ;
if (isset($data["banyakPage"]) && $data["banyakPage"]>1){
    for ($i = 1; $i <= $data["banyakPage"]; $i++) {
        if ($i == 1){
            echo '<button class="dipilih" id="' . $i . '" onClick="livesearch(this.id)">' . $i . '</button>';
        }
        else {
            echo '<button id="' . $i . '" onClick="livesearch(this.id)">' . $i . '</button>';
        }
    }
echo "</div>" ;
}
?>