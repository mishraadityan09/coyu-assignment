import React, { useState, useEffect, useRef } from 'react';
import image from "/public/oval.png"

const OvalCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const trackRef = useRef(null);

  const images = [
    '/oval.png',
    '/oval.png',
    '/oval.png',
    '/oval.png'
  ];

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const jumpImage = (jumpIndex) => {
    setCurrent(jumpIndex);
    setDragOffset(0);  // Reset drag offset when jumping to a specific image
  };

  const handleDragStart = (e) => {
    setStartX(e.clientX || e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const diff = startX - currentX;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (Math.abs(dragOffset) > 20) {
      if (dragOffset > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  useEffect(() => {
    const handleMove = (e) => isDragging && handleDragMove(e);
    const handleEnd = () => isDragging && handleDragEnd();

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleEnd);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, dragOffset]);

  const getImageStyle = (index) => {
    const position = (index - current + images.length) % images.length;
    const baseTransform = `translateX(${position * 120 - (dragOffset / (trackRef.current?.offsetWidth || 1)) * 100}%)`;
    return {
      backgroundImage: `url(${images[index]})`,
      transform: baseTransform,
      transition: isDragging ? 'none' : 'transform 0.6s ease-out'
    };
  };

  return (
    <div className="gallery-container">
      <div 
        className="gallery-track" 
        ref={trackRef}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
      >
        {images.map((_, index) => (
          <div 
            key={index}
            className="slide-image" 
            style={getImageStyle(index)}
          ></div>
        ))}
      </div>
      <div className="gallery-footer">
        {images.map((_, index) => (
          <div 
            key={index}
            className={`indicator ${index === current ? 'active' : ''}`} 
            onClick={() => jumpImage(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default OvalCarousel;