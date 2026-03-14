import { ImageProps } from './Image.props';
import React from 'react';

export const Image: React.FC<ImageProps> = ({ main }) => {
  return (
    <div className='relative flex items-center justify-center h-64 w-64 m-4'>
      <img
        src={main}
        alt='profile photo'
        className={`absolute top-0 left-0 transition-opacity duration-300 rounded-full h-full w-full object-cover`}
      />
    </div>
  );
};
