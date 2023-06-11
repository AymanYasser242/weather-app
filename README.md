
# Project Title 
- ## Weather Journal App
# Demo-Preview
![demo](https://i.ibb.co/tC6bcN9/Screenshot-20221112-020117.png)
# Table of contents 
* [Project Title](#project-title)
* [Demo Preview](#demo-preview)
* [Development](#development)
* [Sponsor](#sponsor)
* [License](#license)
* [Contribute](#contribute)
# Development
* a web weather journal app with dynamicly updated ui using javascript.
```javascript
let updateUI = async()=>{
const request = await fetch('/all');
try{
const allData = await request.json();
document.getElementById('date').innerHTML=`Date: ${allData.date}`;
document.getElementById('temp').innerHTML=`Temperature: ${((allData.temp)-275).toFixed()} C°`
document.getElementById('content').innerHTML=`Feeling: ${allData.content}`
document.getElementById('city').innerHTML=`<h1>${allData.city} <i class="fa-solid fa-earth-americas"></i></h1>`
}
catch(error){
    console.log("error",error);
}
};

```
* provid accurate temperature with openweather.org .
```javascript
const getWeather = async(url,zip,key)=>{
const res = await fetch(url+zip+key)
try{
    const data= await res.json();
    return data;
}
catch(error){
    console.log("error",error);
```
* store weather data recived to a local server
```javascript
const port = 8080;
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
console.log(req.body);
newData={
city:req.body.name,
temp:req.body.temp,
date:req.body.date,
content:req.body.content
};
projectData=newData;
};
```
# Sponsor 
* [udacity](https://www.udacity.com/)
* [fwd](https://egfwd.com/)
# License 
* [udacity](https://www.udacity.com/)
# Contribute 
* [My Facebook](https://www.facebook.com/ayman.yasser.39/)
* [My Github](https://github.com/AymanYasser242)