// const promise = new Promise((resolve, reject) => {
//     if(false) {
//         const returndata = {name: "Kumar"};
//         resolve(returndata);
//     } else {
//         const returndata = {error: "Error Occurred"};
//         reject(returndata);
//     }
// });

// promise.then((resolvedata) => {
//     console.log(resolvedata);
// }
// // ,
// // (rejectdata) => {
// //     console.log(rejectdata)
// // }
// ).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log('Final step')
// })


// let p = Promise.reject("Testing data");

// p.then((value) => {
//     console.log(value);
//     return value;
// }).then((val) => {
//     console.log(val)
// }).catch((error) => {
//     console.log(error)
// })