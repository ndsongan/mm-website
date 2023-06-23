'use client';
import { useState } from 'react';
import { Card } from '../Card/Card';

export const IntroCard = () => {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, 5000);
  };

  return (
    <div
      className={`relative group ml-4 mt-16 w-96 cursor-pointer  ${
        isBouncing ? 'animate-bounce ease-in-out duration-5000' : ''
      }`}
      onClick={handleClick}
    >
      <div className='abslute inset-0 z-10 transition-opacity duration-500 ease-in group-hover:opacity-0'>
        <Card
          name='Din Song An Nguyen'
          image='https://media.licdn.com/dms/image/C5603AQGkifFIPFolTg/profile-displayphoto-shrink_800_800/0/1653094600585?e=2147483647&v=beta&t=iUBMAQilmXkn4d2z67FXz_YpHIv6KKM_XcQMVIS1D-M'
          title='PhD Ohio State University'
        />
      </div>
      <div className='absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in'>
        <Card
          name='Gonpachiro Kamaboko'
          image='https://media3.giphy.com/media/dyjrpqaUVqCELGuQVr/giphy.gif'
          title='Demon Slayer Corps'
        />
      </div>
    </div>
  );
};
