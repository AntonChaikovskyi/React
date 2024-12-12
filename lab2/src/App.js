import React from 'react';
import { LazyImage } from './components/LazyImage';
import './styles/LazyImage.css';

function App() {
  return (
    <div>
      <h1>Lazy Loading Test</h1>
      <LazyImage
        src="https://cn22.nevsedoma.com.ua/p/26/2660/113_files/238923_1_nevsedoma_com_ua.jpg"
        placeholder="https://cn22.nevsedoma.com.ua/p/26/2660/113_files/238923_1_nevsedoma_com_ua.jpg"
        alt="Lazy loaded example"
      />
    </div>
  );
}

export default App;
