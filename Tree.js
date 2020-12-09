class Tree{
    constructor(x,y){

        this.body = Bodies.rectangle(x,y,270,600);
        this.x = x;
        this.y = y;
        this.image = loadImage("Plucking mangoes/tree.png"); 

    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER)
        image(this.image,650,450,270,600);
        pop();
    }
}