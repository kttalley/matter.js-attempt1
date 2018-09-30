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
    
    ground = Bodies.rectangle(200, height/2, 500, -10, option);
    Engine.run(engine);
    World.add(world, ground)
   
   
}

function mouseDragged() {
    if(mouseY < height/2){
        boxes.push(new Box(mouseX, mouseY, random(sizeCap/10,sizeCap/50), random(sizeCap/10,sizeCap/50), Box.options ));
    }
}

//ui elements
let sizeCap = 50;
function sizeSlider (x, y, w, btnLabel) {
    rectMode(CENTER);
    fill(25);
    //slider track
    rect(x,y,w,20);
    //slider
    fill(55);
    rect(sizeCap, y, 50,50,10);
    fill(255);
    text(btnLabel, sizeCap + 10, y+ 10, 50, 50);
    rectMode(CORNER);
    if(mouseX > sizeCap - 35 && mouseX < sizeCap + 35){
        if(mouseY > y - 35 && mouseY < y + 35) {
            if(mouseIsPressed){
                
                sizeCap = mouseX;
            }
        }
    }

    

}


function draw () {
    background(100);
    fill(255,0,255);
    noStroke();
    rectMode(CORNER);
    rect(0, ground.position.y-5, 450, 10);
    for (var i = 0; i < boxes.length; i++){
        stroke(50);
        fill(255);
        boxes[i].show();
    }

    //ui
    //size slider
    sizeSlider( width/3 + 20, height - height/3, width - width/3, "Size Range");
    text("click and drag your mouse to create boxes,", 50, 100);

}