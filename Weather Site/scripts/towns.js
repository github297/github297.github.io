const requestObject = new XMLHttpRequest();

const requestURL = "https://github.com/github297/github297.github.io/blob/master/Weather%20Site/townData.json";

let weatherInfo;
requestObject.open("GET", requestURL);
requestObject.send();
requestObject.onload = function() {
    weatherInfo = JSON.parse(requestObject.responseText);
    console.log(weatherInfo);


	document.getElementById("fish").innerHTML = assembleData(1);
	document.getElementById("soda").innerHTML = assembleData(4);
	document.getElementById("preston").innerHTML = assembleData(5);
}

function assembleData(x) {

	console.log(myWeatherInfo.towns[x]);
	
	let townInfo = "<h3>"+weatherInfo.towns[x].name+"</h3>";
	townInfo += "<i>"+weatherInfo.towns[x].motto+"</i>";
	townInfo += "<p>Year founded: "+weatherInfo.towns[x].yearFounded+"</p>";
	townInfo += "<p>Current Population: "+weatherInfo.towns[x].currentPopulation+"</p>";
	townInfo += "<p>Rainfall: "+weatherInfo.towns[x].averageRainfall+"</p>";
         
	return townInfo;
}