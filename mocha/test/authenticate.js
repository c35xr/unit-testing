var expect = require("chai").expect;
var login = require("../app/login");

describe("Authentication users", function(){
	describe("Login users", function(){
		it("validate credentials", function(){
			var email = "cesar@coffeebit.us";
			var password = "123456";

			var response = login.singin(email, password);
			expect(response).to.equal(true);
		});

		it("validate email", function(){
			var email = "cesar@coffeebit.us";
			var response = login.validateEmail(email);
			expect(response).to.equal(true);
		});

		it("validate password lenght", function(){
			var password = "123456";
			var response = login.validatePassword(password);
			expect(response).to.equal(true);
		});

		it("validate credentials", function(){
			var email = "cesar@coffeebit.us";
			var password = "123456";
			var name = "Cesar";

			var response = login.singup(name, email, password);
			expect(response).to.equal(true);
		});

		it("validate name lenght", function(){
			var name = "Lia";
			var response = login.validateName(name);
			expect(response).to.equal(true);
		});

	});
});