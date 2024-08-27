// REPL = Read Evaluate Print Loop

const repl = require("repl");

const get = repl.start("Testing data received")

get.on("exit", () => {
    console.log("Exiting the repl page.");
    process.exit();
});