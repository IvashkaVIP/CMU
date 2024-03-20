import { useState, useEffect } from 'react';
import { Form, Input, Button } from './Forms.styled';
// import { login } from "../../utilities/apiservice";
import { logIn } from '../../redux/auth/operations';
import { Error } from '../index';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { selectIsError, selectIsToken } from '../../redux/auth/selectors';
import { resetError, setIsLoggedIn } from '../../redux/auth/slice';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginError = useSelector(selectIsError);
  const isToken = useSelector(selectIsToken);

  useEffect(() => {
    if (loginError) {
      setErrorMessage([loginError.code, loginError.message]);
      dispatch(resetError());
    }
  }, [loginError, dispatch]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const loginValue = evt.target.elements.login.value;
    const password = evt.target.elements.password.value;

    if (!(loginValue && password)) {
      setErrorMessage([
        `Hello, ${loginValue || `User`}!`,
        `All fields must be filled in`,
      ]);
      return;
    }
    try {
      const resp = await dispatch(
        logIn({ username: loginValue, password: password })
      );
      // console.log('LoginForm Try: ', resp);
      console.log(resp.payload.code, resp.payload.message);
      if (
        resp.payload.code === 401 &&
        resp.payload.message === 'Email not confirmed'
      ) {
        console.log(resp.payload.code, resp.payload.message);
        dispatch(setIsLoggedIn(true));
      }

      if (
        resp.payload.code === 401 &&
        resp.payload.message !== 'Email not confirmed'
      ) {        
        setErrorMessage([`${resp.payload.code}`, resp.payload.message]);
        return;
      }

      if (!isToken) navigate('/profile');
    } catch (error) {
      console.log('Login Form Error: ', error.message);
      setErrorMessage([`something's wrong on the server`, `please try again`]);
      return;
    }
  };

  // console.log('LoginForm isError : ', loginError);
  // console.log('errorMessage: ', errorMessage);

  return (
    <Form onSubmit={handleSubmit}>
      {errorMessage ? (
        <Error
          resetError={() => setErrorMessage('')}
          errorMessage={errorMessage}
        />
      ) : (
        <>
          <Input type="text" name="login" placeholder="example@mail.ua" />
          <Input type="password" name="password" placeholder="********" />
          <Button type="submit">Log In</Button>
          <Button type="reset">Reset</Button>{' '}
        </>
      )}
    </Form>
  );
};
