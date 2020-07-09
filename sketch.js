const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bin1, bn2, bin3, groundObject, paper;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    bin1 = new Bin(800,520,20,100)
    bin2 = new Bin(910,560,200,20)
    bin3 = new Bin(1000,520,20,100)
    groundObject = new Ground(600,580,1200,20)
    paper = new Ball(100,200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    bin1.display();
    bin2.display();
    bin3.display();
    
    paper.display();
    groundObject.display();

    
}

function keyPressed() {
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body, paper.body.position, {x: 65, y: -85})
    }
}