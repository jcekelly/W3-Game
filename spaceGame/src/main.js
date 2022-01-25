
const background = new Background()
const player = new Player()
const obstacle = new Obstacle()
const startEnd = new StartEnd()


function preload (){
background.preload()
player.preload()
obstacle.preload()
startEnd.preload()
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
startEnd.draw()
}



// - win counter
// - add Lose function 
// - loss counter 
// - style the counters 
// - obstacle redraw when player reset 
// - improve planet and staion sprites / postion 
// - add music 