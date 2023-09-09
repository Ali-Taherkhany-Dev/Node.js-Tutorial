const fs = require('fs')
const promiseFs = require('fs/promises')

// Async Method

fs.open('./data/users.txt', 'r', (err, fd) => {
    // fd is our file descriptor which uniquely identifies an open file
    console.log('Async Method')
    console.log(fd)
})

// Sync Method

try {
    const fd = fs.openSync('./data/users.txt', 'r') // returns the file descriptor instead of providing it in a callback
    console.log('Sync Method')
    console.log(fd)
} catch (err) {
    console.log(err)
}

// Promise Based Method

async function sample() {
    let filehandle
    try {
        filehandle = await promiseFs.open('./data/users.txt', 'r')
        console.log('Promise Based Method')
        console.log(filehandle.fd)
        console.log(await filehandle.readFile({ encoding: 'utf8' }))
    } finally {
        if (filehandle) await filehandle.close
    }
}
sample()

/**
 * Flags:
 * 
 * - (r) read
 * - (r+) read/write
 * - (w+) read/write/position stream at the begin
 * - (a) write/position stream at the end
 * - (a+) read/write/position stream at the end
 */