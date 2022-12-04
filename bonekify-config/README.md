# BONEKIFY CONFIG - Tugas Besar 2 IF3110

This config is used to handle the Docker compose for each repository

## Table of Contents
- [BONEKIFY CONFIG - Tugas Besar 2 IF3110](#bonekify-config---tugas-besar-2-if3110)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Installation](#installation)

## Requirements
As the server is running on a Docker container, make sure to first install Docker.

You can choose to install Docker with <a href="https://www.docker.com/products/docker-desktop/">Docker Desktop</a> or a CLI.

## Installation
Once Docker is installed, run Docker.

To run the server, first build the container. Go to the root directory of the repository and run:
```
docker compose up --build
```
The command will build and run the container for the first time.