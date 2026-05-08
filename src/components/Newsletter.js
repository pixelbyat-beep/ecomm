import React, { useState } from 'react';
import '../styles/Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.trim() && email.includes('@')) {
      setSubmitted(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <section className="newsletter">
      <div className="newsletter__card">
        <h2 className="newsletter__title">SUBSCRIBE OUR NEWSLETTER</h2>
        <p className="newsletter__desc">
          Stay connected with the latest trends, exclusive offers, and behind-the-scenes updates
          by subscribing to our newsletter. Be the first to discover new collections and special
          promotions tailored just for you!
        </p>

        {!submitted ? (
          <div className="newsletter__input-row">
            <input
              type="email"
              className="newsletter__input"
              placeholder="Enter Your Email address here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="newsletter__submit"
              onClick={handleSubmit}
              aria-label="Subscribe"
            >
              →
            </button>
          </div>
        ) : (
          <div className="newsletter__success">
            ✓ Thank you! You're now subscribed.
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;