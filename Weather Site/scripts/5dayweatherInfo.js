//new http request for data
const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","https://api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=0e2291c05d0d27dffb42a2effa870708&units=imperial", true )
weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText)
    console.log(weatherInfo);

//declare variables for the days of the week
    var day = getDay();
    var tomorrow;
    tomorrow += day;
}

document.getElementById('day').innerHTML = weatherInfo.weather[0].description
document.getElementById('desc').innerHTML = weatherInfo.weather[0].description
document.getElementById('highlow').innerHTML = weatherInfo.main.temp;
document.getElementById('wind').innerHTML = weatherInfo.wind.speed;

//sets the icon code
const iconcode = weatherInfo.weather[0].icon;
console.log(iconcode);

//sets the icon path
const icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
console.log(icon_path);

//displays the weather icon
document.getElementById('weather_icon').src = icon_path;
}
