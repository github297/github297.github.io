var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

var d = new Date();
var date = dayNames[d.getDate()] + "," + " " + d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear();

document.getElementById("output").innerHTML = date;