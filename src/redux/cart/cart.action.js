import { TOGGLE_CART_HIDDEN, CART_ADD_ITEM } from "../config";

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
    type: CART_ADD_ITEM,
    payload: item,
});
