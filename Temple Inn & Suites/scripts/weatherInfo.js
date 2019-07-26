const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","https://api.openweathermap.org/data/2.5/weather?zip=20002,us&appid=0e2291c05d0d27dffb42a2effa870708&units=imperial", true )
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

const weatherObject2 = new XMLHttpRequest();
weatherObject2.open("GET","https://api.openweathermap.org/data/2.5/weather?zip=19103,us&appid=0e2291c05d0d27dffb42a2effa870708&units=imperial", true )
weatherObject2.send();
weatherObject2.onload = function() {
    let weatherInfo2 = JSON.parse(weatherObject2.responseText)
    console.log(weatherInfo2);

document.getElementById('description2').innerHTML = weatherInfo2.weather[0].description
document.getElementById('currentTemp2').innerHTML = weatherInfo2.main.temp;
document.getElementById('windSpeed2').innerHTML = weatherInfo2.wind.speed;
document.getElementById('humidity2').innerHTML = weatherInfo2.main.humidity;

const iconcode2 = weatherInfo2.weather[0].icon;

const icon_path2 = "https://openweathermap.org/img/w/" + iconcode2 + ".png";
console.log(icon_path2);

document.getElementById('weather_icon2').src = icon_path2;
}

const weatherObject3 = new XMLHttpRequest();
weatherObject3.open("GET","https://api.openweathermap.org/data/2.5/weather?zip=02108,us&appid=0e2291c05d0d27dffb42a2effa870708&units=imperial", true )
weatherObject3.send();
weatherObject3.onload = function() {
    let weatherInfo3 = JSON.parse(weatherObject3.responseText)
    console.log(weatherInfo3);

document.getElementById('description3').innerHTML = weatherInfo3.weather[0].description
document.getElementById('currentTemp3').innerHTML = weatherInfo3.main.temp;
document.getElementById('windSpeed3').innerHTML = weatherInfo3.wind.speed;
document.getElementById('humidity3').innerHTML = weatherInfo3.main.humidity;

const iconcode3 = weatherInfo3.weather[0].icon;

const icon_path3 = "https://openweathermap.org/img/w/" + iconcode3 + ".png";
console.log(icon_path3);

document.getElementById('weather_icon3').src = icon_path3;
}

const weatherObject4 = new XMLHttpRequest();
weatherObject4.open("GET","https://api.openweathermap.org/data/2.5/weather?zip=10023,us&appid=0e2291c05d0d27dffb42a2effa870708&units=imperial", true )
weatherObject4.send();
weatherObject4.onload = function() {
    let weatherInfo4 = JSON.parse(weatherObject4.responseText)
    console.log(weatherInfo4);

document.getElementById('description4').innerHTML = weatherInfo4.weather[0].description
document.getElementById('currentTemp4').innerHTML = weatherInfo4.main.temp;
document.getElementById('windSpeed4').innerHTML = weatherInfo4.wind.speed;
document.getElementById('humidity4').innerHTML = weatherInfo4.main.humidity;

const iconcode4 = weatherInfo4.weather[0].icon;

const icon_path4 = "https://openweathermap.org/img/w/" + iconcode4 + ".png";
console.log(icon_path4);

document.getElementById('weather_icon4').src = icon_path4;
}

