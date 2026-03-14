import { ImageProps } from './Image.props';
import React from 'react';
import NextImage from 'next/image';

export const Image: React.FC<ImageProps> = ({ main }) => {
  return (
    <div className='relative flex items-center justify-center h-64 w-64 m-4'>
      <NextImage
        src={main}
        alt='profile photo'
        fill
        className='rounded-full object-cover transition-opacity duration-300'
      />
    </div>
  );
};
