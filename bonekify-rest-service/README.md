# BONEKIFY REST Service
Bonekify is a music streaming web application service similar to Spotify.

This is the repository for the back-end of Bonekify. It primarily has REST endpoint for the Bonekify Premium App for communication with its database and other services of the app. It also provides several endpoints for the base Bonekify app to fetch premium singers data. 

THere are endpoints for premium songs CRUD, singers data, subscription read and update, and user authentication for the Bonekify Premium App.
## Table of Contents
- [BONEKIFY REST Service](#bonekify-rest-service)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
  - [Database Scheme](#database-scheme)
  - [Tasks Allocation](#tasks-allocation)

## Requirements
As the server is running on a Docker container, make sure to first install Docker.

You can choose to install Docker with <a href="https://www.docker.com/products/docker-desktop/">Docker Desktop</a> or a CLI.

## Installation
If you choose to use Docker, then you can refer to Bonekify Config Repository
However, if you choose to run using NPM then you can run :
```
npm install
```

## Running the Server
There are 2 ways to run this react app.

1. Docker
Make sure to refer requirements and installations in the Bonekify Config Repository first.

```
docker compose up
```
The web application will now be up and running. It is now locally accessible through port 1400.
<b><a href="http://localhost:1300/public">http://localhost:1400</a></b>

2. Npm
```
npm start
```
The web application will now be up and running. It is now locally accessible through port 3000.
<b><a href="http://localhost:3000/public">http://localhost:3000</a></b>

## Database Scheme
User

 Attributes |
----------- |
`user_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY|
`email` varchar(256) NOT NULL UNIQUE |
`password` varchar(256) NOT NULL |
`username` varchar(256) NOT NULL UNIQUE |
`name` varchar(256) NOT NULL |
`isAdmin` tinyint(1) NOT NULL |

Song

 Attributes |
----------- |
`song_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY |
`Judul` varchar(64) NOT NULL |
`penyanyi_id` int DEFAULT NULL |
`Audio_path` varchar(256) NOT NULL |

  FK: `penyanyi_id` --> `User`(`user_id`)

## Tasks Allocation
This project is made by:
- <a href="https://www.linkedin.com/in/ahmad-alfani-handoyo/"> Ahmad Alfani Handoyo (13520023)</a>
- <a href="https://www.linkedin.com/in/saulsayers/?originalSubdomain=id">Saul Sayers (13520094)</a>
- <a href="https://www.linkedin.com/in/rizky-ramadhana-putra-kusnaryanto-6037a51aa/">Rizky Ramadhana Putra Kusnaryanto (13520151)</a>

Endpoint | Allocation | 
--- | --- |
Lagu | 13520023
Penyanyi | 13520023
Subscription | 13520023, 13520094, 13520151
User | 13520023, 13520094
