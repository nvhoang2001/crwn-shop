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
