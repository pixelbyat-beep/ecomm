import React from 'react';
import '../styles/TrendingProducts.css';

import oversizedTrenchImg from '../media/oversized_trench.jpg';
import satinMiniDressImg from '../media/satin_mini_dress.jpg';
import cargoImg from '../media/cargo.jpg';
import linenBlazerImg from '../media/linen_blazer.jpg';

const products = [
  {
    id: 1,
    name: 'OVERSIZED TRENCH',
    price: '₹3,499',
    tag: 'BESTSELLER',
    image: oversizedTrenchImg,
  },
  {
    id: 2,
    name: 'SATIN MIDI DRESS',
    price: '₹2,899',
    tag: 'NEW',
    image: satinMiniDressImg,
  },
  {
    id: 3,
    name: 'CARGO WIDE LEG',
    price: '₹1,999',
    tag: 'TRENDING',
    image: cargoImg,
  },
  {
    id: 4,
    name: 'LINEN BLAZER SET',
    price: '₹4,299',
    tag: 'HOT',
    image: linenBlazerImg,
  },
];

const TrendingProducts = () => {
  return (
    <section className="trending">
      <div className="trending__header">
        <p className="trending__eyebrow">WHAT'S HOT RIGHT NOW</p>
        <h2 className="trending__title">TRENDING PRODUCTS</h2>
      </div>

      <div className="trending__grid">
        {products.map((product) => (
          <div key={product.id} className="trending__card">
            <div className="trending__card-media">
              <img
                className="trending__card-video"
                src={product.image}
                alt={product.name}
              />
              {product.tag && (
                <span className="trending__card-tag">{product.tag}</span>
              )}
              <button className="trending__card-wishlist" aria-label="Add to wishlist">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
            </div>
            <div className="trending__card-info">
              <h3 className="trending__card-name">{product.name}</h3>
              <div className="trending__card-bottom">
                <span className="trending__card-price">{product.price}</span>
                <button className="trending__card-add">+ ADD</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;