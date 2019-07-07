let temp = parseInt(document.getElementById("currentTemp").innerHTML);

let chill = parseInt(document.getElementById("windSpeed").innerHTML);

var result = 36.74 + (0.6215 * temp) - (35.75 * (chill * 0.16 + (0.4275 * temp * (chill * 0.16))));

document.getElementById("wchill").innerHTML = result;