// Differences

// 1. Return value (result & promise object)

// function sum(a, b) {
//     return a + b;
// }
// async function add(a, b) {
//     return a + b;
// }
// console.log(sum(2, 2), add(2, 2))

// 2. 

// function sum(a, b) {
//     return `Normal function: ${a + b}`
// }
// async function add(a, b) {
//     return a + b
// }
// console.log(sum(2, 2))
// add(2, 2).then(res => console.log(res))

// 3. Higher Order Functions

function multiplyBy(num) {
    return function (arg) {
        return num * arg
    }
}

const multiplyByTwo = multiplyBy(2)
console.log(multiplyByTwo(5))