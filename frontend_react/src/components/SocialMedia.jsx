import React from 'react';
import { BsTwitter, BsInstagram, BsTelegram } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTelegram />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsTwitter />
      </div>
    </div>
  );
};

export default SocialMedia;
