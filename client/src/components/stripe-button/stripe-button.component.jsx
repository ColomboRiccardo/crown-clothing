import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51HwSwmB3Wral9laZKDF51yIihvEaGZVCBcS82FYSPvavdV40XuSu64WeLU10rRtP9U3OI1PDDtGkjpYeYR97Ub2o00EjW953Tb';

	const onToken = token => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then(response => {
				alert('Payment successful');
			})
			.catch(error => {
				console.log('Payment error: ', JSON.parse(error));
				alert(
					'There was an issue with your payment. Use the test credit card please.'
				);
			});
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CROWN clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://sendeyo.com/up/d/f3eb2117da'
			description={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
