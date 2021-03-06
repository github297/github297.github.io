const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","https://api.openweathermap.org/data/2.5/weather?zip=02111,us&appid=0e2291c05d0d27dffb42a2effa870708&units=imperial", true )
weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText)
    console.log(weatherInfo);

document.getElementById('place').innerHTML = weatherInfo.name;
document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

const iconcode = weatherInfo.weather[0].icon;
console.log(iconcode);

const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
console.log(icon_path);

document.getElementById('weather_icon').src = icon_path;




} //end of onload function