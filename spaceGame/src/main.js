
const background = new Background()
const player = new Player()
const obstacle = new Obstacle
const obstacleArray = []

function preload (){
background.preload()
player.preload()
obstacle.preload()
}

function setup (){
    createCanvas(800, 600);
    frameRate(60);
}

function draw (){
    clear ()
background.draw()
player.draw()
obstacle.draw()
}




