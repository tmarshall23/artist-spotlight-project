import React from 'react';
import '../home.css';
import "@fontsource/montserrat";
import { Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import { Link } from "react-router-dom";

function RenderArtistDisplay({artist}) {
    return(
        <Card>
            <Link to={`/${artist.id}`} >
            <CardImg width="100%" src= {artist.image} alt={artist.artwork}/>
            <CardBody>
                <CardTitle className='title-box' >
                    {artist.artist}
                </CardTitle>
            </CardBody>
            </Link>
        </Card>
    );
}

function Home (props){
    
    const art = props.artists.map((artist) => {
        return (
            <div key= {artist.id}>
                <RenderArtistDisplay artist= {artist} />
            </div>
        );
    });

    return(
        <div className='home-cards'>
                {art}
        </div>
    )
}

export default Home;
  