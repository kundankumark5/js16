console.log("Jai Shree RadheKrishn");

//  null and undefined   null is deliberately assigned to null while undefined is the unassigned variable
//  prefix and postfix operators (++a, a++, --a, a--))  (prefix is evaluated first but postfix sums the value after expression)
// arithmetic operators (+ - * / %  and **)  4**2 means 4*4=16
// comparison operators (< > == <=  >=)
// logical operators (&& (logical conjunction) ||(logical disjunction   ) !)  //use ctrl+D to select all duplicates
//if else  for, for in, for of

// swith break

function isLeapYear(year) {
  if (year % 4 == 0 && year % 100 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return "true";
      } else {
        return "false";
      }
    } else {
      return "true";
    }
  } else return "false";
}

console.log(isLeapYear(2300));

// there are total 5 falsy values in JS 0, "", undefined, NaN, and null  that is if we use these five in if part it will always return return false or execute else part
if (0 || undefined || "" || NaN || null) {
  console.log("we lose the match"); // always return else part
} else console.log("we won the match");

// ternary operator only JS operator which takes 3 operators
let age = 15;

console.log(age >= 18 ? "you can vote" : "you can't vote");

// while loop

let num = 0;
while (num < 10) {
  console.log(num + 1);
  num++;
}

// do while loop

do {
  console.log(num);
  num++;
} while (num < 10);

// for loop
for (var i = 0; i < 10; i++) {
  console.log(i + 1);
}

// table using for loop

for (var i = 0; i < 10; i++) {
  console.log(8 * (i + 1));
}

// function is set of code designed to perform a particular task , a function definition or statement consists  function prefix followed by function name list of paremeters enclosed in parentheses and separated by commas then curly brackets enclosed instructions to be executed and produce result, merely defining a function doesn't execute the function we need to invoke it explicitly
// difference between argument and parameter
function sum(a, b) {
  // declaring a function with parameters
  console.log(a + b); // function body
}

sum(20, 30); //invoking the function   with arguments

// function expression : it means create a function and assign it to a variable

function sub(a, b) {
  return a - b;
}
var funExpr = sub(9, 6);
console.log(funExpr);

// annonymous functions expression    that is a function without any name

var result = function (j, k) {
  return j * k;
};

// either call it as result(4,3) or assign it to another variable and just use that variable to result

console.log(result(8, 9));
var multily = result(8, 9);
console.log("the result of annonymous function is " + multily);

// modern javascript or ecma script 6 (ES6)

// let Vs const  Vs var (function scope) while let and const are block scope

// template string:- we use our variables whithin the strings enclosed in backtick as `${varName}`

// default parameters : used as default anrgument when required no of arguments are not provided during invocation
function div(a, b = 1) {
  return a / b;
}
console.log(div(6));

// fat arrow function (imp no need of curly braces and return keyword if a single line is in function)

const add = (a, b) => `${a + b}`;

console.log(add(8, 6)); // fat arrow function can't be called before declaration as normal function we can't use this in fat arrow function

// Array in js   : first value in array is called lower index or lower boudry like wise last value is upper index or upper boudry

// var myFriends = ["Ram", "Shiv", "Indra", "Prjapati ", 22, true];
// js array can store multiple data types at a time

var myFriends = ["Ram", "Shiv", "Indra", "Prjapati"];
console.log(myFriends[1]);

// loops in array (for)

for (var i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]);
}

// for in loop

for (let elements in myFriends) {
  console.log(myFriends[elements]);
}

// for of loop
for (let members of myFriends) {
  console.log(members);
}

// imp for in and for of is differ in way that for in provides index no while for of provides values

// foreach loop : consist of a callback function which requires three arguments value , index of value and current array
// while for in returns index , for of returns index's value , foreach returns all three index, value and array

myFriends.forEach(function (elemnts, index, array) {
  console.log(elemnts + "index: " + index + "" + array);
});

// or we can use fat arrow function too
myFriends.forEach((elemnts, index, array) => {
  console.log(elemnts + "index:" + index + "" + array);
});

// array   traversal sort and filtering

// array.prototype.indexOf()
// find
// filter
// lastindexof()

// array.prototype.find(function(element,index,array,this) { return)   retuns only one element at given condition in function this is the major problem    and if it can't find it will return undefined

const prices = [200, 499, 500, 460];
// find values under 500
var findValue = prices.find((elemnts) => {
  return elemnts < 500;
});
console.log(findValue); // event if here 3 values are less than 500 it will return only the least

console.log(prices.find((val) => val < 500)); // same as above but in short

// array.prototype.findIndex(function(element,index,array,this) { returns index number of the element

// const prices = [200, 499, 500, 460];
// find values under 500
var findValue = prices.findIndex((elemnts) => {
  return elemnts < 500;
});
console.log(findValue); // it will return 0 as least lowest value than 500 is on first in array

// array.filter() it is more than combo of find and findindex b'caz it will return all values in a new array that satisfy the filter function and with their index values and a empty array if unsatisfied

console.log(prices.filter((elment, index) => elment < 500));

// sort an array

// array.prototype.sort() returns the elements sorted in ascending order but only in string , number is sorted wrongly always

const months = ["Jan", "Feb", "Mar", "Apr", "May", "dec"];
console.log(months.sort()); // will return [ 'Apr', 'Feb', 'Jan', 'Mar', 'May', 'dec' ] using dictionary view

const array1 = [1, 2, 3333, 9999, 1000000, 3000, 549];
console.log(array1.sort()); // will return [ 1, 3000, 3333, 549, 5555, 9999 ] using telephone directory sort order

// array CRUD functions
// array.prototype.push() adds one or more elements to the end of the array and returns length of new array

const animal = ["goat", "cat", "dog"];
let count = animal.push("camel"); // we can add multiple elements at a time too as
animal.push("Peigon", "peacock");
console.log(animal);
console.log(count);

// array.indexof('string to search', index value to where start search) return the index of the first element in the array or -1 if not found

console.log(animal.indexOf("cat", 2)); // returns -1 since it starts searching from 3rd element
console.log(animal.indexOf("cat")); //returns 1 since it starts searching from 1st element

// in the same way lastindexof returns index(from beginning) of the element but start searching from the last as

console.log(animal.lastIndexOf("cat", 2)); // returns 1 since it starts searching from last and found at first element

// array.prototype.includes
console.log(animal.includes("cat", 2)); // returns boolean true if cat is included after given index , if we don't give index it will search from start of

// array.prototype.unshift()  it too add a new element to array but at beginning  and return length of the new array

console.log(animal.unshift("jackal")); // will return length(7) of our new array after adding at beginning
console.log(animal);

// as push the element at the end of the array , pop will delete the last element and return that element
// pop will change the length of the original array
animal.pop();
console.log(animal);
console.log(animal.pop());
console.log(animal);
// as unshift adds the element in the array at start of the array, shift will delete the first element

console.log(animal.shift());
console.log(animal);

// however array.prototype.splice(starting index, no of elements to delete, to add) can do add,remove ops solely and not just starting or end anywhere. splice returns the deleted elements as array if no any it will []

const calendar = ["january", "february", "march", "apr", "may"];

// add dec at the last but not use push

calendar.splice(calendar.length, 0, "dec");
console.log(calendar); // will add dec at the end
// to update the element     like if we have to capital form of feb

calendar.splice(1, 1, "Feb"); // it will simply delete the element at 1 index and add Feb there
console.log(calendar);

// however if we don't know the index value of a element we want to update in our array we can just use indexof method as argument in splice method

const indexOfmonth = calendar.indexOf("apr"); // since we know indexof returns -1 if not found
if (indexOfmonth != -1) {
  calendar.splice(indexOfmonth, 1, "April");
  console.log(calendar);
} else {
  console.log("no such value in calendar");
}

//  delete using splice (rem splice returns deleted ele)    ex remove jan from calendar

const indexToRemove = calendar.indexOf("january");
if (indexToRemove != -1) {
  calendar.splice(indexToRemove, 1); // since we are not adding anything 3rd argument is not needed
  console.log(calendar);
} else {
  console.log("no such value in calendar");
}

// imp if we provide infinity as 3rd argument in splice it will delete all the elements after starting index provided

// map and reduce in array
// map is as same as foreach it too loop the whole array but it don't change out existing array despite return a new array of boolean values, after executing our callback function and the most important thing is that we can use method chaining with map)(as .filter().reduce()) but not with foreach since foreach returns undefined
var array2 = [1, 5, 7, 89, 45, 55];
// let newArray = array2.map((element, index, array2) => element < 40);
// console.log(newArray); // will return [ true, true, true, false, false, false ];

// but if we have to fetch our element instead of these boolean values then

let newArray = array2.map((value, index, arr) => {
  if (value < 40) {
    return `index no of ${index} and the value is ${value} belongs to ${arr}`;
  } else {
    return `no value`;
  }
});

console.log(newArray);

// find the square root of each element in the array ,multiply each sqrt value by 2 then return only if it is greater than 10
let arr = [25, 36, 49, 64, 81];
console.log(
  arr
    .map((value) => {
      let v = Math.sqrt(value);
      let c = v * 2;

      return c;
    })
    .filter((value) => value > 10)
    .reduce((accumulator, value, index, arr) => (accumulator += value)) // this is called chaining  , it is not available with foreach
);

// reduce method : it is used to flatten the array that is it convert 3D or 2D arrays into a single dimensional array or single value. reduce method executes the reducer function(which is defined by us) on every element and returns single output value. reducer function have 4 arguments(accumulator, currentValue, currentIndex, currentArray), the accumulator is like the box to accumulate results performed with every element of the array.

let arr2 = [4, 3, 5, 6]; // let we have to add them together
let ans = arr2.reduce(
  (accumulator, value, index, arr) => {
    // debugger;
    return (accumulator += value);
  },
  6 // here 6 is additional if we have something extra to add to accumulator already , we can provide this way
);
console.log(ans);

// how to flatten an array
const arr3 = [
  ["zone1", "zone2", "zone3"],
  ["zone4", "zone5", "zone6"],
  ["zone7", "zone8", "zone9"],
];

console.log(arr3.reduce((accum, val) => accum.concat(val)));

// js string : zero or more char in  quotes are string , strings are primitive types used to manipulate texts
// we can create a string using string literals or with the help of string constructor

let name = "Raman";
let firstName = "RadhaRaman";

// str.length returns the length of the string
console.log(`firstName:${firstName}`, firstName.length);

// escape char \ is use to escape a char ex
console.log("my name is 'RadhaRaman'");

// find string into a string
// indexOf
const myBio = "my name is Raman";
console.log(myBio.indexOf("Raman"));
// str.lastIndexOf("Raman");
console.log(myBio.lastIndexOf("is"));

// search method seaches a string and returns the position of the specified string like index of but we cann't provide starting index as indexof

console.log(myBio.search("Raman"));

// extracting a part of the string using slice(start, end),substring(start, end),substr(start, end);
// slice returns the extracted part as the new string from start to end (till end if end isn't given)
console.log(myBio.slice(0, 5)); // if second argument is -ve it will return all except the no char  form last in neg

let myTwitt =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, blanditiis repellendus eligendi beatae similique facilis quia! Veritatis sint sapiente, velit quod vitae animi necessitatibus praesentium aliquam, repudiandae, illum quas voluptate?";

// make mytwitt actually twitter size that is 280 using slice method
console.log("my actualTwitt is " + myTwitt.slice(0, 280));

// substring is as like as slice method but it doesn not accept neg arguments
// str.substring(start, end)    but if we pass neg argument it will start counting from 0th index till the first argument
console.log(myTwitt.substring(6, -1));

// substr is different from slice method and substring method in a way that second argument is not end but lenght of the string to be extracted
console.log(myBio.substr(5, 8)); // if second argument is neg it will return nothing but if first argument is neg it will return all the characters of present string - neg first arg

// replacing string content
// string.prototype.replace(search for, replacement);   it returns a new string with replace the first argument with second but only first result will be replaced
console.log(myBio.replace("name", "Prabu Name"));

console.log(myBio);

// charAt returns the char at given position
console.log(myBio.charAt(0));
console.log(myBio.charAt(1));
console.log(myBio.charAt(2));
console.log(myBio.charAt(3));
console.log(myBio.charAt(4));

// charCodeAt () method returns the unicode value of the character at given index
console.log(myBio.charCodeAt(0)); //will return 109 since m is at 109 charCode / utf-16 code

// str.concat(str2) method returns a new string after concatenating str with str2
console.log(myBio.concat(" that's all"));

// str.trim(); removes whitespaces

let wtSpace = "             msg       ";
console.log(wtSpace.trim());

// split method used to convert string into the array
// str.split('divider(like commas, space, or pipe etc) ')
let txt = "a,b,c,d,e,f,g,h,i";
console.log(txt.split(" ,"));

// js date and time
// there are 4 ways to create a date object  in JavaScript
// new Date();
// new Date(year, month, day, hours, minutes, seconds, milliseconds);
// new Date(milliseconds);
// new date(date string);     month is must otherwise it will produce 1970
// Date.now();it returns since 1 jan 1970 in milliseconds
// new Date(0); returns 1 jan 1970

console.log(new Date()); // it will return incorrect result as 2023-01-01T07:15:59.797Z,  for time so we need to use .toLocaleString() or .tostring()
console.log(new Date().toLocaleString()); // it will return correct result with year month day time
console.log(new Date().getFullYear()); // it will return year
console.log(new Date().getMonth()); // it will return month's index from 0 to 11
console.log(new Date().getDate()); // it will return date
console.log(new Date().getHours()); // it will return hours  will return 0 -23
console.log(new Date().getMinutes()); // it will return minutes
console.log(new Date().getSeconds()); // it will return seconds
console.log(new Date().getMilliseconds()); // it will return milliseconds
console.log(new Date().getTime()); // it will return milliseconds
// set our date

console.log(new Date().setDate(1)); // it will return correct result with year month day time
console.log(new Date().toLocaleTimeString()); // it will return time only
console.log(new Date().toLocaleDateString()); // it will return date only
console.log(new Date().toLocaleString()); // it will return correct result with year month day time

// math object allows to perform mathematical operations
console.log(Math.round(10.64)); // it will rounded value to its nearest integer
console.log(Math.pow(10, 2)); // it will return value as console.log(10**2); that is sum of pow and base
console.log(10 ** 3); // it will return value as console.log(Math.pow(10,3));
console.log(Math.sqrt(25)); // it will return squreroo
console.log(Math.abs(4 - 6)); // it will return absolute positive value in +ve even if it is negative
console.log(Math.ceil(10.01)); // it will return value a level up even if it is 0.01 greater than
console.log(Math.floor(4.7)); // opp to ceil it will return value a level down even if it is 0.5 greater
console.log(Math.min(10.01, 54, -300, 599)); // it will return the least value
console.log(Math.max(10.01, 54, -300, 599)); // it will return the greatest value
console.log(Math.random()); // it will return a random number between 0 and 1
console.log(Math.trunc(-4.6)); // it will return only digits before the decimal point , if the value is positive it will act like math.floor but if the value is negative it will act like math.ceil

// DOM Vs BOM In JS

// differece between window and document
// window is the main container or global object any operation related to browser is the part of the document and document is just like the child  of window
// all the members like objects , methods and properties are the part of the window object then we don't need to refer the window object while in DOM we have to refer the document object if document's properties methods are being used.

// window: have following 3 parts DOM BOM and JS(object arrays functions and all operationally related)
// DOM  is document mainly HTML and all its nodes/elements where as
// BOM is everything related to browser such as navigator , location, frames , history , xml http request etc even alert prompt and confirm

//  <script>
//       function goBack() {
//         window.history.back();
//       }
//  alert(location.href); // shows the current location
//  if (confirm("redirect to google")) {
//    location.href = "http://google.com"; // redirect to google
//  }
//     </script>
//   </head>
//   <body>
//     <p>click me to see the previous visited window</p>
//     <button onclick="goBack()">goback</button>
//   </body>

// navigation using DOM

// to know root element of your document type document.documentElement in console it will return
// in console if we write document.head it will return head if we write document.body it will return body
// if we want to know node we can use document.body.childNodes    it includes enter tab and whitespace as text nodes
// document.body.hasChildNodes() will return true or false depending on the document have children
// document.body.firstChild will return enter tab and whitespace while document.body.firstElementChild will return actual child div span etc.
// simply use document.querySelector('className or id').style.color(or whatever you want)='value';

// if we want to fetch the sibling element
// document.body.previousElementSibling; or document.body.nextElementSibling  // we can replace body with head p h or any node to fetch that element's sibling

// events in JS   are the thing that happens to our elements during JS uses elements, events react
// event is anything that browser does or user does ex loading field changes appearance changes'
// types of events
// inline event ex alert()

// by calling a function
// using onclick
// using event listeners
// rest in event file

//
// using unicode for icons from font awesome
const tempLoad = () => {
  let temp = document.querySelector("#temp");
  temp.innerHTML = "&#xf2cb";
  setTimeout(
    () => ((temp.innerHTML = "&#xf2ca"), (temp.style.color = "green")),
    1000
  );
  setTimeout(
    () => ((temp.innerHTML = "&#xf2c9"), (temp.style.color = "#f8b627")),
    2000
  );
  setTimeout(() => (temp.innerHTML = "&#xf2c8"), 3000);
  setTimeout(
    () => ((temp.innerHTML = "&#xf2c7"), (temp.style.color = "#d63031")),
    4000
  );
};
tempLoad();
setInterval(tempLoad, 5000);

const calculateTemp = () => {
  const tempInput = document.getElementById("tempInput").value;
  // console.log(tempInput);
  const tempSelected = document.getElementById("temp_diff");
  const selectedVal = temp_diff.options[tempSelected.selectedIndex].value;
  // console.log(selectedVal);

  const celToFah = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  const fahToCel = (fah) => {
    let celsius = Math.round(((fah - 32) * 5) / 9);
    return celsius;
  };

  let result;
  if (selectedVal == "cel") {
    result = celToFah(tempInput);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `${result}*fahrenheit`;
  } else {
    result = fahToCel(tempInput);
    document.getElementById("resultContainer").innerHTML = `${result}*celsius`;
  }
};
