String.prototype.isEmail = function(){
	var result = false;
	if (this) {
	    result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this);
	}
	return result;
}

