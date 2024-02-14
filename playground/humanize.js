/*
 * @Author: AJ
 * @Email: amirjavadi25@gmail.com
 * @Date: 2024-02-11 01:43:28 
 * @Last Modified by: AJ Javadi
 * @Last Modified time: 2024-02-11 03:17:31
 * @Description: file:///Users/aj/Desktop/Udemy-Complete-Web-Dev/Projects/NodeJS-Online-File-Explorer/playground/humanize.js
 */
// const fs = require('fs');

// function humanizeFileSize(filePath) {
//   const stats = fs.statSync(filePath);
//   const fileSizeInBytes = stats.size;

//   const units = ['B', 'KB', 'MB', 'GB', 'TB'];
//   let fileSize = fileSizeInBytes;
//   let unitIndex = 0;

//   while (fileSize >= 1024 && unitIndex < units.length - 1) {
//     fileSize /= 1024;
//     unitIndex++;
//   }

//   return `${fileSize.toFixed(2)} ${units[unitIndex]}`;
// }

// const filePath = '/path/to/your/file';
// const fileSize = humanizeFileSize(filePath);
// console.log(`File size: ${fileSize}`);


// console.log(Math.log10(1000));
// 10^3 = 1000
// console.log(Math.log10(1000000));
// 10^4 = 10000

const filesize = 5758575; // bytes 
const units = "BKMGT"; 

/****
 * B 10B -> 10 bytes (*1000^0)
 * K 10K -> 10*1000 bytes (*1000^1)
 * M 10M -> 10*1000*1000 bytes (*1000^2)
 * G 10G -> 10*1000*1000*1000 bytes (*1000^3)
 * T 10T -> 10*1000*1000*1000*1000 bytes (*1000^4)
 */


const index = Math.floor(Math.log10(filesize) / 3);

const filesizeHuman = (filesize / Math.pow(1000, index)).toFixed(1);

console.log(`${filesizeHuman}${units[index]}`); // 5.8M

// 5.8M

