'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: openingHours, //before ES6
  //ES6 enchanced object literals
  openingHours,
  oerder() {
    //does not need : and function keyword
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   // console.log(item);
//   console.log(`${item[0] + 1}:${item[1]}`);
// }
//using destructuring
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }

// console.log([...menu.entries()]);

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// restaurant.openingHours.fri && console.log(restaurant.openingHours.fri.open);

// //with optional chaining(?.)

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //example

// const days = ['mon', 'tue', 'wed', 'thu', 'fri'];

// for (const d of days) {
//   const open = restaurant.openingHours[d]?.open ?? 'closed';
//   console.log(`on ${d}, we open at ${open}`);
// }

// //methods

// console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
// console.log(restaurant.orderrisoto?.(0, 1) ?? 'method does not exist');

// //arrays

// const users = [{ name: 'jonas', email: 'kjedfbne' }];

// console.log(users[0]?.name ?? 'user array empty');

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

//property names
// const properties = Object.keys(openingHours);
// console.log(properties);
// // console.log(`we are oprn on ${properties.length} days`);
// let openStr = `we are oprn on ${properties.length} days:`;

// for (const day of properties) {
//   openStr += `${day},`;
// }

// console.log(openStr);

// //property values

// const value = Object.values(openingHours);
// console.log(value);

// //entire object
// const entries = Object.entries(openingHours);

// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and ${close}`);
// }

// for (const [i, name] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} : ${name}`);
// }

// let sum = 0;
// const a = Object.values(game.odds);
// for (const avg of a) {
//   sum += avg;
// }
// const avearge = sum / a.length;

// console.log(avearge);

// for (const [key, value] of Object.entries(game.odds)) {
//   const teamStr = key === 'x' ? 'draw' : `victory ${game[value]}`;
//   console.log(`Odd of ${teamStr}: ${value}`);
// }

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log(scorers);

//SETS
// const ordersSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'risoto',
//   'pasta',
//   'pizza',
// ]);

// console.log(ordersSet);
// console.log(new Set('jonas'));
// console.log(new Set());
// console.log(ordersSet.size);
// console.log(ordersSet.has('pizza'));
// ordersSet.add('garlic bread');
// ordersSet.add('garlic bread');
// ordersSet.delete('risoto');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('safbjskvhsbvsv').size);

//MAPS
/*
const rest = new Map();
rest.set('name', 'classico');
rest.set(1, 'italy');
// console.log(rest.set(2, 'portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 2)
  .set('close', 22)
  .set(true, 'we are open')
  .set(false, 'closed');
// console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time < rest.get('close') && time > rest.get('open')));

console.log(rest.has('categories'));
rest.delete(1);
const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);
// rest.clear();

console.log(rest.get(arr));
*/
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

//COnvert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//iteration
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`answer${key}:${value}`);
}

// const answer = Number(prompt('your answer'));
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));

//convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log(question.keys());
console.log([...question.values()]);
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(`An event happened, on average, every 9 minutes`);

// for (const [key, value] of gameEvents) {
//   console.log(
//     key <= 45
//       ? `[FIRST HALF] ${key}: ${value}`
//       : `[SECOND HALF] ${key}: ${value}`
//   );
// }
// for (const [key, value] of gameEvents) {
//   const half = key <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${key}: ${value}`);
// }

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));
