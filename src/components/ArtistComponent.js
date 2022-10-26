import React from "react";
import { Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import { Link, useParams } from "react-router-dom";


function RenderPage({artist, art}) {
    return(
        <Card>
            <Link to={`/${artist}/${art.id}`}>
            <CardImg width="100%" src= {art.image} alt={art.artwork}/>
            <CardBody>
                <CardTitle className='art-title' >
                    {art.artwork}
                </CardTitle>
            </CardBody>
            </Link>
        </Card>
    );
}

const Artist = (props) => {
    
    const selected = this.props.artworks.filter((artwork) => artwork.artistId === props.artist );
    
    const renderSelected = selected.map((item) => {
        return (
            <div key= {selected.id}>
                <RenderPage artist= { props.artist } art= {item} />
            </div>
        );
    });

    return(
        
        <div className='art-container'>
            <div className='art-cards'>
                {renderSelected}
            </div>
        </div>
    )
}

export default Artist;