# SIT323/737 Task 5.2D – Calculator Microservice (Dockerized & Published)

## Overview

This project is a lightweight Node.js-based calculator microservice.  
It has been Dockerized and successfully published to a private container registry hosted on Google Cloud Artifact Registry under the `australia-southeast2` region.

This submission fulfills the requirements for SIT323/737 Task 5.2D.

---

## Technologies Used

- Node.js
- Docker
- Google Cloud Platform (Artifact Registry)
- Git & GitHub

---

## Project Structure

calculator-service/ ├── calculator.js # Main application logic ├── package.json # Node.js dependencies ├── Dockerfile # Docker image configuration ├── README.md # Documentation


---

## Setup & Deployment Steps

### 1. Created Artifact Registry

- Project: `sit323-cloud-push`
- Region: `australia-southeast2` (Sydney)
- Repository: `calculator-repo`
- Format: Docker

### 2. Configured Google Cloud CLI & Docker

```bash
gcloud auth login
gcloud config set project sit323-cloud-push
gcloud auth configure-docker australia-southeast2-docker.pkg.dev

### 3. Built Docker Image

docker build -t australia-southeast2-docker.pkg.dev/sit323-cloud-push/calculator-repo/calculator-service .

### 4.Pushed Image to Artifact Registry
docker push australia-southeast2-docker.pkg.dev/sit323-cloud-push/calculator-repo/calculator-service
