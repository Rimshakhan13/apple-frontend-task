// src/components/ImageSlider.js
import React from 'react';

const ImageSlider = ({ images }) => {
  return (
    <div className="slider">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Product Image ${index}`} />
      ))}
    </div>
  );
};

export default ImageSlider;
