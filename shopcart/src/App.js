import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from './logo.svg';
import './App.css';

const products = [
  {
    id: 1,
    image: '/products/cologne.jpg',
    name: 'Unisex Cologne',
    quantity: 0,
  },
  {
    id: 2,
    image: '/products/iwatch.jpg',
    name: 'Apple iWatch',
    quantity: 0,
  },
  {
    id: 3,
    image: '/products/mug.jpg',
    name: 'Unique Mug',
    quantity: 0,
  },
  {
    id: 4,
    image: '/products/wallet.jpg',
    name: ' Mens Wallet',
    quantity: 0,
  },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const updateQuantity = (productId, quantity) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, quantity } : product
    );
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="Shop">Shop to React</h1>
        <div className="cart-info">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="item-count">{cart.length} items</span>
        </div>
      </div>
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
           <h3>{product.name}</h3>
          <img src={product.image} alt={product.name}/>
          <input
              type="number"
              value={product.quantity}
              onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
              min="0"
            />
            <span className="quantity-label">quantity</span>
          
        </div>
      ))}
    </div>
 
  </div>
  );
}

export default App;
