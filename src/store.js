// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice.jsx'; // Adjust path if needed

const store = configureStore({
  reducer: {
    cart: cartReducer, // You can access this state via state.cart in components
  },
});

export default store;
