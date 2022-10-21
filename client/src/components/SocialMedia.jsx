import React from 'react';
import { BsTwitter, BsInstagram,BsLinkedin, BsGithub, BsSpotify} from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
     <div>
      <BsLinkedin/>
    </div>
    <div>
      <BsGithub />
    </div>
    <div>
      <BsTwitter />
    </div>
    <div>
      <BsInstagram />
    </div>
    <div>
      <BsSpotify />
    </div>
   
  </div>
);

export default SocialMedia;
