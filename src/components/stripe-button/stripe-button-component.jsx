import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100,
        publishableKey =
            "pk_test_51J7tZFAKuIJ92SHigNetWfLXZD6VC2QEmi8TZTUCn9iiq9AOaNawtZENA8WTypwubxKsutMnfFVmgt3R7faEM97q00KU8u1wXQ",
        onToken = token => {
            console.log(token);
            alert("Payment Successful");
        };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
