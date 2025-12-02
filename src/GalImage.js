import React from "react";

function GalImage(id, url, favourited) {
    return(
        // <img url={url}></img>
        <>{id} {url} {favourited}</>
    )
}