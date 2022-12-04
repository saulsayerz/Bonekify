<script src="<?echo BASEURL;?>/js/search.js"></script>

<br><br>
<h1 id="judulsearch">Cari Lagu</h1> 
<input <?php if (isset($data["search"])){echo "value='" . $data["search"] . "'"; } ?> class="col-6 col-s-5 center search" id="search" type="text" placeholder="Apa yang ingin kamu dengarkan?" onkeyup="livesearch()">

<br><br>
<!-- FILTER -->
<div id='buatfilter' class="col-6 col-s-5 center">
<div id='labelfilter'><h1>Filter your choice(s)</h1></div>
<div class="hiddenCB">
  <div>
<?php 
foreach($data["genres"] as $id => $genre){ 
echo "<input name ='choice' onclick=\"livesearch()\" class=\"checkbox\" type=\"checkbox\" id=\"" . $genre["GENRE"] ."\">";
echo "<label for=\"" . $genre["GENRE"] . "\">" . $genre["GENRE"] . "</label>";
}?>
</div>
</div>
</div>
<br><br>

<div id='sorts' class="col-9 col-s-7">
<label for="sort1">Urut berdasarkan:</label>
<select id="sort1" name="sort1" onchange="livesearch()">
  <option value="Judul">Judul</option>
  <option value="Penyanyi">Penyanyi</option>
  <option value="Tanggal_terbit">Tanggal</option>
</select>
<select id="sort2" name="sort2" onchange="livesearch()">
  <option value="asc">ASC</option>
  <option value="desc">DESC</option>
</select>
</div>

