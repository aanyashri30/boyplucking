class Mangoes {
    constructor(x, y,){
      this.image = loadImage("sprites/mangoed.png");
     // this.Visibility = 255;
    }
  display()
  {
   // var pos =this.body.position;
    
   // translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(4);
    imageMode(CENTER);
    image(this.image,0,this.height/2,this.width,this.height);
    
  }
}