/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). 
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. 
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,
  BMI: function () {
    this.calculation = this.weight / (this.height * this.height);
    return this.calculation;
  },
};

const john = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,
  BMI: function () {
    this.calculation = this.weight / (this.height * this.height);
    return this.calculation;
  },
};

if (mark.BMI() > john.BMI()) {
  console.log(
    `Mark Miller's BMI (${mark.BMI()}) is higher than John Smith's (${john.BMI()})!`
  );
} else {
  console.log(
    `John Smith's BMI (${john.BMI()}) is higher than Mark Miller's (${mark.BMI()})!`
  );
}
