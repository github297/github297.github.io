//create the weather object
const weatherObject = new XMLHttpRequest();

weatherObject.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5604473, us&appid=0e2291c05d0d27dffb42a2effa870708", true )
weatherObject.send();
weatherObject.onload = function() {
    let weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
	
}
