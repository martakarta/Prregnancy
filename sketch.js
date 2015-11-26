var data;
var w = 1280;
var h = 800;

function preload(){
data = loadJSON("pregnancy.json");
}

function setup(){
createCanvas(w,h);
background (0);
	var preg = data.preg; //prende le info dalla lista json

for(var i = 0; i < preg.length; i++){
	var week = data.preg[i].week; //prende tutti i valori week della lista
	var m = map(week, 0 , 40, 0+50, w-50); //adatta le proporzioni sul canvas

fill (0,130,255,200);
ellipse (m, 90 , 30, 30);
									}
				}

function draw(){
}

function mousePressed() {
background (0);

fill (0,130,255,200);
text ("inches",160, h/2);

fill (250,0,0,110);
text ("pounds",160, h/2 + 30);

	var preg = data.preg; //prende le info dalla lista json
for(var i = 0; i < preg.length; i++){
	var week = data.preg[i].week; //prende tutti i valori week della lista
	var m = map(week, 0 , 40, 0+50, w-50); //adatta le proporzioni sul canvas
fill (0,130,255,200);
ellipse (m, 90 , 30, 30);
fill (255,130);
text(data.preg[i].week, m, 90);
									}
	
	for(var i = 0; i < preg.length; i++){
	var week = data.preg[i].week; //prende tutti i valori week della lista
	var m = map(week, 0 , 40, 0+50, w-50); //adatta le proporzioni sul canvas


	var d = dist(mouseX, mouseY, m, 90);
  if (d < 100) {
  	var size = data.preg[i].inches; //prende i valori inches dalla lista
	var sizem = map(size, 0, 21, 0, 600); //adatta i valori inches sul canvas
	noStroke();
	fill (0,130,255,200);
ellipse (w/2, h/2, sizem, sizem);

inc = data.preg[i].inches;
fill (0,130,255,200);
text(inc, 100, h/2);

po = data.preg[i].pounds;
fill (250,0,0,110);
text(po, 100, h/2 + 30);

var peso = data.preg[i].pounds;
var pesom = map(peso, 0, 8, 0, 600);
	noStroke();
	fill (250,0,0,110);
ellipse (w/2, h/2, pesom, pesom);

									}
  				}
						}
