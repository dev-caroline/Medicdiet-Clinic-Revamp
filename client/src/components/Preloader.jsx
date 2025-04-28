import React, { useEffect, useState } from 'react';

const Preloader = ({ onLoaded }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and then trigger onLoaded callback
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoaded();  // Call the callback to trigger animations
    }, 2000); // 2 seconds for the preloader to show

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    isLoading && (
      <div id="preloader">
        <div className="spinner"></div>
      </div>
    )
  );
};

export default Preloader;

