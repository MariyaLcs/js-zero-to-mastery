"use strict";
//******Default Parameters
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
// ES5
// numPassengers = numPassengers || 1;
// price = price || 199;
// const booking = { flightNum, numPassengers, price };
// console.log(booking);
// bookings.push(booking);
// };

//createBooking("LH124", undefined, 50);

//******Values vs. References
// const flight = "LH123";
// const jonas = {
//   name: "jonas",
//   passport: 202020,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 202020) {
//     alert("Checked in ");
//   } else {
//     alert("Wrong passport!");
//   }
// };
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

//******Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

//create a high-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer("Javascript is the best!", upperFirstWord);
// transformer("Javascript is the best!", oneWord);

//******Functions Returning Functions

// const greet = (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
//same code
//const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const greeterHey = greet("HOHOHO ");

// greeterHey("Jonas");
// greet("hi ")("Martha");

//******The Call and Apply Methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  booking: [],
  //same book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, "Santa");
lufthansa.book(635, "Rico1");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  booking: [],
};

const book = lufthansa.book;

//Call Method
book.call(eurowings, 23, "Rico2");
// console.log(eurowings);

book.call(lufthansa, 239, "Rico3");
console.log(lufthansa);

//Apply Method
const flightData = [583, "Rico3"];
book.apply(eurowings, flightData);
// console.log(eurowings);

//same with call -> prefer this way
book.call(eurowings, ...flightData);
console.log(eurowings);
