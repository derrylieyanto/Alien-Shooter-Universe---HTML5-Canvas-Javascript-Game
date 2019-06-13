function Obs (radius, color) {
	if (radius === undefined) { radius = 40; }
	if (color === undefined) { color = "#ff0000"; }
	this.x = 0;
	this.y = 0;
	this.radius = radius;
	this.vx = 0;
  this.vy = 0;
  this.id = "ball";
	this.rotation = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	this.color = utils.parseColor(color);
  this.lineWidth = 1;
  this.speed = 0;
	this.jenis = 0;
	this.live = 0;
	this.img1 = new Image();
	this.img2 = new Image();
	this.img3 = new Image();
	this.imgShield = new Image();
	this.imgPowerUp = new Image();
	this.img1.src = "images/obstacle1.png";
	this.img2.src = "images/obstacle2.png";
	this.img3.src = "images/obstacle3.png";
	this.imgShield.src = "images/tamengdewa.png";
	this.imgPowerUp.src = "images/powerup.png";
	this.balls = [];
  }
  
  Obs.prototype.draw = function (context) {
		if(this.jenis == 1){
			for (var i = 0; i < this.balls.length; i++){
				this.balls[i].draw(context);
			}
		}
		context.save();
		context.translate(this.x, this.y);
	
		switch(this.jenis){
		case 1: 		context.drawImage(this.img1, (this.radius) / 2 * (-1), (this.radius) / 2 * (-1), this.radius, this.radius);
						break;
		case 2: 		context.drawImage(this.img2, (this.radius) / 2 * (-1), (this.radius) / 2 * (-1), this.radius, this.radius);
						break;
		case 3: 		context.drawImage(this.img3, (this.radius) / 2 * (-1), (this.radius) / 2 * (-1), this.radius, this.radius);
						break;
		case 4:			context.drawImage(this.imgShield, (this.radius) / 2 * (-1), (this.radius) / 2 * (-1), this.radius, this.radius);
						context.strokeStyle = "#0000FF";
						context.scale(this.scaleX, this.scaleY);
						context.lineWidth = this.lineWidth;
						context.beginPath();
						//x, y, radius, start_angle, end_angle, anti-clockwise
						context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
						context.closePath();
						if (this.lineWidth > 0) {
						context.stroke();
						}
						break;
		case 5:			context.drawImage(this.imgPowerUp, (this.radius) / 2 * (-1), (this.radius) / 2 * (-1), this.radius, this.radius);
						context.strokeStyle = "#FFFF00";
						context.scale(this.scaleX, this.scaleY);
						context.lineWidth = this.lineWidth;
						context.beginPath();
						//x, y, radius, start_angle, end_angle, anti-clockwise
						context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
						context.closePath();
						if (this.lineWidth > 0) {
						context.stroke();
						}
						break;
	}

	context.restore();
	
		/*context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.scale(this.scaleX, this.scaleY);
	
	context.lineWidth = this.lineWidth;
	context.fillStyle = this.color;
	context.beginPath();
	//x, y, radius, start_angle, end_angle, anti-clockwise
	context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
	context.closePath();
	context.fill();
	if (this.lineWidth > 0) {
	  context.stroke();
	}
	context.restore();*/
  };
  
  Obs.prototype.getBounds = function () {
	return {
	  x: this.x - this.radius,
	  y: this.y - this.radius,
	  width: this.radius * 2,
	  height: this.radius * 2
	};
  };

  Obs.prototype.update = function (){
    this.x += this.vx;
		this.y += this.vy; 
		if(this.jenis == 1){
			for (var i = 0; i < this.balls.length; i++){
        if(!this.balls[i].update()){
          this.balls.splice(i,1);
        }
  	  }
		}
	};
	
	Obs.prototype.shoot = function (bool,x,y){
		if(bool){
			if(this.jenis == 1){
				var s = new Ball(10,0xff0000);
				var dx = x - this.x,
						dy = y - this.y,
						angle = Math.atan2(dy, dx);
				s.rotation = angle;
				s.x = this.x;
				s.y = this.y;
				s.dx = Math.cos(angle);
				s.dy = Math.sin(angle);
				s.vx = s.dx * 1;
				s.vy = s.dy * 1;
				this.balls.push(s);
			}
	 }
	};


