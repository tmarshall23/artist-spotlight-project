import React from "react";
import { Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import { Link } from "react-router-dom";


function RenderPage({artist, art, onClick}) {
    return(
        <Card>
            <Link to={`/artist/${artist.name}/${art.name}`}>
            <CardImg width="100%" src= {art.image} alt={art.name}/>
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
    
    const artwork = props.artworks.map((artwork) => {
        return (
            <div key= {artwork.id}>
                <RenderPage artist= {this.props.artist} art= {artwork} />
            </div>
        );
    });

    return(
        
        <div className='art-container'>
            <div className='art-cards'>
                {artwork}
            </div>
        </div>
    )
}

export default Artist;