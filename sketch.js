//Using 3 objects of Matter.js
//rename Engine,world and bodies so that its easier to code
//creating Alias
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);

    //create engine, so world will also be created
    engine = Engine.create();
    world = engine.world;


    //2.to keep the ground static at one place we add this option
    var ground_options ={
        isStatic: true
    }

    //1.This rectangular ground belongs to Bodies of Physics engine
    //that follows the rules of physics world
    ground = Bodies.rectangle(200,390,200,20,ground_options);

    //3.add the already made ground to the world of our game
    World.add(world,ground);

    //2. Adding restitution or bounciness to the ball as an option
    var ball_options ={
        restitution: 1.0
    }


    //1. create a ball body of the shape circle
    ball = Bodies.circle(200,100,20, ball_options);

    //3. Add the ball in the world
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);

    //With each run the engine will be update
    Engine.update(engine);

    //to keep the rectangle to center
    rectMode(CENTER);

    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}