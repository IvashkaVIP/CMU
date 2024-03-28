import styled from 'styled-components';
import { shadow } from '../../GlobalStyles';

export const Btn = styled.button`
  margin-bottom: ${(props)=>props.style ? props.style.marginBottom : 'initial' };
  padding: 10px 20px;
  background-color: var(--normal-button-color);
  color: #ffffff;

  border: 1px solid aqua;
  border-radius: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--hover-button-color);
    border: 1px solid white;
    border-color: #ffffff;
    box-shadow: ${shadow};
  }
`;