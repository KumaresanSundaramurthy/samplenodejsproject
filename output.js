const x = "1";
const y = "2";

// console.log(x,y);

// console.log("%s", x)
// console.log(typeof x);


// const function1 = () => console.trace();
// const function1 = () => {
//     console.log('inside function1');
// }

// const function2 = () => function1();

// function2();

const sumfun = () => {
    console.log(`the sum of 2 and 3 is ${2 + 3}`);
}

const multfun = () => {
    console.log(`the multiply of 2 and 3 is ${2 * 3}`);
}

const finalres = () => {
    console.time('sumfun()');
    sumfun();
    console.timeEnd('sumfun()');

    console.time('multfun()');
    multfun();
    console.timeEnd('multfun()');
}

finalres();