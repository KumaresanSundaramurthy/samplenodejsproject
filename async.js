console.log("Code starts here");

function testingloop(ms) {

    console.log("Inside the loop function");

    setTimeout(() => {
        console.log("Settimeout function executed")
    }, ms);

}

testingloop(0);

console.log("Function is executed.")

// Methods how does work - head (memory allocation) & 
// call stack - Web API (Web Table - Task Queue[Event Loop]) - Global execution context (executing the code to the browser) 