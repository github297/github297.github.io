const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","https://api.openweathermap.org/data/2.5/weather?zip=20895,us&appid=0e2291c05d0d27dffb42a2effa870708&units=imperial", true )
weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText)
    console.log(weatherInfo);

document.getElementById('description').innerHTML = weatherInfo.weather[0].description
document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;
document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;

const iconcode = weatherInfo.weather[0].icon;

const icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
console.log(icon_path);

document.getElementById('weather_icon').src = icon_path;
}

const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","https://api.openweathermap.org/data/2.5/weather?zip=19103,us&appid=0e2291c05d0d27dffb42a2effa870708&units=imperial", true )
weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText)
    console.log(weatherInfo);

document.getElementById('description2').innerHTML = weatherInfo.weather[0].description
document.getElementById('currentTemp2').innerHTML = weatherInfo.main.temp;
document.getElementById('windSpeed2').innerHTML = weatherInfo.wind.speed;
document.getElementById('humidity2').innerHTML = weatherInfo.main.humidity;

const iconcode = weatherInfo.weather[0].icon;

const icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
console.log(icon_path);

document.getElementById('weather_icon2').src = icon_path;
}

const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","https://api.openweathermap.org/data/2.5/weather?zip=02487,us&appid=0e2291c05d0d27dffb42a2effa870708&units=imperial", true )
weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText)
    console.log(weatherInfo);

document.getElementById('description3').innerHTML = weatherInfo.weather[0].description
document.getElementById('currentTemp3').innerHTML = weatherInfo.main.temp;
document.getElementById('windSpeed3').innerHTML = weatherInfo.wind.speed;
document.getElementById('humidity3').innerHTML = weatherInfo.main.humidity;

const iconcode = weatherInfo.weather[0].icon;

const icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
console.log(icon_path);

document.getElementById('weather_icon3').src = icon_path;
}

const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","https://api.openweathermap.org/data/2.5/weather?zip=10023,us&appid=0e2291c05d0d27dffb42a2effa870708&units=imperial", true )
weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText)
    console.log(weatherInfo);

document.getElementById('description4').innerHTML = weatherInfo.weather[0].description
document.getElementById('currentTemp4').innerHTML = weatherInfo.main.temp;
document.getElementById('windSpeed4').innerHTML = weatherInfo.wind.speed;
document.getElementById('humidity4').innerHTML = weatherInfo.main.humidity;

const iconcode = weatherInfo.weather[0].icon;

const icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
console.log(icon_path);

document.getElementById('weather_icon4').src = icon_path;
}

