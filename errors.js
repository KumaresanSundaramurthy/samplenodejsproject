const { CustomError } = require("./CustomError");

// const errordata = new Error("Something1 went wrong!");

// console.log(errordata);
// console.log(errordata.stack);
// console.log(errordata.message);

// throw new Error("This is a throw error object");

// throw new CustomError("This is a test custom error message")

// using try & catch error

// try {
//     testingfunction();
// } catch (er) {
//     console.log('Error OCcured')
//     console.log(er)
// }


function testingfunction() {
    const datareturn = fetch("localhost:300/getretrievedat")
    // console.log(`inside testing function`)
    // return "retun data"
}


// Using uncaught exception
// process.on("uncaughtException", (error) => {
//     console.log("This is a text from uncatught exception data");
//     process.exit(1);
// })

// testingfunction();




// Using Promise exception 

// const promise = new Promise((resolve, reject) => {
//     if(true) {
//         resolve(testingfunction());
//     } else {
//         reject(testingfunction());
//     }
// })

// promise.then((val) => {
//     console.log(val);
// }).catch((error) => {
//     console.log("Error Occurfed")
//     console.log(error)
// })


// Using Async & Wait

const testingasync = async () => {
    try {
        await testingfunction();
    } catch (er) {
        // console.log("Error occured")
        // throw new Error(error)
        throw new CustomError(er.message)
    }
}

testingasync();