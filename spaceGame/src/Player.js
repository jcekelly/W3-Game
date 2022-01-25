class Player {

    constructor(){
        this.x = 300 
        this.y = 250
    }

    preload (){
        this.playerImage = loadImage('../assets/surt6.png')
    }

    draw (){
        image(this.playerImage,this.x,this.y,80,60)

        if (keyIsDown(39)) {
            this.moveRight()
          } else if (keyIsDown (37)) {
            this.moveLeft()
          } else if (keyIsDown (40)) {
            this.moveDown()
          } else if (keyIsDown (38)){
            this.moveUp()
          } 
          
          this.x = constrain(this.x,0,700)
          this.y = constrain(this.y,0,460)
          
    }

    moveRight(){
        this.x +=8
      }
      moveLeft(){
        this.x -=8
      }
      moveUp(){
        this.y -=8
      }
      moveDown(){
        this.y +=8
      }

}
