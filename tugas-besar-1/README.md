# BONEKIFY - Tugas Besar 1 IF3110

Bonekify is a music streaming web application service similar to Spotify.

Users are able to search and listen to a variety of songs. Surfing and exploring new songs is a breeze as Bonekify has displays for song/album information and list. Bonekify features a song management system for admins to add, change, and delete songs/albums. Admins are also able to see the list of users using the service. Users can also listen to premium songs feature. To do so, users can subscribe to the premium singers first which then will be validated by admin from the Binotify Premium App.

Bonekify is built on vanilla HTML, CSS, and JavaScript with native PHP. Data is stored on a MySQL server.

## Table of Contents
- [BONEKIFY - Tugas Besar 1 IF3110](#bonekify---tugas-besar-1-if3110)
  - [Table of Contents](#table-of-contents)
  - [Running the Server](#running-the-server)
  - [Screenshots](#screenshots)
  - [Tasks Allocation](#tasks-allocation)
  - [Perubahan Implementasi](#perubahan-implementasi)

## Running the Server
Make sure to refer requirements and installations in the Bonekify Config Repository first.
Then, you can run Docker with the command:
```
docker compose up
```

The web application will now be up and running. It is now locally accessible through port 1300.

<b><a href="http://localhost:1300/public">http://localhost:1300/public</a></b>

## Screenshots
![login.png](./public/img/screenshots/login.png)
![register.png](./public/img/screenshots/register.png)
![home.png](./public/img/screenshots/home.png)
![search.png](./public/img/screenshots/search.png)
![daftaralbum.png](./public/img/screenshots/daftaralbum.png)
![detillagu.png](./public/img/screenshots/detillagu.png)
![detilalbum.png](./public/img/screenshots/detilalbum.png)
![tambahlagu.png](./public/img/screenshots/tambahlagu.png)
![tambahalbum.png](./public/img/screenshots/tambahalbum.png)
![daftaruser.png](./public/img/screenshots/daftaruser.png)
![penyanyipremium.png](./public/img/screenshots/penyanyipremium.png)
![lagupremium.png](./public/img/screenshots/lagupremium.png)

## Tasks Allocation
This project is made by:
- <a href="https://www.linkedin.com/in/ahmad-alfani-handoyo/"> Ahmad Alfani Handoyo (13520023)</a>
- <a href="https://www.linkedin.com/in/saulsayers/?originalSubdomain=id">Saul Sayers (13520094)</a>
- <a href="https://www.linkedin.com/in/rizky-ramadhana-putra-kusnaryanto-6037a51aa/">Rizky Ramadhana Putra Kusnaryanto (13520151)</a>

Halaman | Client-side | Server-side 
--- | --- | ---
Login | 13520094 | 13520094
Register | 13520094 |  13520094
Home | 13520023, 13520094, 13520151| 13520094
Search, Sort, and Filter | 13520094 |  13520094
Daftar Album | 13520023, 13520094, 13520151 |  13520151
Detail Lagu | 13520023, 13520151 |  13520023, 13520151
Detail Album | 13520023, 13520151 |  13520023, 13520151
Tambah Lagu | 13520023 | 13520023, 13520151
Tambah Album | 13520023 |  13520023, 13520151
Daftar User | 13520023 | 13520023  
Penyanyi Premium | 13520094 13520023 | 13520151
Lagu Premium | 13520094 | 13520151

## Perubahan Implementasi
Berikut adalah beberapa perubahan implementasi / tambahan fitur yang dilakukan dari Tubes 1 ke 2:
- Menambahkan halaman daftar penyanyi premium. User dapat melakukan request subscription ke penyanyi.
- Menambahkan halaman daftar lagu premium. User dapat mendengarkan lagu premium apabilah sudah subscribe ke penyanyinya
Kedua halaman ini akan memanfaatkan endpoint dari service REST.
