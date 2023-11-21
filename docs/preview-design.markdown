
<center>
    <table>
        <colgroup>
            <col style="width: 21%" />
            <col style="width: 60%" />
            <col style="width: 21%" />
        </colgroup>
        <thead>
            <tr class="header">
                <th></th>
                <th>
                    <p><img src="./media/image1.jpeg"
                    style="width:3.73819in;height:0.68889in" /></p>
                    <p><strong>KATOWICE INSTITUTE OF TECHNOLOGIES</strong></p>
                    <p><strong>INFORMATION TECHNOLOGY</strong></p>
                </th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
</center>

<div style="text-align: center;">

**IT SYSTEM DESIGN**

**PREVIEW DESIGN REPORT**

**SUBJECT**

The Web Application for Patients, Lab Technicians and Doctors

To Manage and Access Pathological and Diagnostic Reports

**PREPARER**

09466

Kerim Senturk

**CONSULTANT**

Mr. Jacek Żywczok
</div>

1)  PROJECT SCOPE

    1.  What is The Project?

        This project contains an web information management system to
        store, manage and present pathological and diagnostics results
        of patients. We have 3 types of user;

        <u>*Patient*:</u> Who is want to see pathological and diagnostic
        results of him

        <u>*Lab* Techinician</u>: Who is entering the pathological
        results to system.

        *<u>Doctor</u>*: Who is review the pathological results and
        creating diagnostic reports.

    2.  **What is The Purpose of Project?**

- Managing pathological and diagnostic reports of patients.

- To get easier and be faster the accessing the patient results.

- Taking to digital place the patient diseases.

  1.  **What are The Components of Project?**

<!-- -->

- Database

- Web API

- Web Interface

<img src="./media/image2.png" style="width:6.53194in;height:4.06042in" />

1.  **What are The Functionalities of Project?**

- Create Patient/Lab Technician/Doctor User

- Update Patient/Lab Technician/Doctor Informations

- User Identification by Login/Logout

- User Authorization

- Create, Update, Delete, View pathologic and diagnostic results of
  patients.

- Download Patient Results as .pdf file

- Logging user actions to MongoDB like create, delete, show, login,
  logout etc. (Optional)

- View user actions by log data.

- Managing diseases for patients.

- Contact with Doctor on system. (Optional)

\*\*\* Some of these functionalities can be perform only by who has
authority. For more information check the “USER AUTHORIZATION”.

2)  **COMPONENTS**

    1.  Database

        1.  Entities

            1.  <u>Disease</u>

                <img src="./media/image3.png" style="width:3.76389in;height:4.07292in" />

            2.  <u>Report</u>

                <img src="./media/image4.png" style="width:6.47292in;height:3.44514in" />

            3.  <u>User</u>

                <img src="./media/image5.png" style="width:6.53194in;height:3.27917in" />

            4.  <u>Report File</u>

                This report file creating by using disease and report
                entities. It has the following properties;

- Report_number

- Result (title, details)

- Issue_Date

- Report_type

- Patient_id

- Doctor_name

- Lab_Techinician_name

  <img src="./media/image6.png" style="width:4.82749in;height:2.97247in" />

  1.  Logs (Optional)

  2.  Developing Tools

      1.  <u>MySQL</u>

> Patient, doctor and lab techinican informations stores here.

2.  <u>MongoDB</u>

> Log data stores here.

1.  Web API

    1.  User Service

    <img src="./media/image7.png" style="width:3.02708in;height:1.41806in" />

2.  Disease Service

    <img src="./media/image8.png" style="width:4.17292in;height:2.22708in" />

3.  Report Service

    <img src="./media/image9.png" style="width:4.17292in;height:1.69097in" />

4.  Report File Manager

    <img src="./media/image10.png" style="width:3.02708in;height:1.41806in" />

5.  Logger (Optional)

6.  Authentication

    <img src="./media/image11.png" style="width:6.53194in;height:3.78264in" />
    
    <img src="./media/image12.png" style="width:1.88194in;height:1.95486in" />

7.  Developing Tools

    1.  Java 19

> This language is the core of the Web API. Whole programming will do by
> this OOP lang.

2.  Spring Boot

> Spring Boot is a Java based framework to develop web projects. It has
> various module inside to create a web project. Spring-test,
> spring-web, spring-security, spring-aop, spring-jpa, spring-messging,
> spring-webmvc, spring-jdbc are some of these modules.

3.  OpenAPI

> OpenAPI is a tool to document endpoints of an API. In this way we can
> easily test and view our endpoints.

4.  Maven

> Maven is a dependency manager. Sometimes we need some libraries. At
> this stage maven downloads the needed libraries from Maven Repository
> and adds it to project for us.

5.  IntelliJ IDEA

> Intellij IDEA is a famous IDE for programming Java. It has various
> tools inside. Version Control System is one of these.

2.  **Web Interface**

    1.  Pages

        1.  Login-Register

            <img src="./media/image13.png" style="width:3.00764in;height:3.06319in" /><img src="./media/image14.png" style="width:2.81806in;height:3.83056in" />

        2.  Patient Dashboard

            <img src="./media/image15.png" style="width:5.46314in;height:6.42149in" />

        3.  Doctor Dashboard

            <img src="./media/image16.png" style="width:6.53194in;height:7.90486in" />

            <img src="./media/image17.png" style="width:6.53194in;height:3.95556in" />

        4.  Lab Techinician Dashboard

            <img src="./media/image18.png" style="width:6.53194in;height:7.8875in" />

        5.  Admin Dashboard

            <img src="./media/image19.png" style="width:6.53194in;height:8.18125in" />

            <img src="./media/image20.png" style="width:6.53194in;height:3.95069in" />

    2.  Developing Tools

        1.  Javascript

            Javascript is a interpreted programming language and has
            plenty frameworks and libs. It is mostly using on web
            programming. I am going to use it to communicate with my Web
            API.

        2.  React.js

            React is a Javascript based web and mobile framework. I am
            going to use it to develop web-frontend side of this
            project.

        3.  VsCode Editor

            VsCode is an editor to type whatever you want. I am going to
            use it to code React.js

        4.  Bootstrap

            Bootstrap is a Javascript based CSS library. We can design
            the html objects just giving them class name through this
            library.

        5.  Flaticon

            Flaticon is the website providing a lot of free icon. I am
            going to use this website to desing my interfaces.

<!-- -->

3)  **USER AUTHORIZATION**

<img src="./media/image21.png" style="width:5.71736in;height:5.94931in" />
