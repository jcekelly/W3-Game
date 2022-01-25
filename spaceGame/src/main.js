
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

function resetPlayerLoss(){
    player.x = 0;
    player.y = 250;
    const lossCount = document.getElementById('losses').value -- ;
    obstacle.nebulaX = (Math.random() * 560)+100
    obstacle.nebulaY = 0
    obstacle.greenX = (Math.random() * 560)+100
    obstacle.greenY = 480
    obstacle.phantomX = (Math.random() * 560)+100
    obstacle.phantomY = 480
    obstacle.vortexX = (Math.random() * 560)+100
    obstacle.vortexY = 480
    obstacle.sunburstX = (Math.random() * 560)+100
    obstacle.sunburstY = 0   
}

function resetPlayerWin(){
    player.x = 0;
    player.y = 250;
    const winCount = document.getElementById('Wins').value ++ ;
    obstacle.nebulaX = (Math.random() * 560)+100
    obstacle.nebulaY = 0
    obstacle.greenX = (Math.random() * 560)+100
    obstacle.greenY = 0
    obstacle.phantomX = (Math.random() * 560)+100
    obstacle.phantomY = 480
    obstacle.vortexX = (Math.random() * 560)+100
    obstacle.vortexY = 0
    obstacle.sunburstX = (Math.random() * 560)+100
    obstacle.sunburstY = 480 
}


function gameOver(){
    location.reload();
}


// - add GAME OVER event for then loss counter = 0 
// - style the counters 
// - obstacle redraw when player reset 
// - improve planet and staion sprites / postion
// - try out diff backgrounds  
// - add music 