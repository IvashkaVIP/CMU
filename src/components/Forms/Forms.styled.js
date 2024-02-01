import styled from "styled-components";
import { shadow } from "../../GlobalStyles";

export const Form = styled.form`
width: 400px;
border: 2px solid var(--form-border-color);
border-radius: 10px;
padding: 20px;
text-align: center;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  margin-bottom: 25px;
  padding: 25px 10px;
  font-size: 18px;
  text-align: center;
  caret-color: aqua;
  color: aqua;
  background: transparent;
  border: 1px solid var(--form-border-color);
  border-radius: 5px;
  &:hover,
  &:focus {
    outline: 1px solid aqua;
    border-color: #ffffff;
    box-shadow: ${shadow};
  }
  &::placeholder {
    text-align: center;
    line-height: 30px;
    color: var(--placeholder-input-color);
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    background-color: #000000;
     -webkit-text-fill-color: aqua;
    
  }

  



  &:-moz-autofill,
  &:-moz-autofill:hover,
  &:-moz-autofill:focus {
    background-color: #000000;
    color: aqua !important;
  }
`;




export const Button = styled.button`
  border: none;
  border-radius: 14px;
  margin-top: 5pt;
  margin-right: 20px;
  &:last-child {
    margin-right: 0px;
  }
  padding: 3px 8px;
  color: var(--dark-text-color);
  background-color: var(--normal-button-color);  
  transition: background-color 0.3s ease;
  &:hover {
    color: var(--light-text-color);
    background-color: var(--hover-button-color);
    border-color: #ffffff;
    box-shadow: ${shadow};      
  }
`;