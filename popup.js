
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
document.addEventListener('DOMContentLoaded', function() {
    var yellowButton = document.getElementById('yellow');
    yellowButton.addEventListener('click', function() {
      httpGet("http://127.0.0.1:5000/color?color=yellow");
    }, false);
    var greenButton = document.getElementById('green');
    greenButton.addEventListener('click', function() {
      httpGet("http://127.0.0.1:5000/color?color=green");
    }, false);
    var blueButton = document.getElementById('blue');
    blueButton.addEventListener('click', function() {
      httpGet("http://127.0.0.1:5000/color?color=blue");
    }, false);
  }, false);