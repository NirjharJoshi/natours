/*eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51Miyp6SBJUKxL2ZdDEcC7cxydLHVcQSDPhxfKwOPOGaiuXL8uPTq4pzP8f1WkLXWO5PyfyabfagXF4uLOgXNMJ94003kIkDwil'
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from endpoint from API
    // const session = await axios(
    //   `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    // );
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + charge creadit card
    await stripe.redirectToCheckout({ sessionId: session.data.session.id });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
