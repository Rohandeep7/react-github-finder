import React from 'react'
import {FaFacebook, FaGithub,FaInstagram} from 'react-icons/fa'
function Footer({theme}) {
  return (
    <div data-theme={theme}>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/Rohandeep7" target='blank'>
          <FaGithub className='text-2xl'/>
          </a>
          <a href="https://www.instagram.com/ron.d_xo/" target='blank'>
            <FaInstagram className='text-2xl'/>
          </a>
          <a href="https://facebook.com" className='text-2xl' target='blank'>
            <FaFacebook/>
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved </p>
      </div>
    </footer>
    </div>
    
  );
}

export default Footer
