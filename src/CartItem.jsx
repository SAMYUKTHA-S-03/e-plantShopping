import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './redux/CartSlice';
import './cartitem.css';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const calculateSubtotal = () => {
    const price = parseFloat(item.cost.substring(1));
    return (price * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-cost">{item.cost}</div>
        <div className="cart-item-quantity">
          <button className="cart-item-button" onClick={handleDecrement}>-</button>
          <div className="cart-item-quantity-value">{item.quantity}</div>
          <button className="cart-item-button" onClick={handleIncrement}>+</button>
        </div>
        <div className="cart-item-total">Subtotal: ₹{calculateSubtotal()}</div>
        <button className="cart-item-delete" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
