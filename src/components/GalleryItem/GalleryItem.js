import React, { useState } from "react";

import "./GalleryItem.css";

export function GalleryItem(props) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDesc = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="item-container">
      {!showDescription ? (
        <div
          className="picture-container"
          style={{ backgroundImage: `url(${props.path})` }}
        >
          <div className="description-overlay" onClick={toggleDesc}>
            show description
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
        <p>{`likes · ${props.likes}`}</p>
      </div>
    </div>
  );
}
