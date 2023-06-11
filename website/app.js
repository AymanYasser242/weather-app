/* Global Variables */
const apiKey="&appid=f385a981dfee83d52b92320193d2411b&units=metric";
let baseUrl="https://api.openweathermap.org/data/2.5/weather?";

//get current location lon & lat
let currentLocation = "";
let latitude = "";
let longitude = "";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Geolocation is not supported by this browser.");
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  currentLocation = `lat=${latitude}&lon=${longitude}`;
}



// Create a new date instance dynamically with JS
let date = new Date();
let newDate = (date.getMonth()+1)+'.'+ date.getDate()+'.'+ date.getFullYear();
//TODO: active perform function when clicking on 'generate' button.
document.getElementById('generator').addEventListener('click',perform);
//TODO: calling getWeather function to get weather info.
function perform(){

    let feeling=document.getElementById('feeling').value;
    getWeather(baseUrl,currentLocation,apiKey)
    .then(function(data){
    //TODO: sending weather data to the local server.     
        transData('/add',{date:newDate, city:data.name ,temp:data.main.temp , content:feeling});
    //calling the function to update UI.    
    }).then(function() {
      updateUI()
    });
};



//get the weather info  from 'openweather.org' .
const getWeather = async(url,currentLocation,key)=>{
const res = await fetch(url+currentLocation+key)
try{
    const data= await res.json();
    return data;
}
catch(error){
    console.log("error",error);
}
};
//getting weather data from local server.
const transData = async ( url='', data={})=>{
const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)       
  });
try {
      const newData = await response.json();
             return newData
    }
catch(error) {
    console.log("error", error);
    }
};
//TODO: updating the ui dynamcily.
let updateUI = async()=>{
const request = await fetch('/all');
try{
const allData = await request.json();
document.getElementById('date').innerHTML=`Date : ${allData.date}`;
document.getElementById('temp').innerHTML=`Temperature : ${(allData.temp)} C°`
document.getElementById('content').innerHTML=`Feeling : ${allData.content}`
document.getElementById('city').innerHTML=`<h1>${allData.city} <i class="fa-solid fa-earth-americas"></i></h1>`
}
catch(error){
    console.log("error",error);
}
};
