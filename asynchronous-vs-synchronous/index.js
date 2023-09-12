// Differences

// 1. Return value (result & promise object)

// function sum(a, b) {
//     return a + b;
// }
// async function add(a, b) {
//     return a + b;
// }
// console.log(sum(2, 2), add(2, 2))

// 2. Accessing Value

// function sum(a, b) {
//     return `Normal function: ${a + b}`
// }
// async function add(a, b) {
//     return a + b
// }
// console.log(sum(2, 2))
// add(2, 2).then(res => console.log(res))

// 3. Higher Order Functions

// function multiplyBy(num) {
//     return function (arg) {
//         return num * arg
//     }
// }

// const multiplyByTwo = multiplyBy(2)
// console.log(multiplyByTwo(5))

// 4. Priority

// console.log("I am the first") //synchronous
// new Promise(resolve => resolve("I am second")).then(console.log); //asynchronous
// setTimeout(() => console.log("I am the third"), 2) // asynchronous
// console.log("Should I be the last")  //synchronous
// setTimeout(() => console.log("Can I come ?"), 0) // asynchronous

// 5. Ex

// new Promise(resolve => setTimeout(() => {
//     resolve("loading file-1")
// }, 2000)).then(console.log) // Asynchronous

// setTimeout(() => {
//     console.log("loading file-2");
// }, 1000); // Asynchronous

// 6. 