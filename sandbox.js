var character = 'luigi';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var isBlack = false;
// isBlack = 'yes'
// isBlack = 10
isBlack = true;
var circ = function (params) {
    return params * Math.PI;
};
console.log(circ(8));
//array
var names = ['lugitect', 'samsul', 'joko'];
names.push('nanas');
// names.push(9)
// names[0] = 3
var mixed = ['way', 10, 'affe', 4, 1];
mixed.push(11);
mixed.push('adfo');
mixed[0] = 9;
// mixed.push(true)
// object
var ninja = {
    name: 'mari',
    age: 30,
    katana: true,
};
ninja.name = 'ryu';
ninja.age = 20;
// ninja.age = 'who'
// ninja.skill = ['fight', 'sneak']
ninja = {
    name: 'yosh',
    age: 20,
    katana: false,
};
// explicit type
var charc;
var age;
var login;
charc = 'yoss';
age = 20;
login = true;
// array
var ninjas = [];
ninjas.push('20');
// union
var mixeds = [];
mixeds.push('naon');
mixeds.push(20);
// mixeds.push(true)
var uid;
uid = '123';
uid = 123;
// uid = false
// object
var ninjaOne;
ninjaOne = { name: 'yoss', age: 20 };
ninjaOne = [];
var ninjaTwo;
ninjaTwo = {
    name: 'yoss',
    age: 20,
    login: false,
    // skill: 'fight'
};
// dynamic (any)
var ages = 25;
console.log(ages);
ages = '123';
console.log(ages);
ages = true;
console.log(ages);
ages = { name: 'mario' };
console.log(ages);
var mixd = [];
mixd.push(1);
mixd.push('one');
mixd.push(false);
console.log(mixd);
var ninjs;
ninjs = { name: 'mario', age: 20 };
console.log(ninjs);
ninjs = { name: 20, age: 'mario' };
console.log(ninjs);
