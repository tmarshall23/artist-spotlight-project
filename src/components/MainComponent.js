import React, { Component } from "react";
import '../header.css';
import '../home.css';
import "@fontsource/montserrat";
// import Header from './HeaderComponent';
import Layout from './Layout';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Artist from './ArtistComponent';
import Display from "./DisplayArtComponent";
import { ARTISTS } from '../shared/artists'
import { ARTWORKS } from '../shared/artworks';
import { 
        Routes, 
        Route,
} from 'react-router-dom';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            artists: ARTISTS,
            artworks: ARTWORKS,
            selectedArtist: null,
            selectedArtwork: null,
        }
    }

    render(){
      
        // const ArtistPage = ({match}) => {
        //     return(
        //         <Artist artist={this.state.artists.filter((artist) => artist.name === {artist.name})[0]}
        //         artworks ={this.state.artworks.filter((artwork) => artwork.artistName === {:artist.name}}/>
        //     );
        // }
    
        // const ArtPage = ({match}) => {
        //     return(
        //         <Display artist={this.state.artists.filter((artist) => artist.name === parseInt(match.params.artist.name,10))[0]}
        //         artwork ={this.state.artworks.filter((artwork) => artwork.artistName === parseInt(match.params.artist.name,10))[0]}/>
        //     );
        // }



        return (

            <>
                <Routes>
                    <Route path= "/" element= {<Layout />}>
                        <Route path="/" element={<Home artists={this.state.artists}/>}/>
                        <Route exact path= "/contactus" element={<Contact/>} />
                        <Route exact path= "/aboutus" element={<About/>}/>
                    </Route>
                </Routes>
                <Routes>
                <Route exact path= "/artist/:artist.name" element={<Artist/>} />
                    <Route exact path="/:artwork.name" element={<Display/>} />
                </Routes>
            </>

        );
    }
        
        
}

export default Main;