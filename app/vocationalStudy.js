const school = require('./app.js');

module.exports = class vocationalStudy extends school{

    constructor(name, type, location,description,age){
    super(name, type, location,description);
    this.age=age;
    }

    adultSchoolDescribe(){
      super.schoolDescription(); 
      return `${this.name} is very beautiful`;
    }
    adultschoolrequirement(amount){
      this.amount=amount;
      this.adultSchoolDescribe();
       return`and also about ${this.amount}`;
     }
     shout(){
      return "This is vocational school";
    }
    get(){
     return this.shout();
    }

}