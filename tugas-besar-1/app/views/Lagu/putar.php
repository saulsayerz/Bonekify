<div id="container-putar-lagu" class="col-9 col-s-7">
    <div id='img-container'>
        <a href="<?=BASEURL?>/album/<?= $data["song"]["album_id"] ? "detail/".$data["song"]["album_id"] : ""?>">
            <img src="<?echo BASEURL?>/img/<?echo $data["song"]["Image_path"]?>">
        </a>
        <?if(isset($_SESSION['username']) && isset($_SESSION['isAdmin'])){
            if($_SESSION['isAdmin']==='1'){?>
                <span>
                    <!-- Trigger/Open The Modal -->
                    <button class="tombol-ganti-file">Edit Gambar Cover</button>

                    <!-- The Modal -->
                    <div id="modal-ganti-cover" class="modal">

                        <!-- Modal content -->
                        <div class="modal-content">
                            <span class="close">x</span>
                            <form action="#" method="post" enctype="multipart/form-data">
                                <label for="cover-baru">Cover baru :</label><br>
                                <input type="file" name="cover-baru" id="cover-baru" accept="image/*">
                                <input type="submit">
                            </form>
                        </div>

                    </div>
                </span>
            <?}
        }?>
    </div>
    <div id="judul"> 
        <?echo $data["song"]["Judul"]?> 
        <?if(isset($_SESSION['username']) && isset($_SESSION['isAdmin'])){
            if($_SESSION['isAdmin']==='1'){?>
                <span>
                    <!-- Trigger/Open The Modal -->
                    <button id="tombol-ganti-judul">edit</button>

                    <!-- The Modal -->
                    <div id="modal-ganti-judul" class="modal">

                        <!-- Modal content -->
                        <div class="modal-content">
                            <span class="close">x</span>
                            <form action="#" method="post">
                                <label for="judul-baru">Judul baru :</label><br>
                                <input type="text" name="judul-baru" id="judul-baru">
                                <input type="submit">
                            </form>
                        </div>

                    </div>
                </span>
            <?}
        }?>
    </div>
    <div class="deskripsi">
        <?echo $data["song"]["Penyanyi"];?> 
    </div>
    <div class="deskripsi">
        <?
            $dateTemp = explode('-', $data["song"]["Tanggal_terbit"]);
            echo (int)$dateTemp[2] . " " . DateTime::createFromFormat('!m', $dateTemp[1])->format('F') . " " . (int)$dateTemp[0];?> 
        <?if(isset($_SESSION['username']) && isset($_SESSION['isAdmin'])){
            if($_SESSION['isAdmin']==='1'){?>
                <span>
                    <!-- Trigger/Open The Modal -->
                    <button class="tombol-ganti-deskripsi">edit</button>

                    <!-- The Modal -->
                    <div id="modal-ganti-tanggal" class="modal">

                        <!-- Modal content -->
                        <div class="modal-content">
                            <span class="close">x</span>
                            <form action="#" method="post">
                                <label for="tanggal-baru">Tanggal baru :</label><br>
                                <input type="date" name="tanggal-baru" id="tanggal-baru">
                                <input type="submit">
                            </form>
                        </div>

                    </div>
                </span>
                <?}
        }?>
    </div>
    <div class="deskripsi">
        <?echo $data["song"]["Genre"];?> 
        <?if(isset($_SESSION['username']) && isset($_SESSION['isAdmin'])){
            if($_SESSION['isAdmin']==='1'){?>
                <span>
                    <!-- Trigger/Open The Modal -->
                    <button class="tombol-ganti-deskripsi">edit</button>

                    <!-- The Modal -->
                    <div id="modal-ganti-genre" class="modal">

                        <!-- Modal content -->
                        <div class="modal-content">
                            <span class="close">x</span>
                            <form action="#" method="post">
                                <label for="genre-baru">Genre baru :</label><br>
                                <input type="text" name="genre-baru" id="genre-baru">
                                <input type="submit">
                            </form>
                        </div>

                    </div>
                </span>
                <?}
        }?>
    </div>
    <div id="div-player">
        <audio controls controlsList="nodownload noplaybackrate" id="songplayer" onplaying="AddPlayCount()">
            <source src="<?=BASEURL?>/music/<?=$data["song"]["Audio_path"]?>">
        </audio>
    </div>
    <div style="text-align:center;">
        <?if(isset($_SESSION['username']) && isset($_SESSION['isAdmin'])){
            if($_SESSION['isAdmin']==='1'){?>
                <span>
                    <!-- Trigger/Open The Modal -->
                    <button class="tombol-ganti-file">Edit Audio Lagu</button>

                    <!-- The Modal -->
                    <div id="modal-ganti-lagu" class="modal">

                        <!-- Modal content -->
                        <div class="modal-content">
                            <span class="close">x</span>
                            <form id="form-upload-lagu" action="#" method="post" enctype="multipart/form-data">
                                <label for="lagu-baru">Lagu baru :</label><br>
                                <input type="file" name="lagu-baru" id="lagu-baru" accept=".mp3,.wav">
                                <input type="hidden" name="durasi-lagu-baru" id="durasi-lagu-baru">
                                <input type="submit" value="submit" id="submit-btn-lagu">
                            </form>
                        </div>
                    </div>
                </span>
            <?}
        }?>
        <?if(isset($_SESSION['username']) && isset($_SESSION['isAdmin'])){
            if($_SESSION['isAdmin']==='1'){?>
                <form action="#" method="post">
                    <input type="hidden" name="hapus-lagu" value="1">
                    <input type="submit" class="tombol-hapus" value="Hapus Lagu">
                </form>
            <?}
        }?>
    </div>
</div>
<script src="<?echo BASEURL;?>/js/lagu.js"></script>