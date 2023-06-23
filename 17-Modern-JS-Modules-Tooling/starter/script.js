// Importing Module
// import { addToCart, totalPrince as tp, tq } from './shoppingCart.js';
//importing statements are hoisting to the top
// all modules are executed in strict mode by default
console.log('importing module');
// addToCart('bread', 5);
// console.log(tp, tq);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('brad', 5);
// console.log(ShoppingCart.totalPrince);

// import add, { addToCart, totalPrince as tp, tq } from './shoppingCart.js';
// console.log(tp);

import add, { cart } from './shoppingCart.js';
add('jam', 2);
add('pizza', 5);
add('bread', 3);
add('apples', 9);

console.log(cart);
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart(shopping cost is ${shoppingCost})`
    );
  };
  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shoppingCost);
*/
/*
//export
export.addToCart=function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart(shopping cost is ${shoppingCost})`
    );
  };

  //import
  const {addToCart}=require('./shoppingCart.js')
*/

// import cloneDeeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeeep from 'lodash-es';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateCLone = Object.assign({}, state);
const stateDeepClone = cloneDeeep(state);
console.log(stateCLone);

state.user.loggedIn = false;
console.log(stateCLone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
