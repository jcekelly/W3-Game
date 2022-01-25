class StartEnd {

    constructor (){
        this.startX = (Math.random() * 500)-100
        this.startY = 30
        this.endX = (Math.random() * 500)-100
        this.endY = 730
    }

    preload(){
        this.startPlanetImage = loadImage('../assets/Moon.gif')
        this.endPlanetImage = loadImage ('../assets/base3n.png')
    }
    draw (){
        image(this.startPlanetImage,this.startY,this.startX,50,50)
        image (this.endPlanetImage,this.endY,this.endX,50,50)

        if(dist(this.endY,this.endX,player.x,player.y) < 20){
            console.log('SUCCESS')
            player.resetPlayerWin();
        }
    }

  
}