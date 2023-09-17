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
    <div className='flex justify-center items-center h-screen'>
      <div
        className={`relative group grid ${
          isBouncing ? 'animate-bounce ease-in-out duration-5000' : ''
        } rounded-xl shadow-xl cursor-pointer`}
        onClick={handleClick}
        style={{
          backgroundImage: isClicked ? `url('${clickGif}')` : 'none',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          cursor: 'url(tanjiro_cur.webp), auto',
        }}
      >
        <div
          className='transition-opacity duration-500 ease-in group-hover:opacity-0'
          style={{ gridArea: '1 / 1 / 2 / 2', zIndex: isClicked ? 0 : 1 }}
        >
          <Card
            name='Din Song An Nguyen'
            image={mainImage}
            title='PhD Ohio State University'
          />
        </div>
        <div
          className='opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in'
          style={{ gridArea: '1 / 1 / 2 / 2', zIndex: isClicked ? 1 : 0 }}
        >
          <Card
            name='Gonpachiro Kamaboko'
            image={secondImage}
            title='Demon Slayer Corps'
          />
        </div>
      </div>
    </div>
    // <div className='w-96 h-96 border-2   cursor-[url(https://img.icons8.com/?size=512&id=otuYOSexWmVT&format=png)] '></div>
  );
};
