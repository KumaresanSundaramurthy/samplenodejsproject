console.log("Code starts here");

function testingloop(ms) {

    console.log("Inside the loop function");

    const curdatetime = new Date().getTime();

    while(new Date().getTime() < (curdatetime + ms)) {

        console.log("While Loop is running")
    }

    console.log("While loop ends")

}

testingloop(100);

console.log("Function is executed.")

// Methods how does work - head (memory allocation) & call stack - Global execution context (executing the code to the browser) 