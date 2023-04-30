const {
  CardField,
  useConfirmPayment,
  StripeProvider,
} = require('@stripe/stripe-react-native');
import {StyleSheet, View} from 'react-native';
import {postCrop} from '../utils/Data';
import {Button} from 'react-native-paper';
import theme from '../assests/Theme/theme';
import {useNavigation} from '@react-navigation/native';

export function PaymentScreen(props) {
  const {confirmPayment, loading} = useConfirmPayment();
  const {user, order, totalValue} = props?.route.params;
  const navigation = useNavigation();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(
      `${process.env.BASE_URL}/payment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalValue,
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

  const handlePayment = async () => {
    let responses = [];
    order.map(async el => {
      const res = await postCrop(
        '/transaction/createTransaction',
        user[0]?.token,
        {
          quantity: el?.qty,
          amount: el?.qty * el?.price,
          crop_id: el?._id,
          buyer_id: user[0]?.user._id,
          seller_id: el?.uid._id,
        },
      );
      responses.push('res', res);
    });
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
        await handlePayment();
        // navigation.replace("CheckoutScreen", {user, order: []})
      }
    }
    // Confirm the payment with the card details
  };
  return (
    <StripeProvider
      // urlScheme='https://buy.stripe.com/test_aEU9CBdYN0EKa1q288'
      publishableKey="pk_test_51My62bSCnVk1jyBhf0hzJTREKPSqnjiktrKyularQBreXv01PAhTfj1EUgkcUCGvVysRawKdrXHy74AnqQCwgXNx00YkRkDIoe"
      merchantIdentifier="merchant.com.AwesomeProject" // required for Apple Pay
    >
      {/* <> */}
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={styles.cardField}
      />
      {/* <Provider>
            <Portal>
              <Dialog visible={true} onDismiss={()=> {}}>
                <Dialog.Content>
                  <Text variant="bodyMedium">This is simple dialog</Text>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={() => {}}>Done</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
        </Provider> */}
      <Button
        onPress={handlePayPress}
        mode="contained"
        theme={theme}
        style={{width: '50%', alignSelf: 'center'}}>
        Submit
      </Button>
      {/* </> */}
    </StripeProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  cardField: {
    height: 35,
    width: '100%',
  },
});
