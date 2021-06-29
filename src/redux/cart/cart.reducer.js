import {
    TOGGLE_CART_HIDDEN,
    CART_ADD_ITEM,
    CARD_CLEAR_ITEM,
    REMOVE_ITEM,
} from "../config";
import { addItemToCart, filterItem, removeItem } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };

        case CART_ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        case CARD_CLEAR_ITEM:
            return {
                ...state,
                cartItems: filterItem(state.cartItems, action.payload),
            };

        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
