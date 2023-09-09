const fs = require('fs')
const promiseFs = require('fs/promises')

// Async Method

fs.readFile('./data/users.txt', { encoding: 'utf8' }, (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Async Method')
    console.log(data + '\n')
})

// Sync Method

try {
    const data = fs.readFileSync('./data/users.txt', { encoding: 'utf8' })
    console.log('Sync Method')
    console.log(data + '\n')
} catch (err) {
    console.log(err)
}

// Promise Based Method

async function sample() {
    try {
        const data = await promiseFs.readFile('./data/users.txt', { encoding: 'utf8' })
        console.log('Promise Based Method')
        console.log(data + '\n')
    } catch (err) {
        console.log(err)
    }
}
sample()