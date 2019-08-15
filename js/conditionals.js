function isOddOrEven(num) {
    if(num  === 0) {
        console.log('The number is zero');
    } else if (num % 2 === 1) {
        console.log("odd");
    } else {
        console.log('even');
    }
};

// isOddOrEven(23);
// isOddOrEven(56);
// isOddOrEven(0);


// if(name === "Satch") {
    //     console.log('Hey ' + name);
    // }
    
    // = assignment of a variable
    // == loose operator
    // === strict operator

// var name = "Bobby";

// if(name === "Satch") {
//     console.log('Hey ' + name);
// } else {
//     console.log('Who are you??');
// }

// if (condition) {
//     do stuff
// } else if (condition) {
//     do this stuff
// } else {
//     do other stuff
// }

// var num = 1;

// if (num === 0) {
//     console.log('The number is zero');
// } else if (num % 2 === 1) {
//     console.log('The number is odd');
// } else {
//     console.log('The number is even');
// }


function tempConv(num, deg) {
    if (deg !== 'fah' && deg !== 'cel') {
        console.log('Invalid');
    } else if (deg == 'fah') {
        var temp = (num - 32) * 5 / 9;
        console.log(num + ' degrees Fahrenheit is ' + temp + ' degrees Celsius');
    } else {
        var temp = (num * 9 / 5) + 32;
        console.log(num + ' degrees Celsius is ' + temp + ' degrees Fahrenheit');
    }
}

tempConv(212, 'fah');
tempConv(31, 'cel');
tempConv( 3000, 'kelvin');