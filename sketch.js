//module aliases
var Engine = Matter.Engine,
    // Render = Matter.Render;
    World = Matter.World;
    Bodies = Matter.Bodies;

//create an engine
var engine;
// Engine.create();
var world;
var box1;

var boxes = [];
var option = {
    isStatic: true
}
const width = window.innerWidth;
const height = window.innerHeight;
function setup () {
    createCanvas(width - width/4, height - height/4);
    engine = Engine.create();
    world = engine.world;
    
    ground = Bodies.rectangle(200, height/2, width, 10, option);
    Engine.run(engine);
    World.add(world, ground)
   
   
}

function mouseDragged() {
    boxes.push(new Box(mouseX, mouseY, 20, 20));
}

function draw () {
    background(100);
    fill(255,0,255);
    noStroke();
    ellipse(width/2, height/2, width, 100);
    for (var i = 0; i < boxes.length; i++){
        stroke(50);
        fill(255);
        boxes[i].show();
    }
  

}