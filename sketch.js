var x = 100.0; 
var y = 100.0; 
var speed = 1.5; 

function setup(){
    createCanvas(2000, 1000);
}
function draw(){
    // this is just background color
    // background(0); 
    // // fill(255);
   
    fill(random(0, 255), random(0, 255), random(0, 255))
    x += speed; 
    if(x > width){
      x = 0; 
    }

    ellipse(x,100,100,100); 
    ellipse(x, 300, 100, 100);
    ellipse (x,500, 100, 100);
    ellipse (x,700, 100, 100);
    triangle(x, 700, 50, 50, 50,50);
    bezierDetail(50);
bezier(85, 20, 10, 10, 90, 90, 15, 80);

    y += speed
    if(y > height){
        y = 0; 
      }
    rect(100,y,100,100);
    rect(300,y,100,100);
    rect(500,y,100,100);
    rect(700,y,100,100);
    rect(900,y,100,100);
    rect(1100,y,100,100);
    triangle(700, y, 50, 50, 50,50)

    // // this is random movement generator
    // {
    //     rect(mouseX,mouseY,100,100);
    //   }


    

}
