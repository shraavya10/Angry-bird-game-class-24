class Ground {
  //Determining the properties
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      //Creating the object
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      //Displaying the object using the required position,filling the coloir and creating a rectangle using rect
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };