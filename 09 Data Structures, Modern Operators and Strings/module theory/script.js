"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
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
  },
  order: function (starterIndex, mainIndex) {
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

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];

restaurant.orderPasta(...ingredients);

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

const { name, openingHours, categories } = restaurant;
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
console.log(openTime);

// Spread Operator, building a new array from the scratch

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

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

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

// Short Circuiting OR
restaurant.numGuests = 0;

const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// Short Circuiting AND
restaurant.orderPizza && restaurant.orderPizza("cheese");

// Nulish Coalescing Operator ??
//Null and underfind (NOT 0 or "")

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
