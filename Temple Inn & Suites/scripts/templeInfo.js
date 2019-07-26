const requestObject = new XMLHttpRequest();

const requestURL = "https://github.com/github297/github297.github.io/blob/master/Temple%20Inn%20%26%20Suites/scripts/json.js;

let templeInfo;
requestObject.open("GET", requestURL);
requestObject.send();
requestObject.onload = function() {
    templeInfo = JSON.parse(requestObject.responseText);
    console.log(templeInfo);

	document.getElementById("preston").innerHTML = assembleData(1);
	document.getElementById("fish").innerHTML = assembleData(2);
	document.getElementById("soda").innerHTML = assembleData(3);
	document.getElementById("preston").innerHTML = assembleData(4);
}
**address, telephone, email, services, history, ordinance schedule, session schedule, temple closure schedule**
function assembleData(x) {

	console.log(templeInfo.temples[x]);
	
	let townInfo = "<h2>"+weatherInfo.temples[x].name+"</h2>";
	templeInfo += "<i>"+weatherInfo.temples[x].motto+"</i>";
	templeInfo += "<p>Year Opened: "+weatherInfo.temples[x].yearFounded+"</p>";
	templeInfo += "<p>Current Population: "+weatherInfo.temples[x].currentPopulation+"</p>";
	templeInfo += "<p>Rainfall: "+weatherInfo.temples[x].averageRainfall+"</p>";
         
	return templeInfo;
}
