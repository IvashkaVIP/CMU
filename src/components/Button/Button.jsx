import { Btn } from './Button.styled';

export const SingleButton = ({ children, handleClick }) => {
  return <Btn onClick={() => handleClick()}>{children}</Btn>;
};
