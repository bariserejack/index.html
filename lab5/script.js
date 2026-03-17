let name = "Alice";
console.log("Hello, " + name);

let age = 21;
let major = "Computer Engineering";
console.log("Age:", age);
console.log("Major:", major);

function greet(user) {
  alert("Welcome, " + user);
}
greet("Bob");

function sumNumbers(a, b) {
  return a + b;
}
alert("Sum of 4 and 6 is " + sumNumbers(4, 6));

let input = prompt("Enter a number to check even or odd:");
let number = parseInt(input, 10);

if (!Number.isNaN(number)) {
  if (number % 2 === 0) {
    alert(number + " is even.");
  } else {
    alert(number + " is odd.");
  }
} else {
  alert("That was not a valid number.");
}

let fruits = ["Apple", "Banana", "Orange", "Mango"];
for (let i = 0; i < fruits.length; i += 1) {
  console.log(fruits[i]);
}
