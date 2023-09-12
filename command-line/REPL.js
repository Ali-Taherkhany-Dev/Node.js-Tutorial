// REPL stands for Read-Evaluate-Pring-Loop
// If we run the node command without any script to execute or without any arguments, we start a REPL session

const REPL = require('repl')
const Chalk = require('chalk')
const ProgressBar = require('progress')
// // REPL.start()

// const local = REPL.start('$ ')
// local.on('exit', () => {
//     console.log('\nexiting REPL')
//     process.exit()
// })

// Trace
// const function_1 = () => console.trace()
// const function_2 = () => function_1()
// function_2()

// Time Spent
// const doSomething = () => console.log('test')
// const measureTimeSpent = () => {
//     console.time('doSomething()')
//     // do sth, and measure the time it takes
//     doSomething()
//     console.timeEnd('doSomething()')
// }
// measureTimeSpent()

// Style The Output
// console.log(Chalk.red(`Hello World ${Chalk.bgCyan('!')}`))

// Progress bar
// const bar = new ProgressBar(':bar', { total: 10 })
// const timer = setInterval(() => {
//     bar.tick()
//     if (bar.complete) {
//         console.log('\ncomplete\n')
//         clearInterval(timer)
//     }
// }, 100)