class Zombie{
    constructor(x,y){
        super(x,y,50,50);
        var option = {
        restiution: 0.5,
        density: 1,
        friction: 0.5
        }
        this.body = Bodies.rectangle(x,y,200,400,option);
        this.width = 200;
        this.height = 400;
        this.image = loadImage("Js/zombies.png");
        World.add(world,this.body);


    }


    display () {
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.width,this.height);
        if(this.body.speed < 3){
            super.display();
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             image(this.image, this.body.position.x, this.body.position.y, 50, 50);
             pop();
           }
    }
    score(){
        if (this.Visiblity<0 && this.Visiblity>-1005){
          score++
        }
    
      }
}