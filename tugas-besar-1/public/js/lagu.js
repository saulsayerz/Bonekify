var firstloadplay

window.onload = function() {
  firstloadplay = 0;
}

// Get the modal
var modal_ganti_cover = document.getElementById("modal-ganti-cover");
var modal_ganti_judul = document.getElementById("modal-ganti-judul");
var modal_ganti_tanggal = document.getElementById("modal-ganti-tanggal");
var modal_ganti_genre = document.getElementById("modal-ganti-genre");
var modal_ganti_lagu = document.getElementById("modal-ganti-lagu");

// Get the button that opens the modal
var btn_ganti_cover = document.getElementsByClassName("tombol-ganti-file")[0];
var btn_ganti_judul = document.getElementById("tombol-ganti-judul");
var btn_ganti_tanggal = document.getElementsByClassName("tombol-ganti-deskripsi")[0];
var btn_ganti_genre = document.getElementsByClassName("tombol-ganti-deskripsi")[1];
var btn_ganti_lagu = document.getElementsByClassName("tombol-ganti-file")[1];

// Get the <span> element that closes the modal
var span0 = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];
var span4 = document.getElementsByClassName("close")[4];

// When the user clicks on the button, open the modal
btn_ganti_cover.onclick = function() {
  modal_ganti_cover.style.display = "block";
}

btn_ganti_judul.onclick = function() {
  modal_ganti_judul.style.display = "block";
}

btn_ganti_tanggal.onclick = function() {
  modal_ganti_tanggal.style.display = "block";
}

btn_ganti_genre.onclick = function() {
  modal_ganti_genre.style.display = "block";
}

btn_ganti_lagu.onclick = function() {
  modal_ganti_lagu.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span0.onclick = function() {
  modal_ganti_cover.style.display = "none";
}

span1.onclick = function() {
  modal_ganti_judul.style.display = "none";
}

span2.onclick = function() {
  modal_ganti_tanggal.style.display = "none";
}

span3.onclick = function() {
  modal_ganti_genre.style.display = "none";
}

span4.onclick = function() {
  modal_ganti_lagu.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if ([modal_ganti_cover,modal_ganti_judul,modal_ganti_tanggal,modal_ganti_genre,modal_ganti_lagu].includes(event.target)){
    modal_ganti_cover.style.display = "none";
    modal_ganti_judul.style.display = "none";
    modal_ganti_tanggal.style.display = "none";
    modal_ganti_genre.style.display = "none";
    modal_ganti_lagu.style.display = "none";
  }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function AddPlayCount(){
  let cookie_notloggedin = getCookie("playCount_notLoggedIn");
  let cookie_loggedin = getCookie("playCount_LoggedIn");
  let cookieUser = getCookie("username");
  if (cookieUser == "") {
    if (parseInt(cookie_notloggedin) >= 3) {
      var x = document.getElementById("songplayer");
      x.pause();
      let div = document.getElementById("div-player");
      x.style.display = "none";
      warningteks = document.createElement("p");
      warningteks.setAttribute('id', 'warningPlayCount');
      warningteks.setAttribute('class','warning');
      warningteks.innerHTML = "Anda sudah memainkan 3 lagu hari ini!";
      warningteks.setAttribute('style', 'color:red');
      div.append(warningteks);
    } else {
      if (firstloadplay == 0) {
        setCookie("playCount_notLoggedIn", parseInt(cookie_notloggedin) + 1, 1);
        firstloadplay++;
      }
    }
  } else {
    if (firstloadplay == 0) {
      setCookie("playCount_LoggedIn", parseInt(cookie_loggedin) + 1, 1);
      firstloadplay++;
    }
  }
};

document.querySelector("#submit-btn-lagu").addEventListener('click', async (e) => {  
  e.preventDefault();  
  var files = document.getElementById('lagu-baru').files;
  var file = files[0];
  var reader = new FileReader();
  var audio = document.createElement('audio');
  reader.onload = async (e) => {
      audio.src = e.target.result
      audio.addEventListener('durationchange', function() {
          console.log("durationchange: " + audio.duration);
          var hidden_input= document.getElementById("durasi-lagu-baru");
          hidden_input.value = Math.round(audio.duration);
          document.getElementById("form-upload-lagu").submit();
      },false);

      audio.addEventListener('onerror', function() {
          alert("Cannot get duration of this file.");
      }, false);
  };
  reader.readAsDataURL(file);
});