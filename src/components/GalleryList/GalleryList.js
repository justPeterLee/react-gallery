import React from "react";

import { GalleryItem } from "../GalleryItem/GalleryItem";
import "./GalleryList.css";

export function GalleryList({ galleryData }) {
  return (
    <div className="gallery-container">
        {galleryData.map((picture)=>(
            <GalleryItem 
                key={picture.id}
                path={picture.path}
                description={picture.description}
                likes={picture.likes}
            />
        ))}
    </div>
    );
}
