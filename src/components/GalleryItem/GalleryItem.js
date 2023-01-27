import React, { useState } from "react";

import "./GalleryItem.css";
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
export function GalleryItem(props) {
  const [showDescription, setShowDescription] = useState(false);
  const [changeLiked, setChangeLiked] = useState(props.isLiked);

  const toggleLike = ()=>{
    setChangeLiked(!changeLiked)
  }
  const toggleDesc = () => {
    setShowDescription(!showDescription);
  };

  const addLike = () => {
    toggleLike()
    props.onAddLike({id: props.id, isLiked: changeLiked})
    
  }

  return (
    <div className="item-container">
      {!showDescription ? (
        <div
          className="picture-container"
          style={{ backgroundImage: `url(${props.path})` }}
        >
          <div className="description-overlay" onClick={toggleDesc}>
            (show description)
          </div>
        </div>
      ) : (
        <div
          className="description-container"
          onClick={toggleDesc}
        >
            {props.description}
        </div>
      )}
      <div className="likes-container">
       {!changeLiked ? <p className="likes-text" onClick={addLike}><AiOutlineHeart/></p> : <p className="likes-text" style={{color:'#CD5C5C'}}onClick={addLike}><AiFillHeart/></p>}<p>{props.likes}</p>
      </div>
    </div>
  );
}
