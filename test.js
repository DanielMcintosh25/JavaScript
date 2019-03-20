console.log("Apple Iphone")
/*
let mouse =124134;
const bottle = 110;
console.log(mouse+bottle);
(adding a const and a let together)
*/
/*
const bag = 725;
console.log(bag);
const bag = 600;
(changing the value of bag (error))
*/
/*
let fort = 200;
fort = 350;
console.log(fort);
 changes the value of fort always chooses last value
 */

/*
let = x;
console.log(x);
what the defult value is, if nothing is assigned
*/

/*
const name = 'Daniel';
console.log (`Hello ${name}`);
writing hello name
 */

/*
console.log(true===1<3);
^ states the equation as true

let addition = [10, 20, 30, 40, 50];
console.log(addition);
console.log(addition.length);
states how many values there are in 'addition'
*/
/*
const sports = {
        favSport:"Football",
        secSport:"Basketball",
        thirdSport:"Rugby"
}
^ shows what i have written in terminal

console.log(sports);
console.log(sports.favSport);
^ shows a specific listing
*/
let name = 'DanielMcIntosh';
console.log(name);

let number = 10;
let times = 5;
console.log(number*times);

let fives = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
console.log(fives);
console.log(fives.length);

let drinks = {
    one:"water",
    two:"energy drink",
    three:"juice"
}
console.log(drinks);
console.log(drinks.two);

/*
const bottle = (y) => {
    console.log(20 * y);
}
bottle(60);
to define the value of y i must include (bottle 60) down the bottom afte closing curley braces as bottle = y*/

const danger = (smile) => {
    console.log(100 * smile);
}
danger(20)


//instead of console.log i can use 
let book = 'learning';

const adding = (bed, sheets) => {
        console.log(bed * sheets);
}
adding(800, 5)



let cord = 'charger';
let samsung = 'galaxy';

const toUpper = (text) => {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}
toUpper(cord);
toUpper(samsung);
// creating uppercase

