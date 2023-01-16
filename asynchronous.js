// hoisting in JS: hoisting in js is a mechanism where declaration of varibales and functions are moved to the top
// but let and const don't allow hoisting anymore

// lexical scoping : inner func can access their parent func's variable but vice versa is not true , it is called lexical scoping

// closure :  A closure in js is the combination of a function, enclosed with references to its surrounding state (lexical env), in other word a closure give you access to an outer function's scope from an inner function

// when a function is created in JS , closure is created for ex

const outerFun = (a) => {
  let b = 10;
  const innerFun = () => {
    let sum = a + b;
    console.log(`the sum of two no is ${sum}`); //output will "the sum of two no is 15" and it's due to closure
  };
  innerFun();
};
outerFun(5);

// synchronous (first work finishes only then second task will start execution  ,even if first task is lengthy and second is very short , while ashynchronous is what executes simultaneously

// function currying is a technique   of evaluating function with multiple argument into sequence of function with single argument  ex sum(3)(5)(8);

function sum(num1) {
  return function (num2) {
    return function (num3) {
      console.log(num1 + num2 + num3);
    };
  };
}
sum(3)(5)(8);

// or through fat arrow func, function currying can be written shortly like 👇

const sum1 = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
sum1(3)(5)(8);
// callback hell

setTimeout(() => {
  console.log(`1️⃣ work is done`);
  setTimeout(() => {
    console.log("2️⃣ work is done");
    setTimeout(() => {
      console.log(`3️⃣ work is done`);
      setTimeout(() => {
        console.log("4️⃣ work is done");
        setTimeout(() => {
          console.log("5️⃣ work is done ");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
