// DOM - Document Object Model

// Javascript  breaks down html elements into a tree like form

// can read attributes, add or delete nodes


// output.innerText = 'Hello World'; // fill the input named "id" with this text

// var oldOutput = output.innerText;
// console.log(oldOutput);

// output.innerText = 9 * 2;

// const heroGenerator = ()=> {
//     const adjectives = ['Mighty', 'Abominable', 'Incredible', 'Golden', 'Amazing'];
    
//     const names = ['Destroyer', 'Bugman', 'Plastic Girl', 'Lizard Boy', 'Wolfman', 'Ratman', 'SpiderBoy', 'El Jefe'];
    
//     const actions = ['spit fire', 'see through walls', 'run faster than a train', 'type at amazing speeds', 'make 100 cupcakes in 15 minutes'];
    
    
//     let generate = 'The ' + adjectives[generateRandom(adjectives.length)] + ' ' + names[generateRandom(names.length)] + ' can ' + ' ' + actions[generateRandom(actions.length)];
    
//     console.log(generate);
//     return generate;
// }

// function generateRandom(num) {
//     var idx = Math.floor(Math.random() * num);
//     console.log(idx);
//     return idx;
// }

// var hero = heroGenerator();
// output.innerText = hero;

// var output = document.getElementById('output'); //document is an object
// var base = window.prompt('Enter a base'); //enter message for prompt
// var height = window.prompt('Enter a height'); 

// const triArea  = (base, height)=> {
//     var area = 1 / 2 * base * height;
//     return 'The area of the triangle with ' + base + ' base and ' + height +  ' height is: ' + area;
// }


// var outputArea = triArea(base, height);
// output.innerText = outputArea;

// innerHTML; can pass in html 

// output.innerHTML = '<h2>' + 'Triangle Area' + '</h2>' + '<p>' + outputArea + '</p>';

// var teams = ['Dodgers', 'Lakers', 'Oilers', 'Cowboys'];
// var outputTeams = '<ul>';
// for (var i = 0; i < teams.length; i++) {
//     outputTeams += '<li>' + teams[i] + '</li>';
// }
// outputTeams += '</ul>';



// output.innerHTML = outputTeams;

var output = document.getElementById('output');

var beer = Number(window.prompt('Enter the price of beer'));
// var beer = window.prompt('Enter the price of beer');
var cereal = Number(window.prompt('Enter the price of cereal'));
// var cereal = window.prompt('Enter the price of cereal');
var milk = Number(window.prompt('Enter the price of milk'));
// var milk = window.prompt('Enter the price of milk');

const groceryBill = (beer, cereal, milk)=> {
    var subtotal = beer + cereal + milk;
    var tax = .09;
    var taxTotal = subtotal * tax; 
    var bill = taxTotal + subtotal; 
    var message = '<h2>' + 'Your Grocery Bill' + '</h2>' + '<p>' + 'Your items:' + '</p>' + '<ul>' + '<li>' + 'beer: $' + beer + '</li>' + '<li>' + 'cereal: $' + cereal + '</li>' + '<li>' + 'milk: $' + milk + '</li>' + '<li>' + 'tax amount: $' + taxTotal.toFixed(2) + '</li>' +'</ul>' + '<p>' + 'Your total is: $' + bill.toFixed(2);
    return message;
}

output.innerHTML = groceryBill(beer, cereal, milk);


