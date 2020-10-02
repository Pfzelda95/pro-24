class Ball{
    constructor() {
        var options = {
            density:5.2,
            restitution:0.5,
            friction:2

        }
        this.body = Bodies.circle(100 , 100 ,20 ,options);
        
        
        World.add(world, this.body);

        
      }
      keyPressed(){
        if(keyCode === UP_ARROW){
           Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-10});
           console.log("the ball is shot");
           }
          
      }


      display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(2);
        fill("blue")
       ellipse(0,0,20,20);
       pop();
        
        
        
     }
}