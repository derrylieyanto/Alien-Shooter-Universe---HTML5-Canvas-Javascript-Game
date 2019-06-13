function Input (){
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
}

Input.prototype.set = function(event, bool){
    switch (event.keyCode) {
        case 65:      //a
        this.left = bool;
        break;
        case 68:      //d
        this.right = bool;
        break;
        case 87:      //w
        this.up = bool;
        break;
        case 83:      //s
        this.down = bool;
        break;
        }
};