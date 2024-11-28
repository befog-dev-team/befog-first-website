import "@/css/background.css";
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

const Background = React.memo(() => {
  const starLayers = useMemo(() => {
    return (
      <>
        <div className="layer"></div>
        <div className="layer"></div>
        {/* Add more layers if needed */}
      </>
    );
  }, []);

  return (
    <div className="bg fixed min-h-screen">
      <div className="star-field">
        {starLayers}
      </div>
    </div>
  );
});

// Add display name for the component
Background.displayName = "Background";

export default Background;
