import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItemContainer from "../../components/checkout-item/checkout-item.container";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
const CheckoutPage = ({ total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>{" "}
      <div className="header-block">
        <span>Quantity</span>
      </div>{" "}
      <div className="header-block">
        <span>Price</span>
      </div>{" "}
      <div className="header-block">
        <span>Remove</span>
      </div>{" "}
    </div>
    <CheckoutItemContainer />

    <div className="total">
      <span>TOTAL ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for the payment*
      <br />
      4242 4242 4242 4242 - Expiry: 01/20 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
