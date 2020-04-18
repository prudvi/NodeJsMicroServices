
'use strict';
const powers = [
    { id: 1, name: 'flying' },
    { id: 2, name: 'teleporting' },
    { id: 3, name: 'super strengh' },
    { id: 4, name: 'clairvoyance'},
    { id: 5, name: 'mind reading' }
];
const heroes = [
    { id: 1, type: 'super-dog', displayName: 'The Rex', 
    powers: [1, 4], img: 'dog.jpg', busy: false},
    { id: 2, type: 'super-horse', displayName: 'Peter Pan', 
    powers: [2, 5], img: 'horse.jpg', busy: false},
    { id: 3, type: 'super-cat', displayName: 'Tom', 
    powers: [3, 2], img: 'cat.jpg', busy: false},
    { id: 4, type: 'super-hamster', displayName: 'Jerry',
     powers: [1, 5], img: 'hamster.jpg', busy: false}
];

module.exports = {
     powers: powers, heroes: heroes
};