import styled from "styled-components";

export const DualButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--hover-button-color)" : "var(--normal-button-color)"};
  color: #ffffff;
  border: 1px solid aqua;
  border-radius: ${({ $isFirst }) =>
    $isFirst ? "14px 0 0 14px" : "0 14px 14px 0"};
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--hover-button-color);
    border: 1px solid white;  
  }


`;
