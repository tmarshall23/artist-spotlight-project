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
        }
    }

    render(){
      
        
        return (

            <>
                <Routes>
                    <Route  element= {<Layout />}>
                        <Route path="" element={<Home artists={this.state.artists}/>}/>
                            <Route exact path= "contactus" element={<Contact/>} />
                            <Route exact path= "aboutus" element={<About/>}/>

                    </Route>
                </Routes>
                <Routes>
                    <Route exact path= "/:artistName" element={<Artist artists={this.state.artists} artworks={this.state.artworks}/>} />
                        <Route exact path="/:artworkName" element={<Display artworks={this.state.artworks}/>} />
                        <Route exact path= "*" element={
                                <main style={{ padding: "1rem"}}>
                                <p>There's nothing here!</p>
                                </main>
                                }/>
                </Routes>
            </>

        );
    }
        
        
}

export default Main;