const requestObject1 = new XMLHttpRequest();

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

let weatherInfo;
requestObject1.open("GET", requestURL);
requestObject1.send();
requestObject1.onload = function() {
    weatherInfo1 = JSON.parse(requestObject1.responseText);
    console.log(weatherInfo);


	document.getElementById("fishEvents").innerHTML = assembleData(1);
	document.getElementById("sodaEvents").innerHTML = assembleData(4);
	document.getElementById("prestonEvents").innerHTML = assembleData(5);
}

function assembleData(x) {

	console.log(weatherInfo1.towns[x]);
	
	let townInfo1 = "<p>"+weatherInfo1.towns[x].events+"</p>";
         
	return townInfo1;
}