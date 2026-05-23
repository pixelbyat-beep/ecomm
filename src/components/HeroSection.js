import React from 'react';
import '../styles/HeroSection.css';
import heroVideo from '../media/make_a_moving_video_of_these_t.mp4';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <video
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="hero__overlay" />

      {/* Hero content */}
      <div className="hero__content">
        <p className="hero__eyebrow">NEW COLLECTION 2025</p>
        <h1 className="hero__title">
          DEFINE<br />YOUR LOOK
        </h1>
        <p className="hero__subtitle">
          Curated fashion for the bold & the refined
        </p>
        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary">SHOP NOW</button>
          <button className="hero__btn hero__btn--secondary">EXPLORE ALL</button>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;
