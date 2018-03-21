// Payments.js

import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Glyphs"
        description="$100 monthly access"
        amount={10000} //in cents
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Payment</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
