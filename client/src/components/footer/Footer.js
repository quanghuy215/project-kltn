import React from 'react';
function Footer() {
  return (
    <footer className='footer-content'>
      <div className='footer-right'>
        <a href='#'>
          <i className='fa fa-facebook'></i>
        </a>
        <a href='#'>
          <i className='fa fa-twitter'></i>
        </a>
        <a href='#'>
          <i className='fa fa-linkedin'></i>
        </a>
        <a href='#'>
          <i className='fa fa-github'></i>
        </a>
      </div>

      <div className='footer-left'>
        <p className='footer-links'>
          <a className='link-1' href='#'>
            Home
          </a>

          <a href='#'>Blog </a>

          <a href='#'>Price </a>

          <a href='#'>About </a>

          <a href='#'>Faq </a>

          <a href='#'>Contact </a>
        </p>

        <p>KLTN &copy; 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
