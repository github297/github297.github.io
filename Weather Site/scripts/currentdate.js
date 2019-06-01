function currentDate()
{
    var d = new Date();
    var n = new Day();
    var m = new Month();
    var y = new Year();

    var c = d.getDate() + ", " + n.getDay() + m.getMonth() + y.getFullYear();
    document.getElementById("date").innerHTML = c;
}