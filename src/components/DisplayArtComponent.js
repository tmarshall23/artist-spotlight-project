import React from 'react';

function RenderPainting( {artwork} ) {
    return(
        <div>
            
            <img width="100%" src={artwork.image} alt={artwork.name} />

        </div>  
    )
}

function RenderDescription( {artwork} ) {
    return(
        <div>
            <h5>{artwork.name}</h5>
            <p>{artwork.description}</p>
        </div>
    )
}

const Display = (props) => {
    return (
        <div className="container">
            <div className="row"></div>
                <RenderPainting artwork = {props.artwork}/>
                <RenderDescription artwork = {props.artwork}/>
        </div>

    )
}

export default Display;