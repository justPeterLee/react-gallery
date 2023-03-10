import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { GalleryList } from '../GalleryList/GalleryList';

import './App.css';

function App() {

  const [galleryList, setGalleryList] = useState([])

  const fetchGallery = () => {
    axios.get('/gallery')
    .then((response)=>{
      setGalleryList(response.data);
    })
    .catch((error)=>{
      console.log('error with GET request, ', error);
    })
  }

  const addLike = (id) => {
    axios.put(`/gallery/like/${id.id}`, {liked: id.isLiked})
    .then((response)=>{
      fetchGallery()
    })
    .catch((error)=>{
      console.log('error with like PUT request, ', error)
    })
  }
  useEffect(()=>{fetchGallery()}, []);

    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </div>
        <GalleryList galleryData={galleryList} onAddLike={addLike}/>
      </div>
    );
}

export default App;
