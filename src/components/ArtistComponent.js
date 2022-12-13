import React from "react";
import '../artist.css';
import { Card, CardImg, CardBody, CardTitle, NavItem} from 'reactstrap';
import { Link, NavLink, useParams } from "react-router-dom";


function RenderCards({artistName, art}) {
    return(
        <Card>
            <Link to={`/${artistName}/${art.name}`}>
            <CardImg width="100%" src= {art.image} alt={art.artwork}/>
            <CardBody>
                <CardTitle className='art-title' >
                    {art.name}
                </CardTitle>
            </CardBody>
            </Link>
        </Card>
    );
}

const Artist = (props) => {

    let params = useParams(); 
    
    const selectedArtwork = props.artworks.filter((artwork) => artwork.artistName === params.artistName);

    const info = props.artists.filter((artist) => artist.name === params.artistName)[0];
    console.log(info);

    const renderSelected = selectedArtwork.map((item) => {
        return (
            <div key= {item.id}>
                <RenderCards artistName= {params.artistName} art= {item} />
            </div>
        );
    });

    return(
        
        <div className='art-container'>
            <div className="top-section">
                <div className="gallery-title">
                    <h1>{params.artistName}</h1>
                </div>
                <div className="bio-website">
                    <p>{info.bio}</p>
                    <p className="website">Artist Website: {info.website}</p>
                </div>
            </div>
            <div className='art-cards'>
                {renderSelected}
            </div>
            <div>
                <NavItem>
                    <NavLink className="home" to="/">
                        HOME
                    </NavLink>
                </NavItem>
            </div>
        </div>
    );
}

export default Artist;