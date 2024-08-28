// console.log("Coming first")

function asynctask(callbk) {
    setTimeout(() => {
        // callbk(null, "This is a test message")
        console.log("Async Task executed");
    }, 0);
}

// asynctask((err, data) => {
//     if(err) {
//         throw new Error(err)
//     } else {
//         console.log(data)
//     }
// })


function anothertaskexec(cb) {
    setTimeout(() => {
        console.log("Another task executed1");
    })
}

anothertaskexec(() => {
    anothertaskexec(() => {
        anothertaskexec(() => {

        })
    })
})