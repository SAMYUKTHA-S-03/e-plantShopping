import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './redux/CartSlice';
import './ProductList.css';
import { products } from './productsData';

function ProductList({ onHomeClick }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const isInCart = (productId) =>
    cartItems.some((item) => item.id === productId);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list-container">
      <button className="back-button" onClick={onHomeClick}>
        ⬅ Back to Home
      </button>
      <h2 className="product-list-title">Explore Our Plants</h2>
      <div className="product-grid">
        {products.map((product) => {
          const added = isInCart(product.id);
          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-cost">{product.cost}</p>
              <button
                className={`add-to-cart-button ${added ? 'disabled' : ''}`}
                onClick={() => handleAddToCart(product)}
                disabled={added}
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;


