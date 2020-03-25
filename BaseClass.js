class BaseClass{

  //Determining all the properties that are commomn in all the other classes
    constructor(x, y, width, height, angle) {

      //Defining the common options
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        //Creating the object using Bodies

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        //Loading its image
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        //Determining how to display the object using push,translate ,rotate and displaying the image 
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}