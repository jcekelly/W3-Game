class Obstacle {
    
    constructor(){
        this.nebulaX = 800
        this.nebulaY = (Math.random() * 500) 
        this.greenX = 800
        this.greenY = (Math.random() * 500)
        this.phantomX = 800
        this.phantomY = (Math.random() * 500)
    }

    preload(){
        this.obstacleImageNebula = loadImage('../assets/nebula-sprite.gif')
        this.obstacleImageGreen = loadImage('../assets/green-sprite.gif')
        this.obstacleImagePhantom = loadImage('../assets/phantom sprite.gif')
    
    }
    draw(){
        obstacleArray
        image(this.obstacleImageNebula,this.nebulaX,this.nebulaY,40,40)
        image(this.obstacleImageGreen,this.greenX,this.greenY,40,40)
        image(this.obstacleImagePhantom,this.phantomX,this.phantomY,80,80)

        this.nebulaX = this.nebulaX - 5
        this.greenX = this.greenX - 5
        this.phantomX = this.phantomX - 5


        if (frameCount % 60 === 0){
            obstacleArray.push(new Obstacle)
            console.log(obstacleArray)
         }
        

        // if (this.nebulaX < 400){
        //     this.nebulaX = 800, this.nebulaY = (Math.random() * 500) 
        // }
        // if (this.greenX < 400){
        //     this.greenX = 800, this.greenY = (Math.random() * 500) 
        // }
        // if (this.phantomX < 400){
        //     this.phantomX = 800, this.phantomY = (Math.random() * 500) 
        // }

    

}
}

// TO DO LIST 
// Create new obstacles in a loop 
// add collision 
// Add lose / win scenario 
// add Music ? 