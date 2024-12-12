import React from 'react';
import { useLazyImageLoader } from '../hooks/useLazyImageLoader';
import '../styles/LazyImage.css';

export function LazyImage({ src, placeholder, alt }) {
  const loaded = useLazyImageLoader(src);

  return (
    <div className="lazy-image-wrapper">
      {}
      <img
        className={`lazy-image ${loaded ? 'loaded' : 'loading'}`}
        src={loaded ? src : placeholder}
        alt={alt}
      />
    </div>
  );
}
