import { ImageProps } from './Image.props';
import React from 'react';
import NextImage from 'next/image';

export const Image: React.FC<ImageProps> = ({ main }) => {
  return (
    <div className='flex items-center justify-center m-4'>
      <NextImage
        src={main}
        alt='profile photo'
        width={200}
        height={200}
        className='rounded-full object-cover transition-opacity duration-300'
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};
