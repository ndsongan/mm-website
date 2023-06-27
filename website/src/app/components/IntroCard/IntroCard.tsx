'use client';
import { useState } from 'react';
import { Card } from '../Card/Card';

export const IntroCard = () => {
  const [isBouncing, setIsBouncing] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsBouncing(true);
    setIsClicked(true);

    setTimeout(() => {
      setIsBouncing(false);
      setIsClicked(false);
    }, 5000);
  };

  const clickGif =
    'https://media0.giphy.com/media/Czp1jOaNjg5wiTrweI/giphy.gif?cid=ecf05e47gx2on5f6u2h0ns86y3ks4ivo133fgam730lg8lev&ep=v1_stickers_search&rid=giphy.gif&ct=s)';

  const mainImage =
    'https://media.licdn.com/dms/image/C5603AQGkifFIPFolTg/profile-displayphoto-shrink_800_800/0/1653094600585?e=2147483647&v=beta&t=iUBMAQilmXkn4d2z67FXz_YpHIv6KKM_XcQMVIS1D-M';

  const secondImage =
    'https://media3.giphy.com/media/dyjrpqaUVqCELGuQVr/giphy.gif';
  return (
    <div
      className={`relative group  w-min-96  ${
        isBouncing ? 'animate-bounce ease-in-out duration-5000' : ''
      } rounded-xl shadow-xl  cursor-[url(https://assets.stickpng.com/images/5ede49f9b760540004f2c5e7.png),_pointer]`}
      onClick={handleClick}
      style={{
        backgroundImage: isClicked ? `url('${clickGif}}')` : 'none',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        cursor: 'url(tanjiro_cur.webp), auto',
      }}
    >
      <div className='abslute inset-0 z-10 transition-opacity duration-500 ease-in group-hover:opacity-0'>
        <Card
          name='Din Song An Nguyen'
          image={mainImage}
          title='PhD Ohio State University'
        />
      </div>
      <div className='absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in'>
        <Card
          name='Gonpachiro Kamaboko'
          image={secondImage}
          title='Demon Slayer Corps'
        />
      </div>
    </div>
    // <div className='w-96 h-96 border-2   cursor-[url(https://img.icons8.com/?size=512&id=otuYOSexWmVT&format=png)] '></div>
  );
};
