//Arrays

// var num = [1, 2, 3, 4];
// var names = ['Bryce', 'Herbert', 'Javier'];
// var data = [1, 'Bryce', 2, 'Herbert', [1, 2, 3], true, false];


// console.log(names[0]);
// console.log(names[2]);
// console.log(data[3]);
// console.log(data[4][1]);

// console.log(names);

// console.log(names.length);

// console.log(names[names.length-1])

// names.push('Bob');
// console.log(names);

// names.pop();

// console.log(names);

// for loops

// for (var i = 0; i < names.length; i++) {
//     console.log(names[i]);
    
// }

// while loops
// var i = 0;
// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// }

// names.forEach(function(name) {
//     console.log(name)
// });

const heroGenerator = ()=> {
    const adjectives = ['Mighty', 'Abominable', 'Incredible', 'Golden', 'Amazing'];

    const names = ['Destroyer', 'Bugman', 'Plastic Girl', 'Lizard Boy', 'Wolfman'];

    const actions = ['spit fire', 'see through walls', 'run faster than a train', 'type at amazing speeds', 'make 100 cupcakes in 15 minutes'];

    var idx = Math.floor(Math.random() * 4);

    let generate = 'The ' + adjectives[idx] + ' ' + names[idx] + ' can ' + ' ' + actions[idx];

    console.log(generate);
}

heroGenerator();