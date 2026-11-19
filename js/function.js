let arrow = () => {
  console.log("Good Morning");
};

console.log(arrow);
arrow();

let arrow1 = () => console.log("Good Morning");
arrow1();

// let arrow2 = _ => console.log("Good Morning")
let arrow2 = ($) => console.log("Good Morning");
arrow2();

let displayMessage = (username) => console.log(`Good Morning ${username} !`);
displayMessage("Ram");
displayMessage("Ravi");

let add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));
console.log(add(10));
