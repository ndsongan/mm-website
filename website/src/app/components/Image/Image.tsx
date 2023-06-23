import { ImageProps } from './Image.props';
import React from 'react';

export const Image: React.FC<ImageProps> = ({ main }) => {
  return (
    <div className='relative flex items-center justify-center h-32 w-32 m-4'>
      <img
        src={main}
        alt={
          'https://i.pinimg.com/originals/37/3d/fd/373dfd046e99e195c2f002af749cb259.gif'
        }
        className={`absolute top-0 left-0 transition-opacity duration-300 rounded-full h-full w-full object-cover`}
      />
    </div>
  );
};
