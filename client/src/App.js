import './App.css';
import Navbar from './components/Navbar';
import ImageList from './components/ImageList';
import { getImages } from './utils/imageService';
import {useEffect, useState} from 'react';


function App() {

  const [image, setImages] = useState([]);
  useEffect(() => {
        getImages().then(ImageList => setImages(ImageList))
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ImageList image={image} setImages={setImages}/>
      </header>
    </div>
  );
}

export default App;
