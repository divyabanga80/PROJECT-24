class BasketSide{

constructor(x,y,width,height,options){
    var options={
        isStatic : true
    }

this.side=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.side);

}
display(){
push();
Fill("brown")
noStroke();
rectMode(CENTER);
rect(this.side.position.x,this.side.position.y,this.width,this.height);
Pop();
}

}







