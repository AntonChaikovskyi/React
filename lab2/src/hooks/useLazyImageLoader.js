import { useState, useEffect } from 'react';

export function useLazyImageLoader(src) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true); // Змінюємо стан на "завантажено"
    img.onerror = () => console.error(`Image failed to load: ${src}`);
  }, [src]);

  return loaded;
}
