import React from "react";

import './GalleryItem.css';

export function GalleryItem(props){
    return(
        <div>
            <div className="picture-container" style={{backgroundImage:`url(${props.path})`}}></div>
            <div><p>{`likes`}</p></div>
        </div>
    )
}