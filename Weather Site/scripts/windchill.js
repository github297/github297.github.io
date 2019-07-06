function windChill()
{
    var temp = 36;
    var chill = 87;
    var result = 36.74 + 0.6215 temp - 35.75 chill^0.16 + 0.4275 temp chill^0.16;

    document.getElementById("wchill").innerHTML = result;