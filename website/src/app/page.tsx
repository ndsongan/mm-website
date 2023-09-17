import React from 'react';
import { IntroCard } from './components/IntroCard/IntroCard';

export default function Home() {
  const pageBackground =
    'https://64.media.tumblr.com/a8a4a5b6cbeaef45b23905ecfb9bf673/tumblr_p5at0uRbDC1x8dkuto1_500.gif';
  return (
    <div
      className='h-screen w-screen bg-cover bg-center text-white'
      style={{
        backgroundImage: `url('${pageBackground}')`,
      }}
    >
      <div>
        <IntroCard />
      </div>
    </div>
  );
}
