/**
 * Let's build a scifi calcultor using javascript protypal inhritance
 *
 * So basically prototypal inheritance means that every object in javascript has a property called prototype and that prototype property is used to assign methods and properties to the parent object so that other objects can inherit the properties and methods defined on the parent object.
 */

const SciCalculator = function (a, b = null) {
  Object.assign(this, { a, b, array: [] });

  // addition
  this.add = function () {
    return this.a + this.b;
  };
  // substraction
  this.substract = function () {
    if (this.a > this.b) {
      return this.a - this.b;
    }
    return this.b - this.a;
  };
};

SciCalculator.prototype.multiply = function () {
  return this.a * this.b;
};

SciCalculator.prototype.divide = function () {
  return parseFloat((this.a / this.b).toFixed(2));
};

SciCalculator.prototype.power = function (a = this.a, b = this.b) {
  // 5, 5
  if (b === 0) {
    return a;
  }
  return a * SciCalculator.prototype.power(a, b - 1);
};

SciCalculator.prototype.modulus = function () {
  return this.a % this.b;
};

SciCalculator.prototype.checkPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number > 2 && number % 2 === 0) {
    return false;
  }
  const max_divisor = Math.ceil(Math.sqrt(number));
  for (let i = 3; i <= max_divisor; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const instance1 = new SciCalculator(5, 5);

console.log(instance1.add());
console.log(instance1.substract());
console.log(instance1.divide());
console.log(instance1.power());
console.log(instance1.modulus());
for(let i = 0; i < 21; i++) {
  console.log(`${i} : ${instance1.checkPrime(i)}`);
}


console.log('is 9 prime ', instance1.checkPrime(9));
console.log(instance1.__proto__ === SciCalculator.prototype); // so the protype for SciCalculator constructor is not it's own prototype, infact it is used to set properties and methods for the instances.

console.log(instance1.__proto__.__proto__.__proto__); // null
