import { Btn } from './Button.styled';

export const SingleButton = ({ children, handleClick, style }) => {
  return <Btn style={style} onClick={() => handleClick()}>{children}</Btn>;
};
