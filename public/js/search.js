function livesearch(clicked_id = 1){ // CLICKED ID BUAT PAGINATION
    //CLEAR
    currentPage = 1
    // DAPET SEARCH
    let searchbox = document.getElementById("search")
    let searchquery
    if (searchbox.value == ''){
        searchquery = 'tampilkansemua'
    }
    else{
        searchquery = searchbox.value
        searchquery = searchquery.replaceAll(" ", "-")
    }

    // DAPET SORTNYA
    let sort1 = document.getElementById("sort1").value
    let sort2 = document.getElementById("sort2").value
    
    // DAPET FILTERNYA
    let filters = ""
    let temp =""
    const genres = document.getElementsByClassName("checkbox");
    for (var l = 0; l < genres.length; l++) {
        if (genres[l].checked){
            temp = genres[l].id.replaceAll(" ", "xxx");
            filters += temp + "-"
        }
    }
    if (filters.length > 0){
        filters = filters.slice(0, -1)
    }else{
        filters = "none"
    }

    let allquery = "search/livesearchphp/" + searchquery + '/' + clicked_id + '/' + sort1 + '-' + sort2 + '/' + filters
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", allquery, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        let stringpagination = ""
        let string
        if (data.exists == 1) {
            string = "<tr><th>#</th><th colspan=2>JUDUL</th><th>TAHUN TERBIT</th><th>GENRE</th><th>DURASI</th></tr>"
            for (var i = 0; i < data.song.length; i++) {
                string += "<tr class='list-lagu-item'><td class=\"nomertabel\">" + (10*(clicked_id-1)+i+1).toString() + "</td>";

                string += "<td><a class='tabel-lagu-img' href =\"http://localhost:8080/public/lagu/putar/" + data.song[i].song_id + "\">"
                string += "<img id = \"logo\" src=\"http://localhost:8080/public/img/" + data.song[i].Image_path + "\">"
                string += "</a></td>"

                string += "<td class='container'>"
                string += "<div class='judul-lagu'><a href =\"http://localhost:8080/public/lagu/putar/" + data.song[i].song_id+ "\">" + data.song[i].Judul + "</a></div>"
                string += "<div class='penyanyi'>" + data.song[i].Penyanyi + "</div>"

                string += "<td class='tahun-terbit'>" + data.song[i].Tanggal_terbit.slice(0,4) + "</td>"
                string += "<td class='genre'>" + data.song[i].Genre + "</td>"

                let durasi = data.song[i].Duration
                let menit = Math.floor(durasi/60)
                let detik = durasi - menit*60
                if (detik < 10) {
                    tampilandetik = "0" + detik.toString()
                }
                else {
                    tampilandetik = detik.toString()
                }

                string += "<td class='nomertabel'>" + menit.toString() + ":" + tampilandetik + "</td>"

                string += "</tr>"
            }      
            document.getElementById("list-lagu").innerHTML = string;
            document.getElementById("gaadacontainer").innerHTML = "";
        } else{
            string = "<p id='kagakada' class='kagakada'>Tidak ada lagu dengan query tersebut :(</p>"
            document.getElementById("gaadacontainer").innerHTML = string;
            document.getElementById("list-lagu").innerHTML = "";
        }
        for (var k = 1; k <= Math.ceil(data.banyakData/10); k++) {
            if (k==clicked_id) {
                stringpagination += '<button class="dipilih" id="' + k + '" onClick="livesearch(this.id)">' +k+ '</button>';
            }else{
                stringpagination += '<button id="' + k + '" onClick="livesearch(this.id)">' +k+ '</button>';
            }
            
        }
        
        document.getElementById("pagination").innerHTML = stringpagination;
        }
    };
}