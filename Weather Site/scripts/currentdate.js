function currentDate()
{
var today = newDate();
var day = String(today.getDate()).padStart(2,'0');
var number = newDate();
var month = String(today.getMonth() +1).padStart(2,'0');
var year = today.getFullYear();   
    
today = day + ', ' + number + month + year;
document.write(today);

}