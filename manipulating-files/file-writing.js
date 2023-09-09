const fs = require('fs');
const promiseFs = require('fs/promises');

const content = 'Some content!';
const users = ['ali', 'muhammad', 'sajad'];

// Async Method

// fs.writeFile('./data/users.txt', content, err => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('Async Method')
//     // file written successfully
// })

// Sync Method

// try {
//   fs.writeFileSync(
//     './data/users.txt',
//     users.map((item, id) => {
//       const content = `${id}) ${item}\n`;
//       return content;
//     })
//   );
//   console.log('Sync Method');
//   // file written successfully
// } catch (err) {
//   console.log(err);
// }

// Promise Based Method

const sample = async () => {
  try {
    await promiseFs.writeFile(
      './data/users.txt',
      users.map((item, id) => {
        const content = `${id}) ${item}\n`;
        return content;
      }),
      { flag: 'a+' }
    );
    console.log('Promise Based Method');
    // file written successfully
  } catch (err) {
    console.log(err);
  }
};
sample();

// Appending To A File
// Async Aproach

// fs.appendFile('./data/users.txt', content, err => {
//     if (err) {
//         console.log(err)
//     }
//     // done
// });

// Promise Based Aproach

const sample_2 = async () => {
  try {
    promiseFs.appendFile('./data/users.txt', content);
  } catch (err) {
    console.log(err);
  }
};
sample_2();
