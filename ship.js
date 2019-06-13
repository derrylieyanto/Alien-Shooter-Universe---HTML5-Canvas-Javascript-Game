function Ship () {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.width = 25;
    this.scaleX = 1;
    this.scaleY = 1;
    this.lineWidth = 1;
    this.height = 20;
    this.rotation = 0;
    this.balls = [];
    this.radius = 30;
    this.live = 3;
    this.img = new Image();
    this.shield = false;
    this.powerUp = false;
    this.img.src = "images/plane.png";
    this.soundShoot = new Sound("sound/shootChar.mp3");
    
    this.soundExplode = new Sound("sound/explodeChar.mp3");
  }
  
  Ship.prototype.draw = function (context) {

    for (var i = 0; i < this.balls.length; i++){
        this.balls[i].draw(context);
    }
  
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation - 30);
    context.drawImage(this.img, 45 / 2 * (-1), 55 / 2 * (-1), 45, 55);

    if(this.shield){
      context.strokeStyle = "#0000FF";
      context.scale(this.scaleX, this.scaleY);
      context.lineWidth = this.lineWidth;
      context.beginPath();
      //x, y, radius, start_angle, end_angle, anti-clockwise
      context.arc(0, 0, this.radius + 8, 0, (Math.PI * 2), true);
      context.closePath();
      if (this.lineWidth > 0) {
        context.stroke();
      }
    }

    context.restore();
    
    /*context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.fillStyle = "#00ff00";
    context.lineWidth = 1;
    context.strokeStyle = "#000000";
    context.beginPath();
    context.moveTo(20, 0);
    context.lineTo(-20, 30);
    context.lineTo(-10, 0);
    context.lineTo(-20, -30);
    context.lineTo(20, 0);
      context.stroke();
      context.fill();
    context.restore();*/

    
       

  };



  Ship.prototype.update = function (input,mouseX, mouseY){
    this.vx = 0;
    this.vy = 0;
    if(input.left){this.vx = -3;}
    if(input.right){this.vx = 3;}
    if(input.up){this.vy = -3;}
    if(input.down){this.vy = 3;}
    this.x += this.vx;
    this.y += this.vy;

    if(this.x + 35 > 1080){
      this.x = 1080 - 35;
    }else if(this.x - 35 < 0){
      this.x = 0 + 35;
    }

    if(this.y + this.radius > 550){
      this.y = 550 - this.radius;
    }else if(this.y - this.radius < 0){
      this.y = 0 + this.radius;
    }

    for (var i = 0; i < this.balls.length; i++){
        if(!this.balls[i].update()){
          this.balls.splice(i,1);
        }
    }
  }



  Ship.prototype.shoot = function (bool,mouseX,mouseY) {
    if(bool){
      this.soundShoot.stop();

      var s = new Ball(15,0xff0000);
      var dx = mouseX - this.x,
          dy = mouseY - this.y,
          angle = Math.atan2(dy, dx);
      s.rotation = angle;
      s.x = this.x;
      s.y = this.y;
      s.jenis = 1;
      s.dx = Math.cos(angle);
      s.dy = Math.sin(angle);
      s.vx = s.dx * 10;
      s.vy = s.dy * 10;
      

      if(this.powerUp){
        var f = new Ball(15,0xff0000);
        var dx1 = mouseX - this.x,
            dy1 = mouseY - this.y,
            angle1 = Math.atan2(dy1, dx1) + 0.1;
        f.rotation = angle1;
        f.x = this.x;
        f.y = this.y;
        f.jenis = 1;
        f.dx = Math.cos(angle1);
        f.dy = Math.sin(angle1);
        f.vx = f.dx * 15;
        f.vy = f.dy * 15;
        this.balls.push(f);

        var d = new Ball(15,0xff0000);
        var dx2 = mouseX - this.x,
            dy2 = mouseY - this.y,
            angle2 = Math.atan2(dy2, dx2) - 0.1;
        d.rotation = angle2;
        d.x = this.x;
        d.y = this.y;
        d.jenis = 1;
        d.dx = Math.cos(angle2);
        d.dy = Math.sin(angle2);
        d.vx = d.dx * 15;
        d.vy = d.dy * 15;
        this.balls.push(d);

        s.vx = s.dx * 15;
        s.vy = s.dy * 15;

      }
      this.balls.push(s);
      this.soundShoot.play();
    }
     
  }
  


  
  
  