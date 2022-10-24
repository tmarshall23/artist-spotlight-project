import React, { Component } from "react";
import '../header.css';
import '../home.css';
import Header from './HeaderComponent';
import "@fontsource/montserrat";
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
      
        const ArtistPage = ({match}) => {
            return(
                <Artist artist={this.state.artists.filter((artist) => artist.name === match.params.artist.name,10)[0]}
                artwork ={this.state.artworks.filter((artwork) => artwork.artistName === parseInt(match.params.artist.name,10))}/>
            );
        }
    
        const ArtPage = ({match}) => {
            return(
                <Display artist={this.state.artists.filter((artist) => artist.name === parseInt(match.params.artist.name,10))[0]}
                artwork ={this.state.artworks.filter((artwork) => artwork.artistName === parseInt(match.params.artist.name,10))[0]}/>
            );
        }



        return (
            <div>
                <Routes>
                    <Route exact path="/" element={<Home artists={this.state.artists}/>}/>
                    <Route exact path="/home" element={ <Home artists={this.state.artists}/>}/>
                    <Route exact path= "/artist/:artist.name" element={<ArtistPage/>} />
                    <Route exact path="/artist/:artist.name/:artwork.name" element={<ArtPage/>} />
                    <Route exact path= "/contactus" element={<Contact/>} />
                    <Route exact path= "/aboutus" element={<About/>}/>
                </Routes>
            </div>
        );
    }
        
        
}

export default Main;