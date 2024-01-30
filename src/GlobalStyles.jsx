import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

 :root {
    --form-border-color: #00baff;
    --normal-button-color: #000000;
    --hover-button-color: red;
    --placeholder-input-color: #378289;
    --dark-text-color: #00f7ff;


    --light-text-color: #ffffff;    
    --accessories-text-color: #363535;
    --grey-text-color: #8A8A89;
    --light-grey-text-color: rgba(18,20,23,0.5);
    --middle-light-grey-text-color: rgba(18,20,23,0.2);
    --super-light-grey-text-color: rgba(4, 5, 6, 0.05);
    --accent-text-color: #3470FF;
    --decoration-color: rgba(251, 203, 203, 0.1);
    --background-color: #ffffff;
    --background-grey-color: #f9f9f9;
    --background-second-grey-color: #f7f7fb;
    
    
  }

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* body {
  background-color: var(--background-color);
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: var(--dark-text-color);
  width: 100%;
  height: 100vh;
  margin: 0;
} */
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
}
`;
