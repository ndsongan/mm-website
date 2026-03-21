import { ImageProps } from './Image.props';
import React from 'react';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const Image: React.FC<ImageProps> = ({ main }) => {
  const src = main.startsWith('http') ? main : `${BASE_PATH}${main}`;
  return (
    <div className='flex items-center justify-center m-4'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt='profile photo'
        width={200}
        height={200}
        className='rounded-full object-cover transition-opacity duration-300'
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};
