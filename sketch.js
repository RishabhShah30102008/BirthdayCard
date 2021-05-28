var database;
var position;

var gameState = 0;

var playerCount;

var form, player, game;

var sound,sound1;

var birthdayImg, birthday;

function preload(){

  birthdayImg = loadImage("birthday.jpg");

}

function setup(){

  database = firebase.database();
  console.log(database);

  createCanvas(windowWidth,500);

  game = new Game();
  
  game.getState();
  game.start();

}

function draw(){
  background(birthdayImg);
  
  drawSprites();
  
}