import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const calculateSubtotal = () => {
    const price = parseFloat(item.cost.substring(1));
    return (price * item.quantity).toFixed(2);
  };

  const handleIncrement = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem({ name: item.name }));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem({ name: item.name }));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-image" />
      <div className="cart-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Price: {item.cost}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Subtotal: ${calculateSubtotal()}</p>
        <div className="cart-actions">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
