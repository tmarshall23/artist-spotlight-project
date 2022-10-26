import React from "react";
import '../artist.css';
import { Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import { Link, Outlet, useParams } from "react-router-dom";


function RenderCards({artistName, art}) {
    return(
        <Card>
            <Link to={`/${artistName}/${art.name}`}>
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

// function HeaderView({artist, artistName}) {
//     console.log(artist.bio);
//     return(
//         <div className="top-section">
//             <div className="gallery-title">
//                 <h2>{artistName}</h2>
//             </div>
//             <div className="bio-website">
//                 <p>{artist.bio}</p>
//                 <p>{artist.website}</p>
//             </div>
//         </div>
//     );
// }

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
                    <h2>{params.artistName}</h2>
                </div>
                <div className="bio-website">
                    <p>{info.bio}</p>
                    <p>{info.website}</p>
                </div>
            </div>
            &nbsp;
            <div className='art-cards'>
                {renderSelected}
            </div>
        </div>
    );
}

export default Artist;