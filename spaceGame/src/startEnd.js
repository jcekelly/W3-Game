class StartEnd {

    constructor (){
        this.startX = (Math.random() * 500)-100
        this.endX = (Math.random() * 500)-100
    }

    preload(){
        this.startPlanetImage = loadImage('../assets/Moon.gif')
        this.endPlanetImage = loadImage ('../assets/base3n.png')
    }
    draw (){
        image(this.startPlanetImage,30,this.startX,50,50)
        image (this.endPlanetImage,730,this.endX,50,50)
    }
}