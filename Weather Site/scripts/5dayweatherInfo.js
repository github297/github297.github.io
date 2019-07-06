//new http request for data
const newweatherObject = new XMLHttpRequest();
newweatherObject.open("GET","https://api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=0e2291c05d0d27dffb42a2effa870708&units=imperial", true )
newweatherObject.send();
newweatherObject.onload = function() {
    let newweatherInfo = JSON.parse(newweatherObject.responseText)
    console.log(newweatherInfo);

//declare variables for the days of the week. I'm still working on figuring out this part out.
function dayNames {
var day = new Date();
    var weekday = new array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

var n = weekday[day.getDay()];
}

document.getElementById('day').innerHTML = n;
document.getElementById('desc1').innerHTML = newweatherInfo.list[6].weather[0].description
document.getElementById('high1').innerHTML = newweatherInfo.list[6].main.temp_max;
document.getElementById('low1').innerHTML = newweatherInfo.list[6].main.temp_min;
document.getElementById('wind1').innerHTML = newweatherInfo.list[6].wind.speed;

document.getElementById('day2').innerHTML = n;
document.getElementById('desc2').innerHTML = newweatherInfo.list[14].weather[0].description
document.getElementById('high2').innerHTML = newweatherInfo.list[14].main.temp_max;
document.getElementById('low2').innerHTML = newweatherInfo.list[14].main.temp_min;
document.getElementById('wind2').innerHTML = newweatherInfo.list[14].wind.speed;

document.getElementById('day3').innerHTML = n;
document.getElementById('desc3').innerHTML = newweatherInfo.list[22].weather[0].description
document.getElementById('high3').innerHTML = newweatherInfo.list[22].main.temp_max;
document.getElementById('low3').innerHTML = newweatherInfo.list[22].main.temp_min;
document.getElementById('wind3').innerHTML = newweatherInfo.list[22].wind.speed;

document.getElementById('day4').innerHTML = n;
document.getElementById('desc4').innerHTML = newweatherInfo.list[30].weather[0].description
document.getElementById('high4').innerHTML = newweatherInfo.list[30].main.temp_max;
document.getElementById('low4').innerHTML = newweatherInfo.list[30].main.temp_min;
document.getElementById('wind4').innerHTML = newweatherInfo.list[30].wind.speed;

document.getElementById('day5').innerHTML = tomorrow;
document.getElementById('desc5').innerHTML = newweatherInfo.list[38].weather[0].description
document.getElementById('high5').innerHTML = newweatherInfo.list[38].main.temp_max;
document.getElementById('low5').innerHTML = newweatherInfo.list[38].main.temp_min;
document.getElementById('wind5').innerHTML = newweatherInfo.list[38].wind.speed;
//sets the icon code
const iconcode = newweatherInfo.weather[0].icon;
console.log(iconcode);

//sets the icon path
const icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
console.log(icon_path);

//displays the weather icon
document.getElementById('weather_icon').src = icon_path;

}