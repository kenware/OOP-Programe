"use strict";

// school is the main class
module.exports = class school{
    // initiallization
    constructor (name, type, locations,description) {
        this.name = name;
        this.type = type;
        this.locations = locations;
        this.description = description;
    }

     schoolDescription(){
        return `${this.description}`;
    }
    //method
    studentSize(firstYear,secondYear,thirdYear,fourthYear){
      this.firstYear=firstYear;
      this.secondYear=secondYear;
      this.thirdYear=thirdYear;
      this.fourthYear=fourthYear;
      let size=this.firstYear+this.secondYear+this.thirdYear+this.fourthYear;
      return `${size}`;
    }
    //polimorphism
    shout(){
      return "This is conventional school";
    }
    get(){
      return this.shout();
    }
  }
    //inheritance


