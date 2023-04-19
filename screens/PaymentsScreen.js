const {CardField, useConfirmPayment, StripeProvider} = require('@stripe/stripe-react-native');
import {View, Button} from 'react-native';
export function PaymentScreen() {
  const {confirmPayment, loading} = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(
      `https://6431-2409-4051-2e1a-3180-ec37-5413-3ca8-b38.in.ngrok.io/payment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currency: 'inr',
        }),
      },
    )
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err, 'error');
      });
    return response;
  };

  const handlePayPress = async () => {
    // Gather the customer's billing information (for example, email)
    const billingDetails: BillingDetails = {
      email: 'jenny.rosen@example.com',
    };

    // Fetch the intent client secret from the backend
    const clientSecret = await fetchPaymentIntentClientSecret();
    if (clientSecret) {
      const {paymentIntent, error} = await confirmPayment(
        clientSecret.paymentIntent,
        {
          type: 'Card',
          billingDetails,
          paymentMethodType: 'Card',
        },
      );
      if (error) {
        console.log('Payment confirmation error', error);
      } else if (paymentIntent) {
        console.log('Success from promise', paymentIntent);
      }
    }
    // Confirm the payment with the card details
  };
  return (
    <StripeProvider
    publishableKey="pk_test_51My62bSCnVk1jyBhf0hzJTREKPSqnjiktrKyularQBreXv01PAhTfj1EUgkcUCGvVysRawKdrXHy74AnqQCwgXNx00YkRkDIoe"
    // urlSchem // required for 3D Secure and bank redirects
    merchantIdentifier="merchant.com.AwesomeProject" // required for Apple Pay
  >

      <CardField
       
        postalCodeEnabled={true}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={cardDetails => {
          //   console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
          //   console.log('focusField', focusedField);
        }}
      />
      <Button onPress={handlePayPress} title="Sumbit"></Button>
  </StripeProvider>
  );
}
