class Player {

    constructor(){
        this.x = 0 
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
          
          this.x = constrain(this.x,0,720)
          this.y = constrain(this.y,0,460)

        //   if (this.x > 580){
        //       location.reload();
        //   }
          
    }

    moveRight(){
        this.x +=10
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

      resetPlayerLoss(){
          this.x = 0;
          this.y = 250;
          const lossCount = document.getElementById('losses').value -- 
        }

        resetPlayerWin(){
            this.x = 0;
            this.y = 0;
            const winCount = document.getElementById('Wins').value ++
        }
    }
      


