//normal function
function sayHiHello() {
  return "Hi";
  return "Hello"; //not returned,once a return statement executed the function gets terminated
}

const out = sayHiHello();
console.log(out);

//generator functions

function* sayHiHelloGenerator() {
  yield "Hi";
  yield "Hello";
  return "World";
}

let output = sayHiHelloGenerator();
console.log(output.next());
console.log(output.next());
console.log(output.next());

//javascript for of loop
for (const iter of output) {
  console.log(iter);
}

//passing value to a generator

function* newGenerator() {
  yield "something";
  const value = yield "Enter a value";
  return value;
}

const op = newGenerator();
console.log(op.next());
console.log(op.next());
console.log(op.next("New value 1"));
console.log(op.next());
