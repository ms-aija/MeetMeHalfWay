import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/airplane-dots.json';

function Navbar() {
  // -- Setup for Lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section className="Navbar">
      <div className="navbar-title-animation">
        <h1>
          MeetMeHalf<span>W</span>ay
        </h1>
        <div>
          <Lottie options={defaultOptions} height={30} width={123} />
        </div>
      </div>
      <p>Discover some common destinations served by direct flights</p>
    </section>
  );
}

export default Navbar;
