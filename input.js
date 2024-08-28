const readLine = require("readline");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`what is your name?`, (datainput) => {
    console.log(`Hi ${datainput}`);
    rl.close();
});

// prompt-sync