import { DualButtonContainer, Button } from "./DualButton.styled";

export const SignupLoginButtons = ({toLogin, setToLogin }) => {
   return (
     <DualButtonContainer>
       <Button $isFirst $isActive={!toLogin} onClick={() => setToLogin(false)}>
         Sign Up
       </Button>
       <Button $isActive={toLogin} onClick={() => setToLogin(true)}>
         Log In
       </Button>
     </DualButtonContainer>
   );
};
