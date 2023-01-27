import React from "react";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import "./GalleryList.css";

export function GalleryList(props) {
    const onAddLike = (id) => {
        props.onAddLike(id)
    }
  return (
    <div className="gallery-container">
        {props.galleryData.map((picture)=>(
            <GalleryItem 
                key={picture.id}
                path={picture.path}
                description={picture.description}
                likes={picture.likes}
                id={picture.id}
                isLiked={picture.isLiked}

                onAddLike={onAddLike}
            />
        ))}
    </div>
    );
}
