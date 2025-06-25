// Navbar.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo192.png" alt="Logo" className="logo-icon" />
        <div>
          <h3>Paradise Nursery</h3>
          <p className="tagline">Where Green Meets Serenity</p>
        </div>
      </div>
      <ul className="ul">
        <li>Plants</li>
        <li className="cart-icon">🛒 {totalItems}</li>
      </ul>
    </div>
  );
};

export default Navbar;
