import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  LoginForm,
  RegistrationForm,
  SignupLoginButtons,
} from '../../components';
import { Container } from './HomePage.styled';
import {selectIsLoggedIn} from "../../redux/auth/selectors"
import { MainPage } from '../MainPage/MainPage';
// import example from '../../assets/example.png';

export const HomePage = () => {
  const [toLogin, setToLogin] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);  

  return (
    <Container>
      <div
        style={{
          //   backgroundColor: "brown",
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          flexDirection: 'column',
          // backgroundColor: 'aqua',
          height: '400px',
        }}
      >
        {isLoggedIn ? (
          <MainPage />
        ) : (
          <>
            <SignupLoginButtons toLogin={toLogin} setToLogin={setToLogin} />
            {toLogin ? <LoginForm /> : <RegistrationForm />}
          </>
        )}
      </div>
    </Container>
  );
};


