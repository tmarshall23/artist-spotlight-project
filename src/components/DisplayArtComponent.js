import React from 'react';
import '../home.css';
import "@fontsource/montserrat";
import { useParams } from 'react-router-dom';

function RenderPainting( {artwork} ) {
    return(
        <div>
            
            <img width="100%" src={artwork.image} alt={artwork.name} />

        </div>  
    );
}

function RenderDescription( {artwork} ) {
    return(
        <div>
            <h5>{artwork.name}</h5>
            <p>{artwork.description}</p>
        </div>
    );
}

const Display = (props) => {
    let params = useParams();

    const display = props.artworks.filter((art) => art.name === params.artistName)[0];
    console.log(display);

    
    return (
        <div className="container">
            <div className="row">
                <RenderPainting artwork = {display}/>
                <RenderDescription artwork = {display}/>
            </div>
        </div>

    );
}

export default Display;