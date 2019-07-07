const requestObject1 = new XMLHttpRequest();

const requestURL1 = "https://byui-cit230.github.io/weather/data/towndata.json";

let weatherInfo1;
requestObject1.open("GET", requestURL1);
requestObject1.send();
requestObject1.onload = function() {
    weatherInfo1 = JSON.parse(requestObject1.responseText);
    console.log(weatherInfo1);


	document.getElementById("fishEvents").innerHTML = assembleData1(1);
	document.getElementById("sodaEvents").innerHTML = assembleData1(4);
	document.getElementById("prestonEvents").innerHTML = assembleData1(5);
}

function assembleData1(x) {

	console.log(weatherInfo1.towns[x]);
	
	let townInfo1 = "<p>"+weatherInfo1.towns[x].events+"</p>";
         
	return townInfo1;
}