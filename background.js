function Background(){
    this.x = -200;
    this.y = -200;
    this.vx = 0;
    this.vy = 0;
    this.w = 1280;
    this.h = 750;
    this.bg = new Image();
    this.bg.src = "images/bg.png";
    
}

Background.prototype.draw = function (context) {
    context.drawImage(this.bg, this.x , this.y , this.w , this.h);
  };

Background.prototype.update = function (input){
    this.vx = 0;
    this.vy = 0;
    if(input.left){this.vx = 1;}
    if(input.right){this.vx = -1;}
    if(input.up){this.vy = 1;}
    if(input.down){this.vy = -1;}

    if(this.x >= -200 && this.x <= 0){
        this.x += this.vx;
 
    }else if(this.x > 0){
        this.x = 0;
    }else if(this.x < -200){
        this.x = -200;
    }
    
    if(this.y >= -200 && this.y <= 0){
        this.y += this.vy;

    }else if(this.y > 0){
        this.y = 0;
    }else if(this.y < -200){
        this.y = -200;
    }
  }