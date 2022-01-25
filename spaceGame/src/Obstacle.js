class Obstacle {
    
   
    constructor(){
        this.nebulaX = (Math.random() * 560)+100
        this.nebulaY = 480
        this.greenX = (Math.random() * 560)+100
        this.greenY = 480
        this.phantomX = (Math.random() * 560)+100
        this.phantomY = 480
        this.vortexX = (Math.random() * 560)+100
        this.vortexY = 480
        this.sunburstX = (Math.random() * 560)+100
        this.sunburstY = 480 
        this.width = 40
        this.height = 40
        this.widthPlus = 80
        this.heightPlus = 80
        this.nebulaSpeed = -3
        this.greenSpeed = -3
        this.phantomSpeed = -3
        this.vortexSpeed = -3
        this.sunburstSpeed = -3
    }

    preload(){
        this.obstacleImageNebula = loadImage('../assets/nebula-sprite.gif')
        this.obstacleImageGreen = loadImage('../assets/green-sprite.gif')
        this.obstacleImagePhantom = loadImage('../assets/phantom sprite.gif')
        this.obstacleImageVortex = loadImage('../assets/vortex.gif')
        this.obstacleImageSunburst = loadImage('../assets/sunburst.gif')
    
    }
    draw(){
        image(this.obstacleImageNebula,this.nebulaX,this.nebulaY,this.widthPlus,this.heightPlus)
        image(this.obstacleImageGreen,this.greenX,this.greenY,this.widthPlus,this.heightPlus)
        image(this.obstacleImagePhantom,this.phantomX,this.phantomY,this.widthPlus,this.heightPlus)
        image(this.obstacleImageVortex,this.vortexX,this.vortexY,this.widthPlus,this.heightPlus)
        image(this.obstacleImageSunburst,this.sunburstX,this.sunburstY,this.widthPlus,this.heightPlus)

       
        
        if (this.nebulaY < 5){
            this.nebulaSpeed = random(1,10);
        } else if (this.nebulaY > 479){
            this.nebulaSpeed = random(-10,-1);
        }

        if (this.greenY < 5){
            this.greenSpeed = random(1,10);
        } else if (this.greenY > 479){
            this.greenSpeed = random(-10,1);
        }

        if (this.phantomY < 5){
            this.phantomSpeed = random(1,10);
        } else if (this.phantomY > 479){
            this.phantomSpeed = random(-10,-1)
        }


        if (this.vortexY < 5){
            this.vortexSpeed = random(1,10);
        } else if (this.vortexY > 479){
            this.vortexSpeed = random(-10,-1)
        }

        if (this.sunburstY < 5){
            this.sunburstSpeed = random(1,10);
        } else if (this.sunburstY > 479){
            this.sunburstSpeed = random(-10,-1)
        }


        this.nebulaY = this.nebulaY + this.nebulaSpeed
        this.greenY = this.greenY + this.greenSpeed
        this.phantomY = this.phantomY + this.phantomSpeed
        this.vortexY = this.vortexY + this.vortexSpeed
        this.sunburstY = this.sunburstY + this.sunburstSpeed



       


}
}

// TO DO LIST 
// add new obstacles
// add collision
// add planet/base
// Add lose / win scenario 
// add Music ? 





// to add new obstcle 
// - add preload 
// - add draw 
// - give it X,Y,Speed 
// - give it conditional + speed stuff 



// WIN/LOSE
// deliver to end point = + 1 point 
// hit by obstacle = reset to start point 
// after delivery, go back to