import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram,faGithub, faGoogle, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    console.log(year)
    return (
<div>
<footer class=" text-center bg-secondary text-white mt-5">

  <div class="container p-4 pb-0">
    
    <section class="mb-4">
      
      <a
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor:"#3b5998"}}
        href="#!"
        role="button"
        > <FontAwesomeIcon icon={faFacebook } /></a>
      <a
      class="btn btn-primary btn-floating m-1"
      style={{backgroundColor:"#55acee"}}
      href="#!"
      role="button"
      ><FontAwesomeIcon icon={faTwitter } /></a>
      <a
      class="btn btn-primary btn-floating m-1"
      style={{backgroundColor:"#dd4b39"}}
      href="#!"
      role="button"
      ><FontAwesomeIcon icon={faGoogle } /></a>
      <a
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor:"#ac2bac"}}
        href="#!"
        role="button"
        ><FontAwesomeIcon icon={faInstagram } /></a>

      
      <a
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor:"#0082ca"}}
        href="#!"
        role="button"
        ><FontAwesomeIcon icon={faLinkedin } /></a>
 
      <a
        class="btn btn-primary btn-floating m-1"
        style={{backgroundColor:"#333333"}}
        href="#!"
        role="button"
        ><FontAwesomeIcon icon={faGithub} /></a>
    </section>
 
  </div>
 

  
  <div class="text-center p-3 bg-info text-black" > All reserved to Grocery Store
    Copyright @{year}  <a className='text-black' href="https://mdbootstrap.com/">Made By Jasim</a>
  </div>

</footer>
 </div>
    );
};

export default Footer;