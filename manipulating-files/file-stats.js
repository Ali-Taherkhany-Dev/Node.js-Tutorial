const fs = require('fs')
const promiseFs = require('fs/promises')

// Async Method

fs.stat('./data/users.txt', (err, stats) => {
    if (err) {
        console.log(err)
        return
    }
    // we have access to the file stats in `stats`
    console.log('Async Method')
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.size)
}) // this method doesn't block the thread

// Sync Method

// try {
//     const stats = fs.statSync('./data/users.txt')
//     console.log('Sync Method')
//     console.log(stats.size)
// } catch (err) {
//     console.log(err)
// } // this method blocks the thread until the file stats are ready

// Promise Based Method

// async function sample() {
//     try {
//         const stats = await promiseFs.stat('./data/users.txt')
//         console.log('Promise Based Method')
//         console.log(stats.isFile())
//     } catch (err) {
//         console.log(err)
//     }
// }
// sample()