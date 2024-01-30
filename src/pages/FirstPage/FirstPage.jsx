import {useState} from "react"
import { Container, Title, StyledImage } from './FirstPage.styled';
import { LoginForm, RegistrationForm } from '../../components';
import { SignupLoginButtons } from '../../components';
// import example from '../../assets/example.png';

export const FirstPage = () => {
 const [toLogin, setToLogin] = useState(false);

  return (
    // <Container>
      <div
        style={{
          display: 'flex',
          // justifyContent: "center",
          alignItems: 'center',
          flexDirection: 'column',
          // backgroundColor: 'aqua',
          height: '300px',
        }}
      >
        {/* <h5 style={{ color: 'blue', marginBottom: '50px' }}>Home Page</h5> */}

        <SignupLoginButtons toLogin={toLogin} setToLogin={setToLogin} />
        {toLogin ? <LoginForm /> : <RegistrationForm />}
      </div>
    // </Container>
  );
};


