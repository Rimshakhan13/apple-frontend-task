// src/App.js
import React from 'react';
import useProductData from './hooks/useProductData';
import ImageSlider from './components/ImageSlider';
import './App.css';

function App() {
  // Replace the API endpoint with your actual API endpoint
  const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts/1';
  const product = useProductData(apiEndpoint);

  return (
    <div className="App">
      <header>
        <h1>{product.name}</h1>
      </header>
      <section className="product-showcase">
        <ImageSlider images={product.images} />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <ul>
            {product.specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          <button className="interactive-button">Buy Now</button>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 Apple Inc.</p>
      </footer>
    </div>
  );
}

export default App;
