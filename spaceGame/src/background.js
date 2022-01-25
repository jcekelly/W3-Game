class Background {

    preload (){
        this.backgroundImage = loadImage('../assets/space_bcg_4.png')
    }
   draw (){
       image(this.backgroundImage,0,0, 800, 530)
   }
}