// Varriables ---------------------------------------------------------------
let num:number;
let str:string;
let bool:boolean;
let any:any;
let array:Array<any>;
let obj:Object;
let nullable:number|null;

let numberOrstring:number | string;
numberOrstring = 1;
console.log(numberOrstring);
numberOrstring = "1";
console.log(numberOrstring);

num = 1;
str = "1";
bool = true;

// Array---------------------------------------------------------------
let animaux = ["chat", "chien", "oiseau"];
let tableau:string[] = [];
let tableau1:(number | boolean)[] = [];
tableau1.push(1);
tableau1.push(true);

console.log(animaux);

// Object---------------------------------------------------------------
interface Car {
    id:number;
    name:string;
    color?:string;
    price?:number;
}
let carOnSale = [];
let car1:Car = {
    id: 1,
    name: "Audi",
    color: "red",
    price: 20000
};
let car2:Car = {
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
    id:number;
    name:string;
    alive?:boolean;
    constructor(id:number, name:string , alive?:boolean) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
const singer1 = new Singer(1, "Bob");
console.log(singer1);

// Function---------------------------------------------------------------
const sayHello = function (lastName:string, firstName?:string) {
    console.log("Hello : " + lastName + " " + firstName);
}
sayHello( "Doe");

// Enum & Tuples---------------------------------------------------------------
enum Color {
    Red,
    Green,
    Blue
}

enum houseType {
    Bungalow,
    Maison,
    Appartement
}
enum Role {
    Admin,
    User,
    Guest
}
interface User {
    id:number;
    name:string;
    // tuple ---
    house: [color: number,house:number];
    // ---------
    role:Role;
}
const user1:User = {
    id: 1,
    name: "Bob",
    house: [Color.Red, houseType.Bungalow],
    role: Role.Admin
};
console.log(user1);