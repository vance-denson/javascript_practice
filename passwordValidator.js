/*
Vance's quick reference notes -- JAVASCRIPT
*/

//Check if sentenece is a Pangram (Uses every letter in the 26 letter alphabet)
function isPangram(sentence) {
	checkSentence = sentence.toLowerCase();
	const alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];
	for (let e of checkSentence) {
		let match = alphabet.indexOf(e);
		if (match !== -1) {
			alphabet.splice(match, 1);
		}
	}
	if (!alphabet.length) {
		return `\"${sentence}\" Is a Panagram!!! All letters of the alphabet included.`;
	}
	return `\"${sentence}\" is NOT Panagram. Remaining letters: ${alphabet.join(', ')} (${alphabet.length})`;
}

//Generate random play card from two arrays
const cardValues = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace' ];
const cardSuit = [ 'Clubs', 'Spades', 'Hearts', 'Diamonds' ];

function getCard() {
	randValue = Math.floor(Math.random() * cardValues.length);
	randSuit = Math.floor(Math.random() * cardSuit.length);
	return { value: `${cardValues[randValue]}`, suit: `${cardSuit[randSuit]}` };
}

//Class selector and eventlistener
const btn1 = document.querySelector('button');
btn1.addEventListener('click', () => {
	alert('Hi, thanks for clicking!');
});

//map words into 'A.S.A.P.' format
const words = [ 'asap', 'byob', 'rsvp', 'diy' ];
const abbrvWords = words.map((e) => e.toUpperCase().split('').join('.').concat('.'));

//Tests

const books = [
	{ title: 'Good Omens', authors: [ 'Joe Prat', 'The Man Man' ], rating: 4.25, genre: [ 'ROM-COM', 'Fiction' ] },
	{ title: 'Weird Omens', authors: [ 'Jeff Smith' ], rating: 8.25, genre: [ 'SCI-Fi', 'Fiction' ] },
	{
		title: 'Jolly Omens',
		authors: [ 'Among Them', 'Joe Rascatoe' ],
		rating: 7.1,
		genre: [ 'Fantasy', 'Horror', 'Non-Fiction' ]
	}
];

const testNums = [ 15, 200, 345, 4, 5, 6, 7, 8, 9, 10, 55, 65, 1000, 99, 42, 42.5, 43, 10001 ];

// console.log(isValidPassword('testingyouout', 'yes'));
// console.log(isValidPassword('testingyouout', 'out'));
// console.log(isValidPassword('tesut', 'out'));
// console.log(isValidPassword('tesut diditjj', 'out'));
// console.log(isValidPassword('tesutdiditjj', 'out'));

// console.log(avg(20, 24));

console.log(isPangram('testing if panagram'));
console.log(isPangram('Vance Denson'));
console.log(isPangram('The five quickly box jumping wizards'));

let card = getCard();
console.log(`Your card is a ${card.value} of ${card.suit}`);

console.log(words);
console.log(abbrvWords);

//Arr.find()
console.log(abbrvWords.find((w) => w.includes('R')));
// console.log(`The book ${books.find((b) => b.rating == 10.0).title} got a perfect 5-star rating!`);

//Arr.filter()
console.log(books.filter((b) => b.rating >= 4));

//Arr.sort() func applies to array, slice to create new copy and display
console.log(testNums.slice());
console.log(testNums.slice().sort());
console.log(testNums.slice().sort((a, b) => b - a));
console.log(testNums.slice().sort((a, b) => a - b));

//Arr.reduce() -- aggregate functions
//sum example
console.log(testNums.reduce((a, b) => a + b));
//keep track of max value
console.log(testNums.reduce((a, b) => (a > b ? a : b), 10002)); //10002 is initial value here, becomes Max
//talley votes

const votes = [ 'y', 'y', 'n', 'y', 'n', 'absent', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y' ];

// console.log(
// 	votes.reduce((tally, vote) => {
// 		if (!tally[vote]) {
// 			tally[vote] = 0;
//         }
//         return {tally[vote]++};
// 		}
//     }, {}));

console.log(
	votes.reduce((tally, vote) => {
		tally[vote] ? tally[vote]++ : (tally[vote] = 1);
		return tally;
	}, {})
);

//Alternate refactor of ^^
console.log(
	votes.reduce((tally, vote) => {
		tally[vote] = (tally[vote] || 0) + 1;
		return tally;
	}, {})
);

//Default function params
// fuction a(x, y=1){

// }

//Bool password check: (>8 chars, no spaces, usnername not included)
// function isValidPassword(pass, username) {
//     if (pass.length < 8 || pass.includes(' ') || pass.includes(`${username}`)) {
//         return false;
//     }
//     return true;
// }

// Average of sum
// function avg(...args) {
//     let sum = 0;
//     for (let e of args) {
//         sum += e;
//     }
//     return sum / arguments.length;
// }

//spreading data into new array and mapping
console.log((votes2 = [ ...votes ].map((n) => n.concat('2'))));

//Destructuring
const [ var1, var2, var3, , var5, ...otherNums ] = testNums;
console.log(var3);
console.log(otherNums.sort((a, b) => b - a));

//function to parse response
const response = [ 'HTTP/1.1', '200 OK', 'application/json' ];
function parseResponse([ protocol, statusCode, contentType ]) {
	console.log(`Protocol: ${protocol}\nStatus: ${statusCode}\n${contentType}`);
}

parseResponse(response);

//Reducing to highest rated book object then interpolating into console log
const highestRatedBook = books.reduce((highestRated, curr) => {
	if (curr.rating > highestRated.rating) {
		highestRated = curr;
	}
	return highestRated;
});

console.log(`${highestRatedBook.title} by ${highestRatedBook.authors} is the highest rated book!`);

//Defining methods in functions

//new, just name method. name will be key, f will be value.
const auth = {
	username: 'testUser',
	login() {
		console.log('logged in');
	},
	logout() {
		console.log('logged out');
	}
};

//old
const auth2 = {
	username: 'testUser',
	login: function() {
		return console.log('logged in_OLD');
	},
	logout: function() {
		return console.log('logged out_OLD');
	}
};

auth.login();
auth2.login();

//arrow functions keep their this from closest/parent function

//Send annoying message to console every 3 seconds.
const annoyer = {
	phrases: [ 'litterally', 'ummmm', 'like', "I can't even", 'YOLO', "Totes ma' goat's" ],
	pickRandomPhrase() {
		const { phrases } = this;
		const randIDX = Math.floor(Math.random() * phrases.length);
		return phrases[randIDX];
	},
	start() {
		this.timerID = setInterval(() => {
			console.log(this.pickRandomPhrase());
		}, 2000);
	},
	stop() {
		clearInterval(this.timerID);
	}
};

//create deck of cards

//single object that generates a clean deck of cards, and removes one at random when drawCard() is called
const myDeck = {
	deck: [],
	cards: [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace' ],
	suits: [ 'Clubs', 'Spades', 'Hearts', 'Diamonds' ],
	makeDeck() {
		//clear deck and make new
		this.deck = [];
		for (let card of this.cards) {
			for (let suit of this.suits) {
				this.deck.push({ suit, card });
			}
		}
		return this.deck;
	},
	drawCard() {
		//if deck is empty, make a new, draw one at random and remove from deck
		if (myDeck.deck.length === 0) {
			this.makeDeck();
		}
		idxToRemove = this.pickRandomCard();
		cardToRemove = this.deck[idxToRemove];
		this.deck.splice(idxToRemove, 1);
		return `${cardToRemove.card} of ${cardToRemove.suit} was removed from the deck. ${this.deck
			.length} cards remaining!`;
	},
	pickRandomCard() {
		//pick random card to draw
		idx = Math.floor(Math.random() * this.deck.length);
		return idx;
	}
};

console.log(myDeck.drawCard());
