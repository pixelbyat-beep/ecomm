import React from 'react';
import '../styles/Strip.css';

const items = [
  'VELTARA FASHION',
  'NEW ARRIVALS',
  'FREE SHIPPING OVER ₹999',
  'EXCLUSIVE COLLECTIONS',
  'SHOP THE LATEST TRENDS',
  'LIMITED EDITION DROPS',
];

const Strip = () => {
  return (
    <div className="strip" id="strip">
      <div className="strip__track">
        {/* Duplicate items for seamless infinite scroll */}
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="strip__item">
            {item}
            <span className="strip__star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Strip;