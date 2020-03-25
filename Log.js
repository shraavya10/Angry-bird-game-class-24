class Log extends BaseClass{
  //Determining the properties that are necessary for the log
constructor(x,y,height,angle){
super(x,y,20,height,angle);
//loading the log image
this.image=loadImage("sprites/wood2.png");
//Determining its tilt or angle
Matter.Body.setAngle(this.body, angle);



}






}