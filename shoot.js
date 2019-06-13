function Ball (radius, color) {
	if (radius === undefined) { radius = 40; }
	if (color === undefined) { color = "#ff0000"; }
	this.x = 0;
	this.y = 0;
	this.dx = 0;
	this.dy = 0;
	this.jenis = 0;
	this.radius = radius;
	this.vx = 0;
	this.vy = 0;
	this.rotation = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	this.color = utils.parseColor(color);
	this.lineWidth = 1;
	this.img = new Image();
	this.img2 = new Image();
	this.img.src = "images/projectile.png";
	this.img2.src = "images/beam.png";
  }

Ball.prototype.draw = function (context) {

	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation - 30);
	switch(this.jenis){
		case 1: context.drawImage(this.img, (this.radius) / 2 * (-1), (this.radius) / 2 * (-1), this.radius, this.radius);
				break;
		case 2: context.drawImage(this.img2, (this.radius) / 2 * (-1), (this.radius) / 2 * (-1), this.radius, this.radius + 10);
				break;
	}
	context.restore();

	/*
	context.save();
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
  
  Ball.prototype.getBounds = function () {
	return {
	  x: this.x - this.radius,
	  y: this.y - this.radius,
	  width: this.radius * 2,
	  height: this.radius * 2
	};
  };

  Ball.prototype.update = function (){
			this.x += this.vx;
			this.y += this.vy;
			if(this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height)
				return false;
			return true;

  }