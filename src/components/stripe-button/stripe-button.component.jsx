import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButtom = ({ price }) => {
    const priceForStripe = price * 100 //stripe requires prices to be in cents. 
    const publishableKey = 'pk_test_51H51ivJexRt9eSfKp2Qwp1mY5x3JjDcBuw1PVjD0jGyEavbFJCulIfkqyGsMHmibnYxvrKDKytksL7qbz5hhm7r800hia9joQz'

const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Shopper'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButtom;