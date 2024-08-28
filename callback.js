console.log("First Step")

function funcexec(callbk) {
    
    console.log("Function Exec Running");
    setTimeout(callbk, 0);
    // callbk();

}

funcexec(() => {
    console.log(name);
})

console.log("Final Code is executed")

const name = "Kumaresan";