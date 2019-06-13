function Timer(){
    this.c = 0;
    this.t;
    this.timer_is_on = 0;
}


Timer.prototype.timedCount = function(){
    document.getElementById("time").innerHTML = this.c;
    this.c = this.c + 1;
    this.t = setTimeout(this.timedCount, 1000);
    console.log(this.c);
};

Timer.prototype.startCount = function(){
    if(!this.timer_is_on) { 
        this.timer_is_on = 1;
        this.timedCount();
    }
};

Timer.prototype.stopCount = function(){
    clearTimeout(this.t);
    this.timer_is_on = 0;
};

