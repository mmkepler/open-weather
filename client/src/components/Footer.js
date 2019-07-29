import React from 'react';

const Footer = (props) => (
  <footer className='w-100'>
    <div className='row'>
      <div className='col-6'>
        <p id='footer-link'>
          <a href="http://mmkepler.com" target="_blank" rel="noopener noreferrer">Melissa Kepler</a>
        </p>
      </div>
      <div className='col-6'>
        <p id='footer-link'>
          <a href="https://github.com/Missarachnid/open-weather" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>
    </div>
  </footer>
);
export default Footer;