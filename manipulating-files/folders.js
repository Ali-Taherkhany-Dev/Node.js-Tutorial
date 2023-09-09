const fs = require('fs');
const path = require('path');

// fs.access & fsPromises.access

// fs.mkdir() & fs.mkdirSync() & fsPromise.mkdir()

// const folderName = './data/test';

// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName);
//   }
// } catch (err) {
//   console.log(err);
// }

// fs.readdir() & fs.readdirSync() & fsPromises.readdir()

// const folderPath = './data';
// const availibleFiles = fs.readdirSync(folderPath);
// console.log(availibleFiles);

// const fullPaths = fs.readdirSync(folderPath).map((fileName) => {
//   return path.join(folderPath, fileName);
// });
// console.log(fullPaths);

// fs.rename() & fs.renameSync & fsPromises.rename()

// fs.rename('./data/users.txt', './data/user-1.txt', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   // done
// });

// fs.rmdir() & fs.rmdirSync() & fsPromises.rmdir() & fs.rm() if dir not empty

// const dir = './data/test';
// if (fs.existsSync(dir)) {
//   fs.rmdir(dir, (err) => {
//     if (err) {
//       console.log(err);
//     }
//     // done
//   });
// }

// if (fs.existsSync(dir)) {
//     fs.rm(dir, { recursive: true, force: true }, err => {
//         if (err) {
//             console.log(err);
//         }
//         // done
//     })
// }