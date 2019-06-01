function currentDate()
{
    var d = new Date();
    var n = new Day();
    var m = new Month();
    var y = new Year();

    var c = d.getDay() + ", " + d.getDate() + d.getMonth() + d.getFullYear();
    document.getElementById("date").innerHTML = c;
}