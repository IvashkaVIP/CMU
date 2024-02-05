import { useState } from "react"
import { Form, Input, Button } from "./Forms.styled";
import { login } from "../../utilities/apiservice";
import { Error } from "../index";
// import { useDispatch } from "react-redux";

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState('')
  // const dispatch = useDispatch();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const loginValue = evt.target.elements.login.value;
    const password = evt.target.elements.password.value;

    if (!(loginValue && password)) {setErrorMessage("Hello, Mudick!"); return}    

    try {
      
      const loginApi = await login({ username: loginValue, password: password });
      // const resp = dispatch(
      //   LoginAct
      // );
      // console.log(resp); 
      console.log(loginApi);
    } catch (error) {
      console.error("Login error:", error);      
    }
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
