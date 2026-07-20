let MyNumber = Number(prompt("Enter a number"));

if (MyNumber > 0) {
  console.log("Number is positive.");
} else if (MyNumber < 0) {
  console.log("Number is negative.");
} else {
  console.log("Number is zero.");
}

if (MyNumber % 2 === 0) {
  console.log("Number is even.");
} else {
  console.log("Number is odd.");
}