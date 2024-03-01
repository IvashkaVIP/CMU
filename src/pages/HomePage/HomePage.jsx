import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  LoginForm,
  RegistrationForm,
  SignupLoginButtons,
} from '../../components';
import { Container } from './HomePage.styled';
import {selectIsLoggedIn, selectIsProfile} from "../../redux/auth/selectors"
import { MainPage, ProfilePage } from '../index'
// import example from '../../assets/example.png';

export const HomePage = () => {
  const [toLogin, setToLogin] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);  
  const isProfile = useSelector(selectIsProfile);  

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
          isProfile ? <MainPage /> : <ProfilePage />
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


