import React from 'react';
import '../styles/Categories.css';

import menVideo from '../media/men.mp4';
import womenVideo from '../media/women.mp4';
import kidsVideo from '../media/kids.mp4';
import accessoriesVideo from '../media/accessories.mp4';

const categories = [
  {
    id: 1,
    label: 'MEN',
    tag: 'CLASSIC & BOLD',
    video: menVideo,
  },
  {
    id: 2,
    label: 'WOMEN',
    tag: 'ELEGANT & FIERCE',
    video: womenVideo,
  },
  {
    id: 3,
    label: 'KIDS',
    tag: 'PLAYFUL & BRIGHT',
    video: kidsVideo,
  },
  {
    id: 4,
    label: 'ACCESSORIES',
    tag: 'DETAIL MATTERS',
    video: accessoriesVideo,
  },
];

const Categories = () => {
  return (
    <section className="categories" id="shop">
      <div className="categories__header">
        <p className="categories__eyebrow">BROWSE BY</p>
        <h2 className="categories__title">OUR CATEGORIES</h2>
      </div>

      <div className="categories__grid">
        {categories.map((cat) => (
          <div key={cat.id} className="categories__card">
            <video
              className="categories__card-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={cat.video} type="video/mp4" />
            </video>
            <div className="categories__card-overlay" />
            <div className="categories__card-content">
              <span className="categories__card-tag">{cat.tag}</span>
              <h3 className="categories__card-label">{cat.label}</h3>
              <button className="categories__card-btn">SHOP NOW →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;