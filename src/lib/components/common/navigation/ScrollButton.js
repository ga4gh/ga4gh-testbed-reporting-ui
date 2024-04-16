import React, { useState } from 'react';
import '../../../styles/common/navigation/ScrollButton.css';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Add scroll event listener to check visibility
  window.addEventListener('scroll', handleScroll);

  return (
    <button
      className={`scroll-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      Back to Top
    </button>
  );
};

export default ScrollButton; 