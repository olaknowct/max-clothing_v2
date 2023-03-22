import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';

import { RootState } from '../store';

const selectCartReducer = (state: RootState): CartState => {
  return state.cart;
};
// 1st and 2nd argument runs for the first time
// 2nd argument dont run when first argument didn't change
export const selectCartItems = createSelector([selectCartReducer], (cart) => {
  return cart.cartItems;
});

export const selectIsCartOpen = createSelector([selectCartReducer], (cart) => {
  return cart.isCartOpen;
});

export const selectCartCount = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
});

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
});
