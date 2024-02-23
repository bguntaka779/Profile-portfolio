import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Bharath Kumar Reddy</h1>

        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>

          <li>
            <a href='#portfolio' className='footer__link'>
              Projects
            </a>
          </li>

          <li>
            <a href='#contact' className='footer__link'>
              Contact Me 
            </a>
          </li>
        </ul>

        <div className='footer__social'>
          {/* <a href='https://www.facebook.com/' className='footer__social-link'>
            <i className='bx bxl-facebook'></i>
          </a> */}
          <a href='https://www.linkedin.com/in/bharath-guntaka' className='footer__social-link'>
            <i className='bx bxl-linkedin'></i>
          </a>


          <a href='https://www.instagram.com/bharath_guntaka/' target='_blank' className='footer__social-link'>
            <i className='bx bxl-instagram'></i>
          </a>

          <a href='https://twitter.com/BGuntaka779' target='_blank' className='footer__social-link'>
            <i className='bx bxl-twitter'></i>
          </a>
        </div>

        <span className='footer__copy'>
          &#169; Bharath Kumar Reddy Guntaka. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
