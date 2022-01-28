import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare,faGithubSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="mx-auto bg-gradient-to-r from-[#A5FECB] via-[#20BDFF] to-[#5433FF]/80 w-full">
      <section className=" p-2">
          <div className="md:flex text-center items-center justify-around mx-auto">
              <p>Made with &nbsp; &#x1f9e0; & <FontAwesomeIcon icon={faHeart} className='text-red-500'/> &nbsp;  By Roshan Kumar</p>
              <p> Reach Me On &nbsp; <a href="https://twitter.com/RoshanK18328680" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} className='text-2xl bg-blue-500 text-white'/></a>
                              &nbsp; <a href="https://www.linkedin.com/in/roshan-kumar-5a5020220/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='text-2xl text-blue-700 bg-white'/></a>
                              &nbsp; <a href="https://github.com/RoshanRv" target="_blank"><FontAwesomeIcon icon={faGithubSquare} className='text-2xl bg-black text-white'/></a></p>
          </div>
      </section>
  </footer>)
};

export default Footer;
