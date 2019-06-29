//EXAMPLE BY BROTHER CHENEY

//create an object
const requestObject = new XMLHttpRequest();

//enter the path to the local json file
const requestURL = "townData.json";

//Now we will create a global container called myWeatherInfo which can be used anywhere in the script.
let weatherInfo;
requestObject.open("GET", requestURL);
requestObject.send();
requestObject.onload = function() {
    weatherInfo = JSON.parse(requestObject.responseText);
    console.log(weatherInfo);

	//make a call to the function below for each town and send the array number of the needed town. Ppon returning insert it as html inside the id for each city
	document.getElementById("fish").innerHTML = assembleData(1);
	document.getElementById("soda").innerHTML = assembleData(4);
	document.getElementById("preston").innerHTML = assembleData(5);
}
//This is the section I am stuck on. Should I replace x with 1, 4, or 5?
//Do I repeat this section for each town with it's corresponding number instead of x?
function assembleData(x) {
	//make sure the town data is being loaded for the variale x
	console.log(myWeatherInfo.towns[x]);
	
	//Build the html as a javascript variable and include the html tags
	let townInfo = "<h3>"+weatherInfo.towns[x].name+"</h3>";
	townInfo += "<i>"+weatherInfo.towns[x].motto+"</i>";
	townInfo += "<p>Year founded: "+weatherInfo.towns[x].yearFounded+"</p>";
	townInfo += "<p>Current Population: "+weatherInfo.towns[x].currentPopulation+"</p>";
	townInfo += "<p>Rainfall: "+weatherInfo.towns[x].averageRainfall+"</p>";
         
	//return the variable that now has all the town information
	return townInfo;
}

let townNames = jsonObj["towns"][1],["towns"][4],["towns"][5];
console.log(townNames);