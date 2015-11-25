var data;
var w = 400;
var h = 400;

function preload(){
data = loadJSON("pregnancy.json");
// NEVER LOG IN PRELOAD TO THE CONSOLE !!!!!!!!!!!
}
// getting started with p5js
function setup(){
createCanvas(w,h);
background (0);

var x = 0;
	var preg = data.preg;
for(var i = 0; i < preg.length; i++){
	var week = data.preg[i].week;
fill (250,250, 250, 70);
ellipse (10, h/2 , week , week);
console.log (week);
noLoop();
x+=preg;

}

}

function draw(){


// var step = (w/preg.length);
// var size = (data.preg[33].inches) * 10;

// ellipse (step*time, h/2 , size, size);
// console.log (time);

}

// function callback (){

// }
