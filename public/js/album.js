var modal_ganti_cover = document.getElementById("modal-ganti-cover");
var modal_ganti_judul = document.getElementById("modal-ganti-judul");
var modal_ganti_genre = document.getElementById("modal-ganti-genre");
var modal_ganti_tanggal = document.getElementById("modal-ganti-tanggal");

var btn_ganti_cover = document.getElementsByClassName("tombol-ganti-file")[0];
var btn_ganti_judul = document.getElementById("tombol-ganti-judul");
var btn_ganti_genre = document.getElementsByClassName("tombol-ganti-deskripsi")[1];
var btn_ganti_tanggal = document.getElementsByClassName("tombol-ganti-deskripsi")[0];

var span0 = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];

btn_ganti_cover.onclick = function() {
    modal_ganti_cover.style.display = "block";
}

btn_ganti_judul.onclick = function() {
    modal_ganti_judul.style.display = "block";
}

btn_ganti_genre.onclick = function() {
    modal_ganti_genre.style.display = "block";
}

btn_ganti_tanggal.onclick = function() {
    modal_ganti_tanggal.style.display = "block";
}

span0.onclick = function() {
    modal_ganti_cover.style.display = "none";
}

span1.onclick = function() {
    modal_ganti_judul.style.display = "none";
}

span2.onclick = function() {
    modal_ganti_genre.style.display = "none";
}

span3.onclick = function() {
    modal_ganti_tanggal.style.display = "none";
}

window.onclick = function(event) {
    if ([modal_ganti_cover,modal_ganti_judul,modal_ganti_genre,modal_ganti_tanggal].includes(event.target)){
      modal_ganti_cover.style.display = "none";
      modal_ganti_judul.style.display = "none";
      modal_ganti_genre.style.display = "none";
      modal_ganti_tanggal.style.display = "none";
    }
}