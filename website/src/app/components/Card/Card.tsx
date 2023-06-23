import { Image } from '../Image/Image';
import { Text } from '../Text/Text';
import { CardProps } from './Card.props';

export const Card: React.FC<CardProps> = ({ image, name, title }) => {
  return (
    <div className='flex flex-col sm:flex-row h-auto items-center'>
      <Image main={image} />
      <div className='mt-4 sm:mt-0 sm:ml-4'>
        <Text title={title} name={name} />
      </div>
    </div>
  );
};
