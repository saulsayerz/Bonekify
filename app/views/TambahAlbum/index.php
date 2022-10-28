<!DOCTYPE html>

<body>
<div class ="col-14 col-s-4 center">
  <form id="tambah-form" method="post" enctype="multipart/form-data" action="#">
      <h1>Tambah Album</h1>
      <div id ="div-file">
        <label for="file">Cover Album</label>
        <input type="file" name="file" id="file" accept="image/*">
      </div> 
      <div id ="div-judul">
        <label for="judul">Judul Album</label>
        <input type="text" id="judul" name="judul" placeholder="Masukkan judul album..">
      </div> 

      <div id ="div-penyanyi">
        <label for="penyanyi">Penyanyi Album</label>
        <input type="text" id="penyanyi" name="penyanyi" placeholder="Masukkan penyanyi album..">
      </div> 

      <div id ="div-tanggalterbit">
        <label for="tanggalterbit">Tanggal Terbit Album</label>
        <input type="date" id="tanggalterbit" name="tanggalterbit" placeholder="Masukkan tanggal terbit album..">
      </div> 

      <div id ="div-genre">
        <label for="genre">Genre Album</label>
        <input type="text" id="genre" name="genre" placeholder="Masukkan genre album..">
      </div>
    
      <input type="submit" value="Tambah Album">
      <div id ="submitWarning"><?echo (isset($data["error"]) ? $data["error"] : "")?></div>
  </form>
</div>
</body>