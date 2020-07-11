//Selectors are used to memoization so that our MSTP and MDTP does not continuously run whenever another state get updated. 

import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 
    0
    )
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
         cartItems.reduce(
           (accumalatedQuantity, cartItem) =>
             accumalatedQuantity + cartItem.quantity * cartItem.price,
           0
         )
       );