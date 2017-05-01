var prototype = require('../lib/prototype');

exports.singin = function (email, password){
	var email = email;
	var password = password;

	var response1 = this.validateEmail(email);
	var response2 = this.validatePassword(password);

	return response1 === response2;
};

exports.singup = function (name, email, password){
	var email = email;
	var password = password;

	var response1 = this.validateEmail(email);
	var response2 = this.validatePassword(password);
	var response3 = this.validateName(name);

	return (response1 === response2 === response3);
};

exports.validateName  = function(name){
	if (name.length < 3){
		throw "The name is less than 3 characters";
	}
	return true;
}

exports.validateEmail  = function(email){
	if (!email.isEmail()){
		throw "The email is incorrect";
	}
	return true;
}

exports.validatePassword  = function(password){
	if (password.length < 6){
		throw "password length is less than 6 characters";
	}
	return true;
}