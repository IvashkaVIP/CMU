import { useState } from 'react';
import { LoginForm, RegistrationForm } from '../../components';
import { SignupLoginButtons } from '../../components';
import { Container } from './HomePage.styled';
// import example from '../../assets/example.png';

export const HomePage = () => {
  const [toLogin, setToLogin] = useState(false);

  return (
    <Container>
    <div
              style={{
                //   backgroundColor: "brown",
        display: 'flex',
        justifyContent: "start",
        alignItems: 'center',
        flexDirection: 'column',
        // backgroundColor: 'aqua',
        height: '400px',
      }}
    >
      {/* <h5 style={{ color: 'blue', marginBottom: '50px' }}>Home Page</h5> */}

      <SignupLoginButtons toLogin={toLogin} setToLogin={setToLogin} />
      {toLogin ? <LoginForm /> : <RegistrationForm />}
    </div>
    </Container>
  );
};


