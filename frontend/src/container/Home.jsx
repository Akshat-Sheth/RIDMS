import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
 <>
  <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Interior Products Store</h1>
          <p>Discover the perfect pieces to make your home truly yours.</p>
          <button>Explore Now</button>
        </div>
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {/* Display your featured products here */}
          <div className="product-card">
            <img src="product1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of product 1</p>
          </div>
          <div className="product-card">
            <img src="product2.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>Description of product 2</p>
          </div>
          {/* Add more featured product cards as needed */}
        </div>
      </div>
 </>
  )
}

export default Home