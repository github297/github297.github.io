const requestObject = new XMLHttpRequest();

const requestURL = "https://github.com/github297/github297.github.io/blob/master/Temple%20Inn%20%26%20Suites/scripts/temple.json";

let templeInfo;
requestObject.open("GET", requestURL);
requestObject.send();
requestObject.onload = function() {
    templeInfo = JSON.parse(requestObject.responseText);
    console.log(templeInfo);

	document.getElementById("washington").innerHTML = assembleData(1);
	document.getElementById("philly").innerHTML = assembleData(2);
	document.getElementById("boston").innerHTML = assembleData(3);
	document.getElementById("newyork").innerHTML = assembleData(4);
}

function assembleData(x) {

	console.log(templeInfo.temples[x]);
	
	let templeInfo = "<h2>"+templeInfo.temples[x].name+"</h2>";
	templeInfo += "<p>Year Dedicated: "+templeInfo.temples[x].yearDedicated+"</p>";
	templeInfo += "<p>Address: "+templeInfo.temples[x].address+"</p>";
	templeInfo += "<p>Telephone: "+templeInfo.temples[x].telephone+"</p>";
	templeInfo += "<p>Service: "+templeInfo.temples[x].service+"</p>"; 
	templeInfo += "<p>Schedule: "+templeInfo.teamples[x].schedule+"</p>";

	return templeInfo;
}
