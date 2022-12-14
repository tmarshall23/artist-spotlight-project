import React from 'react';
import '../home.css';
import "@fontsource/montserrat";
import { Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import { Link } from "react-router-dom";

function RenderArtistDisplay({artist}) {
    return(
        <Card>
            <Link to={`/artist/${artist.name}`} >
            <CardImg width="100%" src= {artist.image} alt={artist.name}/>
            <CardBody className='home-titles'>
                <CardTitle className='title-box' >
                    {artist.name}
                </CardTitle>
            </CardBody>
            </Link>
        </Card>
    );
}

function Home (props){
    
    const art = props.artists.map((a) => {
        return (
            <div key= {a.id}>
                <RenderArtistDisplay artist= {a} />
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
  