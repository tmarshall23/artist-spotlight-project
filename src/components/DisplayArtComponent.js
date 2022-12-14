import React from 'react';
import { Card, CardImg, CardBody, CardTitle, NavItem} from 'reactstrap';
import '../display.css';
import "@fontsource/montserrat";
import { useParams, NavLink } from 'react-router-dom';

function RenderPainting( {artwork} ) {
    return(
        <>
            <Card>
                <CardImg src={artwork.image} alt={artwork.name} />

            </Card>
        </>
        
    );
}

function RenderDescription( {artwork} ) {
    return(
        
        <>
            <Card>
                <CardBody className='display'>            
                    <h5>{artwork.artistName}</h5>
                    <CardTitle className='display-title' >
                        {artwork.name}
                    </CardTitle>
                    <br/>
                    <p>{artwork.description}</p>
                    <br/>
                </CardBody>
            </Card>


        </>
    );
}

function RenderLink ( {artist} ) {
    return (
        <>
            <NavItem>
                <NavLink className="artist-page" to={`/artist/${artist}`}>
                    Back to the Artist Page 
                </NavLink>
            </NavItem>
        </>
    );
}

const Display = (props) => {
    let params = useParams();
    
    const display = props.artworks.filter((art) => art.name === params.name)[0];

    
    return (
        <><div className="display-container">
            <div className='picture'>
                <RenderPainting artwork={display} />
            </div>
            <div className='words'>
                <RenderDescription artwork={display} />
            </div>

        </div>
        <div className='artist-link'>
            <RenderLink artist={display.artistName}/>
        </div></>
    );
}

export default Display;