//for loop
for (var i = 0; i < 5; i++){
    console.log(i)
}
//while loop
let i = 0;
while ( i < 5 ){
    console.log(i);
    i++;
}
//do-while loop
let i = 10;
do {
    console.log(i);
    i++;
}
while(i < 5);
//function
function greet ( name ) {
console.log( "Hello, " + name );
}
greet("Omar");
//function with return
function add( a , b){
return(a + b);
}
let result =add(3,4);
console.log(result);
//arrow function
const multiply = (a , b) => a * b;
console.log(multiply(3,4));
//hoisting - function
sayHi ();
function sayHi(){
    console.log("Hi");
}
//hoisting - var
console.log(x);
var x = 20;
//hoisting - let
console.log(y);
let y = 20;
//object
let person={
    name:"Omar",
    age: 22,
    job: "Front End Developer"
}
console.log(person.name);
console.log(person.age);
console.log(person.job);