<!DOCTYPE html>

<body>
<div class ="col-14 col-s-4 center">
  <form id="tambah-form" method="post" enctype="multipart/form-data" action="#">
  <h1>Tambah Lagu</h1>
      <div id ="div-album">
        <label for="album">Pilih Album</label>
        <select id="album" name="album" onchange="albumParam()">
          <option value="-1" selected>None</option>
          <? foreach($data["album"] as $id => $album){  ?>
            <option value="<?echo $album["album_id"];?>"><?echo $album["Judul"] . " - " . $album["Penyanyi"];?></option>
          <? } ?>
      </select>
      </div> 
      <div id ="div-file">
        <label for="file">Gambar Cover Lagu</label>
        <input type="file" name="file" id="file" accept="image/*">
      </div> 

      <div id ="div-penyanyi">
        <label for="penyanyi">Penyanyi Lagu</label>
        <input type="text" id="penyanyi" name="penyanyi" onkeyup="" placeholder="Masukkan nama penyanyi..">
      </div> 

      <div id ="div-judul">
        <label for="judul">Judul Lagu</label>
        <input type="text" id="judul" name="judul" onkeyup="" placeholder="Masukkan judul album..">
      </div> 

      <div id ="div-tanggalterbit">
        <label for="tanggalterbit">Tanggal Terbit Lagu</label>
        <input type="date" id="tanggalterbit" name="tanggalterbit" onkeyup="" placeholder="Masukkan tanggal terbit album..">
      </div> 

      <div id ="div-genre">
        <label for="genre">Genre</label>
        <input type="text" id="genre" name="genre" onkeyup="" placeholder="Masukkan genre album..">
      </div>

      <div id ="div-lagu">
        <label for="lagu">File Audio Lagu</label>
        <input type="file" name="lagu" id="lagu" accept=".mp3,.wav">
      </div> 
      <input type="hidden" name="durasi-lagu" id="durasi-lagu">
    
      <input type="submit" value="Tambah Lagu" id="submit-btn">
      <div id ="submitWarning"><?echo (isset($data["error"]) ? $data["error"] : "")?></div>
  </form>
</div>
</body>
<script src="<?echo BASEURL;?>/js/tambahlagu.js"></script>