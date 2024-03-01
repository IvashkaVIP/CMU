import { useState, useEffect } from 'react';
import { Form, Input, Button } from './Forms.styled';
// import { login } from "../../utilities/apiservice";
import { logIn } from '../../redux/auth/operations';
import { Error } from '../index';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { selectIsError, selectIsToken } from '../../redux/auth/selectors';
import { resetError } from '../../redux/auth/slice';

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  // const navigate = useNavigate();
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
      console.log('LoginForm Try: ');
      console.log('Login isToken : ', isToken);
    } catch (error) {
      console.log('Login Form Error: ', error.message);
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
