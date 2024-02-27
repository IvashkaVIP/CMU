import { useState } from 'react';
import { Form, Input, Button } from './Forms.styled';
// import { login } from "../../utilities/apiservice";
import { logIn } from '../../redux/auth/operations';
import { Error } from '../index';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const loginValue = evt.target.elements.login.value;
    const password = evt.target.elements.password.value;

    if (!(loginValue && password)) {
      setErrorMessage('Hello, Mudick!');
      return;
    }

    try {
      const resp = await dispatch(
        logIn({ username: loginValue, password: password })
      );
    } catch(error)
    {console.log('Login Form Error: ', error.message)}
  };

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
