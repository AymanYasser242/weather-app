// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { request, response } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = process.env.PORT || 8080;
const server = app.listen(port , ()=>{console.log("Server Is Running!\nClick http://localhost:8080/ To View.")});
//TODO: send projectData object data when recieves an request and then reset the object.
app.get('/all',sendData);
function sendData(req,res){
res.send(projectData);
//reset object to default value after finishing processes.
projectData={};
};
//TODO: add the data recived to projectData object.
app.post('/add',addData)
function addData(req,res){
newData={
city:req.body.city,
temp:req.body.temp,
date:req.body.date,
content:req.body.content,
icon:req.body.icon
};
projectData=newData;
};