// Importing configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the reducer for the 'cart' slice from CartSlice
import cartReducer from './redux/CartSlice';

// Create and configure the Redux store
const store = configureStore({
  // Define the root reducer object
  reducer: {
    // 'cart' is the name of the slice in the store, and it's managed by cartReducer
    cart: cartReducer,
  },
});

// Export the configured store for use throughout the app
export default store;
