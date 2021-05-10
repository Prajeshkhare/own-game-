class Hero {
    constructor(x,y){
        var option = {
        isStatic : true 
        }
        this.body = Bodies.rectangle(x,y,250,400,option);
        this.width = 250;
        this.height = 400;
        this.image = loadImage("Js/Farmer.png");
        World.add(world,this.body);
        

    }


    display () {
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}

