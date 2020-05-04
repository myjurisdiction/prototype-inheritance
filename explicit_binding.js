let object = {
  name: "Abhishek",
};

function _() {
 return this.name
}

// “call” is a method on every function that allows you to invoke the function specifying in what context the function will be invoked.

_(); // in this invocation -> this is refrencing to the global object
console.log(_.call(object)); // in this invocation, this is refrencing to thee object -> object

// apply

const knows = ["Sam", "wilson", "stark"];

function greet(l1, l2, l3) {
  return `${this.name} knows ${l1}, ${l2} and ${l2}`;
}

console.log(greet.call(object, knows[0], knows[1], knows[2]));
console.log(greet.apply(object, knows));

const newFunc = greet.bind(object, knows[0], knows[1], knows[2]);
console.log(newFunc());

object.knows = knows;

object = {
  ...object,
  greet() {
    let response = `${this.name} knows`;
    const result = this.knows.reduce( function (str, lang, i) {
      if (i === this.knows.length - 1) {
        return `${str} & ${lang}.`;
      }

      return `${str} ${lang},`;
    }.bind(object), "");

    return response + result;
  },
};

console.log(object.greet());
