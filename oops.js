// oject oriented js
// object literals : object is simply a key value pair specially storing variables and functions together in one container
// object creation
let bioData = {
  myName: { firstName: "Raghvan", lastName: "Sharma" }, // addition of another object in a object (nested obj)
  myAge: 10,
  getData() {
    console.log(
      `my name is ${bioData.myName.firstName} and my age is ${bioData.myAge}`
    ); // retrieving nested obj
  },
};
bioData.getData();

// This obj: it contain the current context, however it can have multiple value depending on where it's placed
// that is in independent state or in any function it refers to window global obj, but if this is used within a obj (but not with arrow func)it refers to that particular only // imp   this obj will not work with arrow function

// destructuring
// array destructuring :- destructuring way to fetch data from array is called array destructuring
// normal way
const myBio = ["vipin", "vihari", 24];
let myFirstName = myBio[0];
let myLastName = myBio[1];
let myAge = myBio[2];
console.log(myFirstName);
// but if there is more data in array to fetch it will be tremendous , here comes destructuring

// array destructuring   //just add variables in array to fetch any field from myBio
// let [myfName, mylName, mAge] = myBio;    // imp : these variables stores array value index-wise only so be careful
// console.log(myfName);
// we can modify our values too by destructuring ex

let [myfName, mylName, mAge, myDegree = "MCA"] = myBio;
console.log(myDegree);

// object Destructuring 🌏

const myIntro = {
  myFirstName: "Agam",
  myLastName: "das",
  myAge: 24,
};
console.log(myAge); // simple way to fetch data from obj  but again if there is more data it will difficult to either create more variables to store data or display all them one by one , both are useless
// so we use object destructuring  just create group of variables to store object data in one line

let { myFname, myLname, age, destination = "golok" } = myIntro; // here too we can add/modify value like arr destruct
console.log(destination);

// object properties
// we can use dynamic properties  by using square brackets , it also allow performing expressions
let myName = "Prantap";
const myId = {
  [myName]: "radhe-radhe",
  [17 + 6]: "is my age",
};

console.log(myId);

// if key and values are same no need to explicit both only one is sufficient
let myN = "Avayay";
let myA = 24;
const myProfile = { myN, myA };
console.log(myProfile);

// spread operator(...arr)    const unionArr = [...existingArrayName , additional value1 , additional value2] will create a new array with existing array's values and add our value 1 and value 2 to new array for ex
const col = ["yellow", "red", "saffron", "white"];
const myCol = ["yellow", "red", "saffron", "white", "gray", "golden"]; //normal way to extend an existing array
const myFavCols = [...col, "maroon", "violet"]; // extending an array using spread op
console.log(myFavCols);
// now we have rest operators(es2018) which works with obj too ,but spread op works with arr only

// includes method to check whether a value exist in array or not   it returns boolean value
const isPresent = col.includes("yellow");
console.log(isPresent);
console.log(col.includes("green"));

// ** operator(exponential operator) uses first value as base and second as pow
console.log(2 ** 4);

// string padding padStart(Num) and padEnd(num)
const myMsg = "myName is Aniruddha";
console.log(myMsg.padStart(30));
console.log(myMsg.padEnd(30)); // these will appear as 👇
//            myName is Aniruddha
// myName is Aniruddha

// *object.values   :- performs like loop on object to insert values only(it returns in array form)
const person = { fName: "manu", age: 97 };
console.log(Object.values(person)); // will produce  ['manu', 97 ]  that is values only

// *object.entries :- it differs only in a way from object.values is that it returns both key & value in arr
let arrObj = Object.entries(person);
console.log(Object.entries(person)); // will produce [ [ 'fName', 'manu' ], [ 'age', 97 ] ]

// apart from reduce op now we have array.flat op which is used to flatten an array without any accum as reduce
// console.log(arrayName.flat());  but it flats only one lavel by default, so we need pass num(no of levels of array  we requied to flatten ) as argument in flat, however we can pass infinity if level of array 's not known
// console.log(arrName.flat(3));    here we can pass any no to flat label of array
// console.log(arrName.flat(Infinity));
// array.prototype.{flat, flatMap}

// object.formEntries  : used to reconvert value in obj returned by object.entries [since it returns values in arr]
console.log(Object.fromEntries(arrObj)); // will change to { fName: 'manu', age: 97 }

// trimStart and trimEnd are opp to padStart and padEnd means it del the spaces before and after str
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991  is max num to perform after this we have to use bigInt
const newNum = 9007199254740991n + 12n; // just add n in last of num to make it bigInt type
console.log (newNum);
console.log(typeof(newNum));  // will return bigint

// ES 2014 introduces 'use strict' which prohibits to coding in loosely way
