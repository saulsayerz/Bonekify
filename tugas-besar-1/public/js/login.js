var emailnamaAman
var sandiAman

window.onload = function() {
    emailnamaAman = false;
    sandiAman = false;
}

function checkemailnama(){
    if (document.getElementById("emailnama").value == "") {
        emailnamaAman = false;
    }
    else{
        emailnamaAman = true;
    }
}

function checksandi(){
    if (document.getElementById("sandi").value == "") {
        sandiAman = false;
    }
    else{
        sandiAman = true;
    }
}

function ValidateForm(){
    let div = document.getElementById("submitWarning");
    if (!(sandiAman&&emailnamaAman)){
        div.innerHTML = "<br><br>Salah satu kolom field masih merah / belum diisi<br><br>"
    }
    return sandiAman&&emailnamaAman
}