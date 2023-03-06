import React from 'react';

function Cart(props) {
  const { cart } = props;

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
