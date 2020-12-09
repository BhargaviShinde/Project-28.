class Mango{
    constructor(x,y,r){
        var options ={
            isStatic:true,
            restution:0,
            friction:1
        }
        
        this.x = x;
        this.y= y;
        this.r = r;
        this.image = loadImage("Plucking mangoes/mango.png");
        this.body = Bodies.circle(this.x,this.y,r,options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("yellow");
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}