const assert = require("chai").assert;
const school = require("../app/app");
const vocationalStudy = require("../app/vocationalStudy");

let schol = new school('UNN','university','Enugu','serious university');
let vocational = new vocationalStudy('UNN','university','Enugu','serious university',40);


describe("school", function(){
 	describe("handle input", function(){

	 it("should return", function(){
	 	assert.equal(schol.get(),"This is conventional school");
	 });

	
	});
	describe("handle input", function(){

	 it("should return", function(){
	 	assert.equal(schol.studentSize(2,3,4,5),14);
	 });

	
	});
	describe("handle input", function(){

	 it("should return", function(){
	 	assert.equal(schol.schoolDescription(),"serious university");
	 });

	
	});
	describe("handle input", function(){

	 it("should return", function(){
	 	assert.equal(vocational.adultSchoolDescribe(),"UNN is very beautiful");
	 });
	});
	 describe("handle input", function(){

	 it("should return", function(){
	 	assert.equal(vocational.get(),"This is vocational school");
	 });
    });

});