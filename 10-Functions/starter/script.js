'use strict';

/*const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //numPassengers=numPassengers||1;
  // price=price||199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH1234', 5);

createBooking('LH23', undefined, 1999); //skip a default parameter that we want to leave to deafult
*/

/*const flight = 'LH234';
const jonas = {
  name: 'jonas sch',
  passport: 23423423,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH99';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 23423423) {
    alert('check in');
  } else {
    alert('wrong passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher-order function
const transformer = function (str, fn) {
  console.log(`original:${str}`);
  console.log(`transformed string: ${fn(str)}`);
  console.log(`transformed by:${fn.name}`);
};

transformer('Javacript is the best!', upperFirstWord);
transformer('Javacript is the best!', oneWord);*/

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetHey = greet('hey');
// greetHey('jopnas');
// greetHey('steven');

// greet('hello')('jonasss');

// const greetarrow = greetingarrow => {
//   return namearrow => console.log(`${greetingarrow} ${namearrow}`);
// };
/*const greetarrow = greeting => name => console.log(`${greeting} ${name}`);

const greetHey = greetarrow('hey');
greetHey('jopnas');
greetHey('steven');

greetarrow('hello')('jonasss');
*/
/*
const lufthansa = {
  airline: 'lufthansa',
  code: 'LH',
  bookings: [],
  book(flighnum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code} ${flighnum}`
    );
    this.bookings.push({ flight: `${this.code} ${flighnum} , ${name}` });
  },
};

lufthansa.book(234, 'jonas');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'euro',
  code: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//does not work
// book(23, 'sarah williams');

//call method
book.call(eurowings, 23, 'sarah williams');
console.log(eurowings);

//apply method
const flightData = [546, 'grorge'];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData);

//bind method
//create a new function with this keyword set to eurowings
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(2345, 'steven will');

//partial apllication
const bookEW23 = book.bind(eurowings, 23);
bookEW23('jonas');
bookEW23('cooper');

//with event lisyeners
lufthansa.planes = 300;
lufthansa.buyplane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT=value => value + value * 0.23;

console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// console.log(poll.answers);
// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
*/

//IIFE - immediatly invoke function expression
/*
const runOnce = function () {
  console.log('This will  never run again');
};

runOnce();

// using () we transformed statement in to expression
// this is IIFE
(function () {
  console.log('This will  never run again');
})();

(() => console.log('This will  never run again'))();

//block
{
}
*/

//CLOSURE
/*const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/
// let f;

// const g = function () {
//   f = function () {
//     console.log(a * 2);
//   };
//   const a = 23;
// };

// const h = function () {
//   f = function () {
//     console.log(b * 2);
//   };
//   const b = 777;
// };

// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();
// console.dir(f);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
