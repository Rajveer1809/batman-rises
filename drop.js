class Drop {
    constructor(x,y){
        var options = {
           restitution : 0.1 , friction: 0.01
        }
       
        this.body = Bodies.circle(x,y,4,options);
        this.radius = 4;
        World.add(world, this.body)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.body.position;
        fill("blue")
        ellipseMode(RADIUS);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
    update(){
        if(this.body.position.y>height){

            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }
}
