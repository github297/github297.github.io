const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","//api.openweathermap.org/data/2.5/weather?zip=84653,us&appid=0e2291c05d0d27dffb42a2effa870708&units=imperial", true )
weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText)
    console.log(weatherInfo);

document.getElementById('place').innerHTML = weatherInfo.name;
document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

const iconcode = weatherInfo.weather[0].icon;
console.log(iconcode);


} //end of onload function