"use client"
import React, { useEffect, useRef } from 'react';

function Rotator() {
  const imgRef = useRef<HTMLImageElement>(null);
  let rotation = 0;

  useEffect(() => {
    const imgElement = imgRef.current;

    if (!imgElement) return;

    const handleScroll = () => {
      rotation += 1;
      if (rotation > 365) rotation %= 365;

      imgElement.style.transform = `rotate(${rotation}deg)`;

      // Uncomment the line below for smooth animation
      // imgElement.style.transition = 'transform 0.1s ease-in-out';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="rotator">
        <div style={{ position: 'absolute', pointerEvents: 'none', userSelect: 'none', borderRadius: 'inherit', top: 0, right: 0, bottom: 0, left: 0 }} data-framer-background-image-wrapper="true">
            <div style={{ display: 'contents', borderRadius: 'inherit', pointerEvents: 'none' }}>
              <img ref={imgRef} src="https://framerusercontent.com/images/Jd51DWOxRe2H9zt5chkFIujpM.png" alt="Translucent blob, iridescent blob" style={{ pointerEvents: 'none', userSelect: 'none', display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center', objectFit: 'contain', imageRendering: 'auto' }} />
            </div>
        </div>
    </div>
  );
}

export default Rotator;
