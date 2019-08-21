//Arrays

// var num = [1, 2, 3, 4];
var names = ['Bryce', 'Herbert', 'Javier'];
var data = [1, 'Bryce', 2, 'Herbert', [1, 2, 3], true, false];

var arr2 = [1, 2, 3, [4, 5]];
console.log(names[1]);
// console.log(names[2]);
// console.log(data[3]);
console.log(data[4][1]);

// console.log(names);

// console.log(names.length);

// console.log(names[names.length-1])

names.push('Herman');
console.log(names);

names.pop();

console.log(names);

// for loops

// for (var i = 0; i < names.length; i++) {
//    var greeting = "Hello " + names[i];
//    console.log(greeting);
    
// }

// while loops
// var i = 0;
// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// }

// var i = 0;
// while (i < 20) {
//     console.log(i);
//     i++;
// }

// names.forEach(function(name) {
//     console.log(name)
// });

const heroGenerator = ()=> {
    const adjectives = ['Mighty', 'Abominable', 'Incredible', 'Golden', 'Amazing'];

    const names = ['Destroyer', 'Bugman', 'Plastic Girl', 'Lizard Boy', 'Wolfman', 'Ratman', 'SpiderBoy', 'El Jefe'];

    const actions = ['spit fire', 'see through walls', 'run faster than a train', 'type at amazing speeds', 'make 100 cupcakes in 15 minutes'];


    let generate = 'The ' + adjectives[generateRandom(adjectives.length)] + ' ' + names[generateRandom(names.length)] + ' can ' + ' ' + actions[generateRandom(actions.length)];

    console.log(generate);
}

function generateRandom(num) {
    var idx = Math.floor(Math.random() * num);
    console.log(idx);
    return idx;
}
heroGenerator();