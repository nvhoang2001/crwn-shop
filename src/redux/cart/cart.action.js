import {
    TOGGLE_CART_HIDDEN,
    CART_ADD_ITEM,
    CARD_CLEAR_ITEM,
    REMOVE_ITEM,
} from "../config";

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
    type: CART_ADD_ITEM,
    payload: item,
});

export const clearItem = item => ({
    type: CARD_CLEAR_ITEM,
    payload: item,
});

export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item,
});
