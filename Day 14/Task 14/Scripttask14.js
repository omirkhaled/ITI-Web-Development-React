// Part 1 - Choose

// 1-Array
// 2-find
// 3-Array
// 4-undefined
// 5-Arrays

// Part 2 - True or False

// 1-False 
// 2-True 
// 3-True 
// 4-False 
// 5-False 

//Part 3

//Q1
const numbers = [2,4,6,8];

numbers.forEach((num)=>{
    console.log(num * 2);
});

//Q2
const nums = [8,22,3,50,18,35];

const result = nums.filter((num)=>{
    return num > 20;
});

console.log(result);

//Q3
const users = [
    {name:"Youssef", age:19},
    {name:"Nour", age:26},
    {name:"Karim", age:32}
];

const user = users.find((item)=>{
    return item.age > 25;
});

console.log(user);

//Q4
const names = ["laila","hana","tarek"];

const result2 = names.map((name)=>{
    return name.toUpperCase();
});

console.log(result2);


//Part 4

const fruits = ["Mango","Grapes","Kiwi"];

//1) for...of
for(const fruit of fruits){
    console.log(fruit);
}

//2) for...in
for(const index in fruits){
    console.log(index);
}

//3) forEach
fruits.forEach((fruit, index)=>{
    console.log(index + " -> " + fruit);
});


//Part 5

//Q1 - Arrow Function
const multiply = (a,b) => a*b;

//Q2 - Destructuring
const person = {
    name:"Hassan",
    age:30
};

const {name, age} = person;

//Q3 - Template Literal
console.log(`Hello ${name}`);

//Q4 - Spread Operator
const arr1 = [7,8,9];
const arr2 = [10,11,12];

const arr3 = [...arr1, ...arr2];
console.log(arr3);


//Part 6

const students = [
    {name:"Laila", degree:60},
    {name:"Hana", degree:98},
    {name:"Tarek", degree:35},
    {name:"Rana", degree:75},
    {name:"Karim", degree:50}
];

//1) names only
const studentNames = students.map((student)=>{
    return student.name;
});
console.log(studentNames);

//2) degree >= 60
const passedStudents = students.filter((student)=>{
    return student.degree >= 60;
});
console.log(passedStudents);

//3) first student with degree > 90
const topStudent = students.find((student)=>{
    return student.degree > 90;
});
console.log(topStudent);

//4) print names using forEach
students.forEach((student)=>{
    console.log(student.name);
});


//Bonus

const numbers2 = [4,8,12,16];

const total = numbers2.reduce((sum, num)=>{
    return sum + num;
});

console.log(total);