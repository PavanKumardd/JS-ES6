"use strict"
// //global scope
// var a = "test1";
// let b = "test2";

// console.log(a);
// console.log(b);

// function testvar(){
//     var a = 30;
//     if(true) {
//         var a = 50;
//         console.log(a);
//     }
//     console.log(a);
// }

// function testlet(){
//     let a = 30;
//     if(true){
//         let a = 50;
//         console.log(a);
//     }
//     console.log(a);

// }
// testlet();

// for(let i = 0; i < 10; i++){
//     console.log(i);

// }
// console.log(i);

// const colors = [];

// colors.push("red");
// colors.push("blue");
// // colors = "green"

// console.log(colors);


//CLASSES
// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     static countusers(){
//         console.log("There are 50 users");

//     }
//     register(){
//         console.log(this.username+" is now registred");
//     }
// }

// let bob = new User("bob","bob@gmail.com","333333");
// bob.register();

// User.countusers();

// class member extends User{
//     constructor(username,email, password, mempackage){
//         super(username, email, password);
//         this.package = mempackage;
//     }

//     getpackage(){
//         console.log(this.username+ "is subscribed to the "+this.package+" package");
//     }
        
// }

// let mike = new member("mike", "mike@gmail","iewn", "standard");
// mike.getpackage();
// mike.register();


//TEMPLATE LITERALS
// let name = "Pavan";
// let template = "<h1>Hello</h1>"+
// "<p>This is a sample template in Javascript</p></h1>"

// function makeuppercase(word){
//     return word.toUpperCase();

// }

// let template = `<h1>${makeuppercase("Hello")}, ${name}</h1>
// <p>This is a sample template in Javascript</p>`

// document.getElementById("template").innerHTML = template;

//STRING METHODS
// let thestring = "Hello, This is pavan";

// //StartsWith()
// console.log(thestring.startsWith("Hello"));
// console.log(thestring.startsWith("hello"));//false because of lowercase start

// //EndsWith()
// console.log(thestring.endsWith("pavan"));
// console.log(thestring.endsWith("Pavan"));
// console.log(thestring.endsWith("pavaN"));

// //includes()
// console.log(thestring.includes("pavan"));
// console.log(thestring.includes("Pavan"));
// console.log(thestring.includes("This"));
// console.log(thestring.includes("this"));

//NUMBER METHODS
//HEX
// console.log(0xff);

// //Binary
// console.log(0b101011);

// //Octal
// console.log(0o543);

// console.log(Number.isFinite(3));
// console.log(Number.isFinite(-3));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(NaN));
// console.log(Number.isNaN(3));
// console.log(Number.isNaN(NaN));
// console.log(Number.isInteger(3));
// console.log(Number.isInteger(3));
// console.log(Number.isInteger(3.9));
// console.log(Number.isInteger(NaN));
// console.log(Number.isInteger(Infinity));

//DEFAULT PARAMETERS
// function greet($greeting){
//     console.log($greeting);
// }
/*
// greet("Hello World");
// greet();
function greet($greeting = "Hello world"){
    console.log($greeting);
}

greet();
*/

// SPREAD OPERATORS
// let args = [1,2,3];

// function test(){
//     console.log(args);
// }

// test(...args);

// let args1 = [1,2,3];
// let args2 = [4,5,6];

// function test(){
//     console.log(args1+","+args2);
// }
// test();
/*
//SET AND MAP
let myarray = [1,2,33];
let myset = new Set(myarray);

myset.add("100");
myset.add({a: 3, b:6, c:9});
myset.delete("100");
myset.clear();
myset.add(33);
myset.add(66);


// console.log(myset.size);
// console.log(myset);

myset.forEach(function(val){
    console.log(val);
});
*/
/*
//MAP
let mymap = new Map([["a1","Hello"],["b1","Bye"]]);
mymap.set("c3","foo");
mymap.delete("a1");


console.log(mymap);
console.log(mymap.size);
*/
//WEAKSET
// let carweakset = new WeakSet();
// let car1 = {
//     make: "Honda",
//     model:"Civic"
// }

// carweakset.add(car1);

// let car2 = {
//     make: "Toyota",
//     model:"Camry"
// }

// carweakset.add(car2);
// carweakset.delete(car1);
// console.log(carweakset);

// let carweakmap = new WeakMap();

// let key1 = {
//     id: 1
// }
// let car1 = {
//     make: "honda",
//     model: "civic"
// }
// let key2 = {
//     id: 2
// }
// let car2 = {
//     make: "Toyoya",
//     model: "Innova"
// }

// carweakmap.set(key1, car1);
// carweakmap.set(key2, car2);
// console.log(carweakmap); 

// carweakmap.delete(key1);

//FUNCTIONS
// const multiply = function(num){
//     return num*num; 
// }
// let final = multiply(3);
// console.log(final); 

// const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

// console.log(factorial(3))
// function map(f, a) {
//     let result = []; // Create a new Array
//     let i; // Declare variable
//     for (i = 0; i != a.length; i++)
//       result[i] = f(a[i]);
//     return result;
//   }

//   console.log();

// function getscore(){
//     let a = 3;
//     let b = 6;
//     name = "Pavan"
//         function add(){
//             return name +" scored "+ (a+b)
//         }

//     return add();

// }

// console.log(getscore());





  
