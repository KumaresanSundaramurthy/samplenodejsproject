// console.log(process.argv.slice(2)[0])

// process.argv.forEach((val, index) => {
//     console.log(`${index}:${val}`);
// })

const minimist = require("minimist");

const newData = minimist(process.argv.slice(2));
// const newData = process.argv.slice(2);
// console.log(newData);
console.log(newData.NAME);