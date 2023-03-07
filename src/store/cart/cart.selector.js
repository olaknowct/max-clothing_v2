import { createSelector } from 'reselect';

const newCartTotal = newCartItems.reduce(
  (total, cartItem) => total + cartItem.quantity * cartItem.price,
  0
);

const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
