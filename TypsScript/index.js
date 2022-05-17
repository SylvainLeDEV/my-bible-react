"use strict";
// Varriables ---------------------------------------------------------------
let num;
let str;
let bool;
let any;
let array;
let obj;
let nullable;
let numberOrstring;
numberOrstring = 1;
console.log(numberOrstring);
numberOrstring = "1";
console.log(numberOrstring);
num = 1;
str = "1";
bool = true;
// Array---------------------------------------------------------------
let animaux = ["chat", "chien", "oiseau"];
let tableau = [];
let tableau1 = [];
tableau1.push(1);
tableau1.push(true);
console.log(animaux);
let carOnSale = [];
let car1 = {
    id: 1,
    name: "Audi",
    color: "red",
    price: 20000
};
let car2 = {
    id: 2,
    name: "BMW",
    color: "blue",
    price: 30000
};
carOnSale.push(car1, car2);
console.log(carOnSale);
// Class---------------------------------------------------------------
// Class ------------------------------------------------
class Singer {
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
const singer1 = new Singer(1, "Bob");
console.log(singer1);
// Function---------------------------------------------------------------
const sayHello = function (lastName, firstName) {
    console.log("Hello : " + lastName + " " + firstName);
};
sayHello("Doe");
// Enum & Tuples---------------------------------------------------------------
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var houseType;
(function (houseType) {
    houseType[houseType["Bungalow"] = 0] = "Bungalow";
    houseType[houseType["Maison"] = 1] = "Maison";
    houseType[houseType["Appartement"] = 2] = "Appartement";
})(houseType || (houseType = {}));
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
const user1 = {
    id: 1,
    name: "Bob",
    house: [Color.Red, houseType.Bungalow],
    role: Role.Admin
};
console.log(user1);
