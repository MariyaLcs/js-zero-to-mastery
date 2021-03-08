"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enchanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time} to ${address}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIgredient, ...otherIngredients) {
    console.log(`Nice ${mainIgredient} pizza with ${otherIngredients} topping`);
  },
};

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];

//restaurant.orderPasta(...ingredients);

restaurant.orderDelivery({
  time: "12.30",
  address: "Norley Close",
  mainIndex: 2,
  starterIndex: 2,
});
//Destucturing Arrays

let [first, second] = restaurant.categories;
//Switching variables
[first, second] = [second, first];

const [starter, main] = restaurant.order(2, 0);

// Destucturing Objects

//const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

// Setting default values

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Nested objects

const {
  sat: { open: openTime, close },
} = openingHours;
//console.log(openTime);

// Spread Operator, building a new array from the scratch

const newMenu = [...restaurant.mainMenu, "Gnocci"];
//console.log(newMenu);

// Copy Array

const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrais

const menuAll = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Create a new Object

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Roma";

// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// 1. Destructuring
// Rest Array
const [pizza, , risotto, ...other] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, other);

//Rest Object
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//2. Functions

//restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

// Short Circuiting OR
restaurant.numGuests = 0;

const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// Short Circuiting AND
//restaurant.orderPizza && restaurant.orderPizza("cheese");

// Nulish Coalescing Operator ??
//Null and underfind (NOT 0 or "")

const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//console.log("-------------Looping Arrays---------");

//The for-of Loop
// for (const item of menuAll) console.log(item);
// for (const item of menuAll.entries()) console.log(`${item[0] + 1}:${item[1]}`);
// for (const [i, el] of menuAll.entries()) console.log(`${i + 1}:${el}`);

// Optional chaining ?. istead of error -> underfind

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.mon.open);

// console.log("-------------Looping Objects---------");

//Property NAMES

// const properties = Object.keys(openingHours);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

//Property VALUES

//const values = Object.values(openingHours);

//Entire object
//const entries = Object.entries(openingHours);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// console.log("-------------Looping Set---------");
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef"];
// const staffUnique = new Set(staff);
// console.log(staffUnique);

console.log("-------------MAP---------");
const rest = new Map();
rest
  .set("name", "ROMA")
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(rest.get("name"));
const time = 21;

console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.has("open"));
// rest.delete(name);
console.log(rest.size);
