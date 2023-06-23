import { ImageProps } from './Image.props';
import React, { useState } from 'react';

export const Image: React.FC<ImageProps> = ({ main }) => {
  return (
    <div className='relative flex items-center justify-center h-32 w-32 m-4'>
      <img
        src={main}
        alt={main}
        className={`absolute top-0 left-0 transition-opacity duration-300 rounded-full h-full w-full object-cover`}
      />
    </div>
  );
};
