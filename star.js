class Star{
    constructor(x, y){
        this.x = Math.round(random(50, 450));
        this.y = Math.round(random(50, 450));
        this.width = 20;
        this.height = 20;
        this.image = loadImage("star.png")
    }
    display(){
        
        imageMode(CENTER);
        image(this.image, this.x, this.y, 40, 40);

        
        
    }

}