<div id="list-album-heading"><h1>Daftar Album</h1></div>
<section class="main-section">
    <?foreach($data['album'] as $id=>$album){?>
        <a class="clickable" href="<?=BASEURL?>/album/detail/<?=$album['album_id']?>">
        <div class="card">
            <img src="<?=BASEURL?>/img/<?=$album['Image_path']?>">
            <div class='judul-album'>
                <?=$album['Judul']?>
            </div>
            <div class='deskripsi-album'>
                <?=$album['Penyanyi']?>
            </div>
            <div class='deskripsi-album'>
                <?=$album['Tanggal_terbit']?>
            </div>
            <div class='deskripsi-album'>
                <?=$album['Genre']?>
            </div>
        </div>
        </a>
    <?}?>
</section> 