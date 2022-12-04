function albumParam() {
    let albumID = document.getElementById("album").value;
    if (albumID == -1) {
        document.getElementById("div-file").style.display = "block";
        document.getElementById("div-penyanyi").style.display = "block";
    } else {
        document.getElementById("div-file").style.display = "none";
        document.getElementById("div-penyanyi").style.display = "none";
    }
}

document.querySelector("#submit-btn").addEventListener('click', async (e) => {  
    e.preventDefault();  
    var files = document.getElementById('lagu').files;
    var file = files[0];
    var reader = new FileReader();
    var audio = document.createElement('audio');
    reader.onload = async (e) => {
        audio.src = e.target.result
        audio.addEventListener('durationchange', function() {
            console.log("durationchange: " + audio.duration);
            var hidden_input= document.getElementById("durasi-lagu");
            hidden_input.value = Math.round(audio.duration);
            document.getElementById("tambah-form").submit();
        },false);

        audio.addEventListener('onerror', function() {
            alert("Cannot get duration of this file.");
        }, false);
    };
    reader.readAsDataURL(file);
});