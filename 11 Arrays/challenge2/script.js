/*Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
*/

/*2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)*/

/*3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)*/

/*4. Run the function for both test datasets*/

/*Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/
const calcAverageHumanAge = function (arr) {
  const humanAge = arr.map((el) => (el <= 2 ? el * 2 : 16 + el * 4));
  console.log(humanAge);
  const adultsDog = humanAge.filter((el) => el >= 18);
  console.log(adultsDog);
  const average =
    adultsDog.reduce((acc, cur) => acc + cur, 0) / adultsDog.length;
  console.log(average);
  //***Same with the use-case
  const average2 = adultsDog.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  console.log(average2);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
