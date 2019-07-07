let tempF = parseInt(document.getElementById("maxTemp").innerHTML);

let speed = parseInt(document.getElementById("windSpeed").innerHTML);

var formula = 35.74 + 0.6215 * tempF + (0.4275 * tempF - 35.75) * Math.pow(speed, 0.16); 

document.getElementById("wchill").innerHTML = formula;