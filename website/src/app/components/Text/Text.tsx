import { TextProps } from './Text.props';

export const Text: React.FC<TextProps> = ({ title, name }) => {
  return (
    <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start backdrop-blur-sm rounded-lg m-4'>
      <h1 className='text-xl font-bold'>{name}</h1>
      <h2 className='text-base'>{title}</h2>
    </div>
  );
};
