import React from 'react';
import '../contact.css';
import "@fontsource/montserrat";

const Contact = () => {

    const ContactSection = () => {
        return(
            <div className="contact">
                <h3>Contact Us</h3> 
                &nbsp;
                <div className='text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam id diam maecenas ultricies. Elementum tempus egestas sed sed risus. Placerat in egestas erat imperdiet sed euismod nisi porta. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Fames ac turpis egestas maecenas pharetra. At consectetur lorem donec massa sapien faucibus et molestie ac. Sit amet dictum sit amet. Tellus in metus vulputate eu scelerisque felis imperdiet proin.</p>
                </div>
            </div>
            
        );
    }


    return(

        <div className="contact-container">
            <ContactSection/>  
        </div>
    );
    
}

export default Contact;
// const Contact = () => {

//     return(
//         <div className='contact-container'>
//              <h3>Contact Us</h3> 
//              &nbsp;
//              <p>To be featured on our website, please send us an email at artistspotlight@email.com</p>
//         </div>
//     );
    
// }

// export default Contact;