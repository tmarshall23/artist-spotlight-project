import React from 'react';
// import Header from './HeaderComponent';
import '../about.css'
import "@fontsource/montserrat";




const About = () => {

    const AboutSection = () => {
        return(
            <div className="about">
                <h3>About Us</h3> 
                &nbsp;
                <div className='text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam id diam maecenas ultricies. Elementum tempus egestas sed sed risus. Placerat in egestas erat imperdiet sed euismod nisi porta. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Fames ac turpis egestas maecenas pharetra. At consectetur lorem donec massa sapien faucibus et molestie ac. Sit amet dictum sit amet. Tellus in metus vulputate eu scelerisque felis imperdiet proin.</p>

                    <p>Venenatis tellus in metus vulputate eu. Suscipit tellus mauris a diam maecenas sed enim. Congue mauris rhoncus aenean vel elit scelerisque. Condimentum id venenatis a condimentum vitae sapien pellentesque. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Netus et malesuada fames ac turpis egestas integer. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Massa tincidunt dui ut ornare lectus sit. Vestibulum morbi blandit cursus risus. Quam nulla porttitor massa id neque aliquam. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec.</p>

                    <p>Diam donec adipiscing tristique risus nec feugiat in. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Morbi leo urna molestie at elementum eu facilisis sed odio. Ornare suspendisse sed nisi lacus. In hac habitasse platea dictumst quisque sagittis purus sit amet. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Elementum eu facilisis sed odio morbi. Tempus quam pellentesque nec nam aliquam sem. Augue lacus viverra vitae congue eu consequat ac felis. Tortor id aliquet lectus proin nibh nisl condimentum. Enim tortor at auctor urna nunc id cursus metus aliquam.</p>

                    <p>Odio ut sem nulla pharetra diam sit amet. Consequat id porta nibh venenatis cras sed. Massa massa ultricies mi quis hendrerit dolor magna eget est. Neque vitae tempus quam pellentesque nec nam. In egestas erat imperdiet sed euismod nisi porta. Sed id semper risus in hendrerit gravida. Potenti nullam ac tortor vitae purus. Adipiscing bibendum est ultricies integer quis auctor elit sed. Curabitur vitae nunc sed velit dignissim sodales ut eu. Dignissim suspendisse in est ante in nibh mauris cursus. Nunc lobortis mattis aliquam faucibus purus in massa tempor. A diam maecenas sed enim ut sem viverra aliquet. Rhoncus aenean vel elit scelerisque mauris pellentesque. Elementum facilisis leo vel fringilla est ullamcorper.</p>

                    <p>Vel risus commodo viverra maecenas. Augue mauris augue neque gravida in fermentum. Risus nec feugiat in fermentum posuere. Ridiculus mus mauris vitae ultricies leo integer. Posuere lorem ipsum dolor sit amet consectetur. Dui id ornare arcu odio. Amet nulla facilisi morbi tempus iaculis urna id. At in tellus integer feugiat scelerisque varius morbi enim nunc. Id venenatis a condimentum vitae. Neque laoreet suspendisse interdum consectetur libero. </p>
                </div>
            </div>
            
        );
    }


    return(

        <div className="about-container">
            <AboutSection/>  
        </div>
    );
    
}

export default About;