//KAMUS BUAT MEMPERMUDAH SUBMIT
var emailAman
var sandiAman
var ksandiAman
var namaAman

window.onload = function() {
    emailAman = false
    sandiAman= false
    ksandiAman= false
    namaAman= false
}

function emailWarning(){
    emailAman = false;
    let div = document.getElementById("div-email");
    let inputform = document.getElementById("email")
    let warningteks = document.getElementById("warningEmail");
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    // Mengambil atau mengubah teks warning
    if (warningteks) { //Berarti dah ada warningnya
        warningteks = document.getElementById("warningEmail");
    } else{
        warningteks = document.createElement("p");
        warningteks.setAttribute('id', 'warningEmail')
        warningteks.setAttribute('class','warning')
    }

    if(regex.test(inputform.value)){
        xhttp = new XMLHttpRequest();
        xhttp.open("GET", "register/checkemail/" + inputform.value , true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);

            if (data.exists == 1 ){
                warningteks.innerHTML = "Email sudah didaftarkan";
                warningteks.setAttribute('style', 'color:red')
                inputform.setAttribute('class', 'red')
            }
            else {
                emailAman=true
                warningteks.innerHTML = "Email bisa digunakan";
                warningteks.setAttribute('style', 'color:green')
                inputform.setAttribute('class', 'green')
            }
          }
        };


    }
    else{
        warningteks.innerHTML = "Tidak sesuai masukan input email";
        warningteks.setAttribute('style', 'color:red')
        inputform.setAttribute('class', 'red')
    }
    
    inputform.setAttribute('style', 'margin-bottom:2px')
    div.append(warningteks);
}

function sandiWarning(){
    sandiAman =false
    let div = document.getElementById("div-sandi");
    let inputform = document.getElementById("sandi")
    let warningteks = document.getElementById("warningSandi");
    const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);

    // Mengambil atau mengubah teks warning
    if (warningteks) { //Berarti dah ada warningnya
        warningteks = document.getElementById("warningSandi");
    } else{
        warningteks = document.createElement("p");
        warningteks.setAttribute('id', 'warningSandi')
        warningteks.setAttribute('class','warning')
    }

    if(inputform.value.length>7){
        if(regex.test(inputform.value)){
            sandiAman = true;
            warningteks.innerHTML = "Sandi sudah sesuai";
            inputform.setAttribute('class', 'green')
            warningteks.setAttribute('style', 'color:green')
        }
        else{
            warningteks.innerHTML = "Minimal 1 huruf kapital, 1 huruf kecil, dan 1 angka";
            inputform.setAttribute('class', 'red')
            warningteks.setAttribute('style', 'color:red')
        }
    }
    else{
        warningteks.innerHTML = "Masukkan minimal 8 huruf sandi";
        inputform.setAttribute('class', 'red')
        warningteks.setAttribute('style', 'color:red')
    }
    
    inputform.setAttribute('style', 'margin-bottom:2px')
    div.append(warningteks);
    let element =  document.getElementById('warningkSandi');
    if (typeof(element) != 'undefined' && element != null)
    {
      ksandiWarning()
    }
}

function ksandiWarning(){
    ksandiAman = false
    let div = document.getElementById("div-ksandi");
    let inputform = document.getElementById("ksandi")
    let inputformori = document.getElementById("sandi")
    let warningteks = document.getElementById("warningkSandi");

    // Mengambil atau mengubah teks warning
    if (warningteks) { //Berarti dah ada warningnya
        warningteks = document.getElementById("warningkSandi");
    } else{
        warningteks = document.createElement("p");
        warningteks.setAttribute('id', 'warningkSandi')
        warningteks.setAttribute('class','warning')
    }

    if(inputform.value.length>7){
        if(inputformori.value==inputform.value){
            ksandiAman = true
            warningteks.innerHTML = "Sandi sudah sama";
            inputform.setAttribute('class', 'green')
            warningteks.setAttribute('style', 'color:green')
        }
        else{
            warningteks.innerHTML = "Sandi tidak sama";
            inputform.setAttribute('class', 'red')
            warningteks.setAttribute('style', 'color:red')
        }
    }
    else{
        warningteks.innerHTML = "Masukkan minimal 8 huruf sandi";
        inputform.setAttribute('class', 'red')
        warningteks.setAttribute('style', 'color:red')
    }
    
    inputform.setAttribute('style', 'margin-bottom:2px')
    div.append(warningteks);
}

function namaWarning(){
    namaAman = false;
    let div = document.getElementById("div-nama");
    let inputform = document.getElementById("nama")
    let warningteks = document.getElementById("warningNama");
    const regex = new RegExp(/^\w{4,}$/);

    // Mengambil atau mengubah teks warning
    if (warningteks) { //Berarti dah ada warningnya
        warningteks = document.getElementById("warningNama");
    } else{
        warningteks = document.createElement("p");
        warningteks.setAttribute('id', 'warningNama')
        warningteks.setAttribute('class','warning')
    }

    if(regex.test(inputform.value)){
        xhttp = new XMLHttpRequest();
        xhttp.open("GET", "register/checknama/" + inputform.value , true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);

            if (data.exists == 1 ){
                warningteks.innerHTML = "Nama sudah didaftarkan";
                warningteks.setAttribute('style', 'color:red')
                inputform.setAttribute('class', 'red')
            }
            else {
                namaAman=true
                warningteks.innerHTML = "Nama bisa digunakan";
                warningteks.setAttribute('style', 'color:green')
                inputform.setAttribute('class', 'green')
            }
          }
        };


    }
    else{
        warningteks.innerHTML = "Hanya mengandung alphanumeric dan underscore, minimal 4 karakter";
        warningteks.setAttribute('style', 'color:red')
        inputform.setAttribute('class', 'red')
    }
    
    inputform.setAttribute('style', 'margin-bottom:2px')
    div.append(warningteks);
}

function debounce(func, timeout = 200){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  function saveInput(){
    console.log('Saving data');
}

function ValidateForm(){
    let div = document.getElementById("submitWarning");
    if (!(sandiAman&&ksandiAman&&emailAman&&namaAman)){
        div.innerHTML = "<br><br>Salah satu kolom field masih merah / belum diisi<br><br>"
    }
    return sandiAman&&ksandiAman&&emailAman&&namaAman
}

const emailChange = debounce(() => emailWarning());
