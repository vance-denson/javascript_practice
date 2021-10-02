/* primitive
-Number, String, Boolean, Null, Undefined, Symbol, BigInt
*/

// 1/0 = infinity
// 0/0 = NaN

//alert("It's alive!");

console.log(Math.floor(Math.random() * 3) + 1); //random number 0-10

//parseInt() and parseFloat() // To parse form data (strings to numbers)

/*Falsy values
-false,0,null,undefined,'',NaN
*/

/*Array Methods
push,pop,unshift,shift
concat,includes(bool),indexOf,join,reverse,slice,splice,sort
map,filter,reduce,forEach,some,every,find
a lot use 'let arrayCopy = arr.slice()' to copy an array
always use const for arrays and objects since they are reference type objects
*/
const fitBitData = {
	totalSteps: 340000,
	avgCalsBurned: 10,
	name: 'Vance',
	age: 32,
	description: "Fun loving ol' chap",
	hobbies: [ 'walks', 'jumps', 'swims' ]
};

console.log(fitBitData);
console.log(`${fitBitData.name}, ${fitBitData.description.toLowerCase()} enjoys ${fitBitData.hobbies.join(', ')}`);

let testNums = [ 1, 2, 3, 8, 9, 5, 2, 10, 5 ];

for (let e of testNums) {
	console.log(e);
}

let name = 'v2: ';
for (let e of fitBitData.name) {
	name = name.concat(e);
}
console.log(name);

for (let prop in fitBitData) {
	console.log(`The ${prop} value is ${fitBitData[prop]}`);
}

// console.dir(function) to see structure
