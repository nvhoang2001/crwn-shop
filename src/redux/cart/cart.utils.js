export const addItemToCart = (cartItems, itemWillAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemWillAdd.id
    );

    if (existingCartItem)
        return cartItems.map(cartItem =>
            cartItem.id === itemWillAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    return [...cartItems, { ...itemWillAdd, quantity: 1 }];
};

export const filterItem = (cartItems, item) =>
    cartItems.filter(cartItem => cartItem.id !== item.id);

export const removeItem = (cartItems, item) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === item.id
    );

    if (existingCartItem.quantity === 1) {
        return filterItem(cartItems, item);
    }
    return cartItems.map(item =>
        item.id === existingCartItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
    );
};
