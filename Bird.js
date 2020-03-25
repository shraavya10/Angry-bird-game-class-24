class Bird extends BaseClass{
  //Defining its properties required
  constructor(x,y){
    super(x,y,50,50);
    //Loading the image
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    //Defining the mouseX and mouseY statements to control the movements using the mouse 
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}