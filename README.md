# A Medical Directory API

## Deployed project link: https://med-directory-cen.herokuapp.com/directory

## Description:
The purpose of the project was to create a restful CRUD API using tools like Mongodb, Express.js, Node.js etc. and deploy it with Heroku. I built this Medical Directory API using data gotten from the Better Doctor API using AXIOS. The directory model references profile, educations, specialities, practices, and insurances.
In addition to having full CRUD functionality which allows users to create, read, update, and delete whatever data they would like, it also follows the restful guidelines. 

## Technologies: 
* MongoDB 
* Heroku 
* Express.js
* Node.js
* Mongo Atlas
* Axios
* VS code

## Required Installations:
* Fork and clone the repository
* Inside the directory run:
  * npm init
  * npm install express  
  * npm install mongo
  * npm install body-parser
* Code away


## Routes:
Here's an explanation to different route, their functionality, and how to navigate it.
* Home page route: https://med-directory-cen.herokuapp.com/directory
  * Description: this route will redirect the user to the home of the directory, showing the first 200 doctors and their infomation.

* Profile route: https://med-directory-cen.herokuapp.com//directory/profile/:name e.g https://med-directory-cen.herokuapp.com//directory/profile/Terry
  * Description: this route will direct the user to the profile of the particular doctor that they wish to find. The example will pull out the profile of Dr. Terry.

* Specialties route: https://med-directory-cen.herokuapp.com/directory/specialties/:name e.g https://med-directory-cen.herokuapp.com/directory/specialties/Anesthesiology
  * Description: this route will direct the user to the list of doctors with that specialty. The example will pull out a list of doctors whose specialty is Anesthesiology.
