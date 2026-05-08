import React from 'react';
import '../styles/NewArrival.css';
import newArrivalImg from '../media/newarrival.png';

const NewArrival = () => {
  return (
    <section className="new-arrival" id="sale">
      <div className="new-arrival__inner">
        {/* Left — image side */}
        <div className="new-arrival__media">
          <img
            className="new-arrival__video"
            src={newArrivalImg}
            alt="New Arrival Collection"
          />
        </div>

        {/* Right — text side */}
        <div className="new-arrival__content">
          <p className="new-arrival__eyebrow">LIMITED TIME DEAL</p>
          <h2 className="new-arrival__heading">
            30% OFF ON ALL<br />NEW ARRIVAL
          </h2>
          <p className="new-arrival__date">Offer Last Date 30 September</p>
          <button className="new-arrival__btn">Explore Now</button>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;