class Ground
{
    constructor(x,y,height,width){
        var option = {
            'isStatic' : true
        }
        this.body = Bodies.rect(x,y,height,width);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        pop();
    }
}