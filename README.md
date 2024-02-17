<div align="center">
<h1>Lab Report Management System</h1>


![GitHub Issues](https://img.shields.io/github/issues/kerimsenturk5734/lab-report)
![GitHub License](https://img.shields.io/github/license/kerimsenturk5734/lab-report)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kerimsenturk5734/lab-report)
![GitHub Forks](https://img.shields.io/github/forks/kerimsenturk5734/lab-report)
![GitHub Stars](https://img.shields.io/github/stars/kerimsenturk5734/lab-report)

| [English](README.md) | [Turkish](./docs/readme/README_TR.md) |


<a href="https://github.com/kerimsenturk5734/lab-report/tree/master/docs"><strong>Explore the more documentation »</strong></a>
</div>

## Project Overview
This project contains a web information management application to store, manage and present information about diseases of patients. It has report management system inside to manage diagnostic and pathologic reports. It includes a spring rest service and react web ui client.

## Getting Started
### Prerequisites
- Docker Compose or Docker Desktop
   - (<i> compose 2.24, desktop 4.27 have bug that `changes out of order`. If you encountering with this error update the docker</i>)
- 3000, 3307, 8080 ports must be available. If it isn't change the host ports with available one inside `./docker-compose.yml`

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kerimsenturk5734/lab-report
   ```
2. Be sure that Docker Engine is running.

3. Run following code at ```./labreport``` location. It will take a while when installing dependencies, please be patient.
   ```sh
   docker-compose up
   ```

4. After installation, you can check the container is running by running below command in new terminal;
   ```sh
   docker ps
   ```

5. Open the browser and locate to ```localhost:3000``` (If you changed the port use changed port instead of 3000)


## Project Details
![System Context](./docs/readme/images/system-context.png)

### Database
- Entity Models

![Entity Modesl](./docs/readme/images/er.png)

- Report Folder Structure

![Report Folder Structure](./docs/readme/images/folder-structure.png)

### Swagger Documentatiton
You can access the API documentation at `http://localhost:8080/swagger-ui/index.html`.
If you can't see the endpoints when you access the Swagger page, make sure that you typed `/v3/api-docs` in the search bar and click explore button.<br>

 We have an authorization mechanism on api. So different user types can perform different actions. We have four user types called `ADMIN`, `PATIENT`, `LAB_TECHNICIAN` and `DOCTOR`. If you want to access all endpoints you must log in as an `ADMIN` user.
 
 Here there are some example users, you can use them to test api;

 - <i>User Type - UserId - Password</i>
   - ADMIN - 4561234 - A12345678b
   - DOCTOR - 1234567  - A12345678b
   - LAB_TECHNICIAN - 1234568 - A12345678b
   - PATIENT - 98765432109 - A12345678b 
   - <i>(Note that not every user can access all endpoints)</i>
  
 Follow the below instructions to login and test endpoints;

- Select a user from above
- Go to `v1/api/users/login` endpoint

   ![login-endpoint](./docs/readme/images/login-endpoint.PNG)

- Enter the userId and password as sampled on swagger
- Execute the endpoint
- You will get a response as sampled below

   ![login-credentials](./docs/readme/images/login-credentials.PNG)

- Copy the key from response and paste to Authorize tab at top section of page

   ![authorize-btn](./docs/readme/images/authorize-btn.PNG)
   ![authorize-key](./docs/readme/images/authorize-key.PNG)

- If you want to use the JWT token key as Auhorization header, add 'Bearer' at starting;<br>
   `Authorization` : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOi`

- Now you are ready to test endpoints.

## Built With

 <p align="center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png" width="155" height="50" alt="Spring Boot" title="Spring Boot 17" class="img-small">
      <img src="https://maven.apache.org/images/maven-logo-black-on-white.png" width="155" height="50" alt="Maven" title="Maven 3.9.5" class="img-small">
      <img src="https://cogitech.pl/wp-content/uploads/2023/02/Swagger-logo.png" height="50" alt="Swagger" title="OpenAPI 2.0.4" class="img-small">
      <br>
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" width="50" height="50" alt="Java" title="Java 19" class="img-small">
      <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" width="50" height="50" alt="React" title="React 18.1.0" class="img-small">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" width="50" height="50" alt="JS" title="JS" class="img-small">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" width="50" height="50" alt="TS" title="TS" class="img-small">
      <img src="https://cdn-icons-png.flaticon.com/512/919/919853.png" width="50" height="50" alt="" title="Docker version 24.0.2, build cb74dfc" class="img-small">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width="50" height="50" alt="" title="MySQL Workbench 8.0" class="img-small">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" width="50" height="50" alt="" title="Bootstrap" class="img-small">
      <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_658af7137903ecfd82a46c13374e8f75/itext-pdf-library-sdk.png" height="50" alt="" title="iText 5.5.13.3" class="img-small">
      
      
      
      
   </p>




<hr>
<div align="center">
   <a href="mailto: kerimsenturk2002@outlook.com" target="blank"><img align="center" src="https://cdn-icons-png.flaticon.com/512/9840/9840614.png" height="40" width="40" /></a>
   <a href="https://twitter.com/kersenturk57" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="kersenturk57" height="30" width="40" /></a>
   <a href="https://www.linkedin.com/in/kerim-%c5%9fent%c3%bcrk-784a3220a/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="kerim-%c5%9fent%c3%bcrk-784a3220a" height="30" width="40" /></a>
   <a href="https://stackoverflow.com/users/16939669" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="16939669" height="30" width="40" /></a>
   <a href="https://www.instagram.com/s1r_ker1m/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="kerimm_sntrk" height="30" width="40" /></a>
</div>
<hr>
<p align="right">(<a href="#top">back to top</a>)</p>