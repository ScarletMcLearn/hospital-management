![main_picture](https://user-images.githubusercontent.com/35674364/38763706-29e92d3c-3fc3-11e8-92da-e53f6a3f3ba6.JPG)

# Description :point_left:
It's a web application for managing hospitals rooms and determining the patient's priority for isolation. 
This provides a centralised hub for managing the patients and planning their distribution across hospital’s rooms. 


It allows nurses to keep track of the patients and their diseases in real time and to have an overview over the patients and rooms, and 
better manage the rooms assignment across patients.

# Installing - easy :electric_plug:
1.	Download the repository

### [Click here to download latest version](https://github.com/iub-cse-shq/hospital-management)

1. Install [Node.js](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/download-center?jmp=nav) on your computer

2. Download this code, and from command prompt run:

   `npm install`                              `bower install`


3. To run the code, run:

    `node app.js`

    
4. In the browser open http://localhost:3000/, and you should see the index page

# How to use it :book:

### Dashboard

Data about patients and rooms is available here. The page is split into three tables. 

![dashboard](https://user-images.githubusercontent.com/35674364/38763728-87f96086-3fc3-11e8-961a-cb5283d3fae4.JPG)

![dasboard_2](https://user-images.githubusercontent.com/35674364/38763732-a00165b6-3fc3-11e8-9933-612ce3941c45.JPG)

To clear the red warning sign you need to go on the patient’s personal page. To do that, you have to double click on his name. By clicking on the ‘Update button’ on the bottom of the page, the patient’s diagnosis in updated for the next 24 hours (consequently, the red warning sign disappears).

### Add patient page

You can add a new patient in the system with his personal details and his diseases. The application automatically computes the score of the patient based on the entered diseases

![add_new_patient](https://user-images.githubusercontent.com/35674364/38763736-bf3b3a4c-3fc3-11e8-9892-b560135edd08.JPG)

### Patient page

Double click on a patient name on the dashboard to get here.

![patient_page](https://user-images.githubusercontent.com/35674364/38763743-e109c04e-3fc3-11e8-9f5a-cd45b0d5515b.JPG)


### System settings

The control center of the application. It allows users to manage the diseases & rooms of the Hospital and create new accounts

![system_settings](https://user-images.githubusercontent.com/35674364/38763749-07d1df36-3fc4-11e8-8b1f-3d568f73c20b.JPG)

# App Modules and Code organisation
### Modules

Module|Core	|Patients|Diseases|Rooms 
------|-----|--------|--------|----
Functionality	|- login system | - add / delete patients | - add / delete diseases | 	- assign rooms to patients
.|- add users | - update patient's diagnosis | - assign disease to patients | - add / remove rooms
.|- view dashboard	| - view patient’s page | 
.|.| - retrieve patient's information	

### Code organisation :open_file_folder:

Folder | Content | Responsability
------|-----|--------
/public	| |	Contains the public files, such as CSS, fonts and scripts.
/routes	| |	Manage the HTTP requests. Is divided into smaller modules responsible for disjoint tasks.
.	|/app.js| 	Renders dashboard page
.	|/disease.js| 	Responsible for diseases
.	|/login.js|	Responsible for logging in
.	|/patients.js|	Responsible for patients
.	|/rooms.js|	Responsible for rooms
.	|/settings.js|	Renders settings page
.	|/users.js|	Add new users and logout
/server	| |	Defines the database and Schemas
.	|/db/mongoose.js| 	Database settings
.	|/models| 	Defines Schemas
/views		| |Render pages
.	|/layouts|	The core layout; each page is rendered inside the layout
.	|/(other files)|	Contains specific visual changes for every page

# Technologies

### Backend
![backend](https://user-images.githubusercontent.com/35674364/38763755-440d1484-3fc4-11e8-83d4-4352cedfaad4.jpg)

### Frontend
![frontend](https://user-images.githubusercontent.com/35674364/38763752-2ded2234-3fc4-11e8-9857-7785af9a1831.jpg)

### Database
![database](https://user-images.githubusercontent.com/35674364/38763757-63eaa1ae-3fc4-11e8-8bcd-2133a0f9c2c9.jpg)

# REST Apis
The backend and frontend communicate through REST Apis. On the frontend, we make Ajax requests using jQuery to the following routes: 

URI |	Returns
----|----
/app/getdiseases |	returns information about all diseases in the system
/app/getpatients |       	returns information about all patients in the system
/app/getpatient/:hospitalNumber |	returns information about a specific patient
/app/getrooms	| returns information about the rooms in the system

![capture42325525](https://user-images.githubusercontent.com/35674364/38778020-c6e0db38-40d3-11e8-85cb-16c5311ef519.JPG)

# REFERENCE
[ Cloned from github.com/margiki/Hospital-management-nodejs ](https://github.com/margiki/Hospital-management-nodejs)
