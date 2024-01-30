import styled from "styled-components";

export const Form = styled.form`
width: 200px;
border: 2px solid var(--form-border-color);
border-radius: 10px;
padding: 10px;
text-align: center;
`

export const Input = styled.input`
  height: 25px;
  width: 100%;
  margin-bottom: 5px;
  padding: 2px 5px;
  font-size: 10px;
  text-align: center;
  background: transparent;
  border: 1px solid var(--form-border-color);
  border-radius: 5px;
  &:hover, &:focus {
    outline: 1px solid red;
  }  
  &::placeholder {
    text-align: center;
    line-height: 30px;
    color: var(--placeholder-input-color);
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 14px;
  margin-top: 5pt;
  padding: 3px 8px;
  color: var(--dark-text-color);
  background-color: var(--normal-button-color);
  transition: background-color 0.3s ease;
  &:hover {
    color: var(--light-text-color);
    background-color: var(--hover-button-color);    
  }
`;