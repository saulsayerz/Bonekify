# BONEKIFY SOAP Service
Bonekify is a music streaming web application service similar to Spotify.

This is the repository for the back-end of Bonekify. It primarily has SOAP endpoint for the Bonekify Premium App for communication with its database and other services of the app. It also provides several endpoints for the base Bonekify app to fetch subscription data. 

## Table of Contents
- [BONEKIFY SOAP Service](#bonekify-soap-service)
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

## Running the Server
Make sure to refer requirements and installations in the Bonekify Config Repository first.

```
docker compose up
```
The web application will now be up and running. It is now locally accessible through port 1400.
<b><a href="http://localhost:1401/">http://localhost:1401</a></b>

## Tasks Allocation
This project is made by:
- <a href="https://www.linkedin.com/in/ahmad-alfani-handoyo/"> Ahmad Alfani Handoyo (13520023)</a>
- <a href="https://www.linkedin.com/in/saulsayers/?originalSubdomain=id">Saul Sayers (13520094)</a>
- <a href="https://www.linkedin.com/in/rizky-ramadhana-putra-kusnaryanto-6037a51aa/">Rizky Ramadhana Putra Kusnaryanto (13520151)</a>

Endpoint | Allocation | 
--- | --- |
Subscription | 13520023, 13520094, 13520151
