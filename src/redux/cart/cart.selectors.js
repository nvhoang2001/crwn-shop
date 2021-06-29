import { createSelector } from "reselect";
import { propsSum } from "../helpers";

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => propsSum(cartItems, "quantity")
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);
