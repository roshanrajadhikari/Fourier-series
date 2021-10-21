var angle;
var x,y;
vertices = [];
// var f = [ra(50,255),ra(40,255),ra(60,255)];
function setup() {
  createCanvas(1000,800);
  x = 0;
  y = 0;
  angle = 0;
}

function draw() {
  background(51);
  translate(220, height/2);

  x = 0;
  y = 0;

  for(var i = 0;i<=10;i++){
    var prex = x;
    var prey = y;
    var n = i * 2 + 1;
    var r = 80 * (4/(n*PI));
    x += r * cos(n*angle);
    y += r * sin(n*angle);

    stroke(255,170);
    noFill();
    ellipse(prex,prey,r*2);

    line(prex,prey,x,y);
  }
  vertices.unshift(y);

  translate(300,0);
  beginShape();
  stroke(100,200,150);
  noFill();
  for(var i = 0;i<vertices.length;i++){
    vertex(i,vertices[i])
  }
  endShape();

  //pen
  stroke(255);
  line(x - 300,y,0,vertices[0]);

  //bulb
  fill(100,200,150);
  noStroke();
  ellipse(0,vertices[0],10);


  angle+=0.007;

  if(vertices.length > 500){
    vertices.pop();
  }


}
