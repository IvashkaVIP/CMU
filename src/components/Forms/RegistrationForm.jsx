import {useState} from "react"
import { Form, Input, Button } from "./Forms.styled";
import { signup } from "../../utilities/apiservice";
import {Error} from "../../components"

// import { useDispatch } from "react-redux";
// import { signup } from "../../redux/auth/operations";

export const RegistrationForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  // const dispatch = useDispatch();

  const handleSubmit = async (evt) => {
    evt.preventDefault();    
    const username = evt.target.elements.user.value;
    const email = evt.target.elements.email.value;
    const password = evt.target.elements.password.value;
    
    if (!(email && password && username)) { setErrorMessage('Hello, Mudick!');  return};
    
    const resp = await signup({ username: username, email: email, password: password });
    console.log (resp?.data)

    // dispatch(register({ UserName: username, Email: email, Password: password }));

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
          <Input type="text" name="user" placeholder="user name" />
          <Input type="text" name="email" placeholder="example@mail.ua" />
          <Input type="password" name="password" placeholder="********" />
          <Button type="submit">Sign Up</Button>
          <Button type="reset">Reset</Button>
        </>
      )}
    </Form>
  );
};
