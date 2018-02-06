// var spot = {
// x:100,
// y:50
// };
// var col = {
// r:255,
// g:0,
// b:0
// };
// function setup(){
//     createCanvas(600, 400);
//     background(0);
// }
// function draw (){
//     spot.x= random (0,width);
//     spot.y= random (0,height);
//     col.r= random (100,255);
//     col.g=0;
//     col.b= (100,190);
// fill (col.r, col.g, col.b,100);
// ellipse(spot.x, spot.y, 24, 24)
// }





//this creates the paint option//

// function setup(){
//     createCanvas(600,400)
//     background (250,250,100)
// }
// function draw (){
// noStroke();
// fill (250,200,200,50);
// ellipse (mouseX, mouseY, 25, 25);
// if (mouseX> 100) {
//     fill (255,0,0)
// }
// }
// function mousePressed(){
//     background(250,250,100);
// }





// This is for final//
function setup (){
    createCanvas(1800, 1000);
}

function draw() {
background(0);
stroke(255);
strokeWeight(4);
noFill();

if (mouseX <750)   {
    fill (random(0, 255), random(0, 255), random(0, 255));
    ellipse(500, 250, 150, 150)
}  
if (mouseX > 750) {
    // fill(random(0, 255), random(0, 255), random(0, 255));
    // ellipse(900, 500, 500, 500);
        fill (random(0, 255), random(0, 255), random(0, 255));
        ellipse (mouseX, mouseY, 150, 150);
        }       

if (500<mouseX<900) { var i=0;
    for (var i=0; i<=width; i+=50) {
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(i,800, 25, 25) }
    }
}

function mousePressed(){
    background(250,250,100);
}








//this is for for loops//

// function setup () {
//     createCanvas(600, 400)

// }

// function draw (){
// background (0);
// strokeWeight (4);
// stroke (255);

// var x=0;

// while (x<=width){
//     fill (0,200,255);
//     ellipse(x, 200, 25, 25);
//     x=x+50;    
// }

// for (var x=0; x<=width; x+=50) {
//     fill(random(0, 255), random(0, 255), random(0, 255));
//     ellipse(x,300, 25, 25); 
// }
// }