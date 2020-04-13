import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "./checkout-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CheckoutItemContainer = ({ cartItems }) => {
  return cartItems.map((cartItem) => (
    <CheckoutItem cartItem={cartItem} key={cartItem.id} />
  ));
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutItemContainer);
