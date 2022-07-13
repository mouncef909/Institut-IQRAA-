var x = document.getElementById("service");
var y = document.getElementById("btn-2");
document.getElementById("about").style.display="none";
y.style.display="none";
x.style.display="none";
document.getElementById("ar").style.display="none";
function service(){
    x.style.display="inline";
    document.getElementById("ar").style.display="none";
}
function btn(){
    document.getElementById("para").style.display="none";
    document.getElementById("ar").style.display="inline";
    y.style.display="inline";
    document.getElementById("btn").style.display="none";
}
function home(){
    document.getElementById("about").style.display="none";
    y.style.display="none";
x.style.display="none";
document.getElementById("ar").style.display="none";
}
function about(){
  document.getElementById("about").style.display="inline";
  y.style.display="none";
  x.style.display="none";
  document.getElementById("ar").style.display="none";
}
var pointerX = -1;
var pointerY = -1;
document.onmousemove = function(event) {
	pointerX = event.pageX;
	pointerY = event.pageY;
}
setInterval(pointerCheck, 1000);
function pointerCheck() {
	console.log('Cursor at: '+pointerX+', '+pointerY);
}
