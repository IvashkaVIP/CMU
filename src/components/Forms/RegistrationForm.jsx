import {useState} from "react"
import { Form, Input, Button } from "./Forms.styled";
// import { signup } from "../../utilities/apiservice";
import {Error} from "../../components"
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/auth/operations";
import { useNavigate } from 'react-router-dom';
import { selectIsError } from "../../redux/auth/selectors";

export const RegistrationForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();  
  const navigate = useNavigate();  
  const isError = useSelector(selectIsError);

  const handleSubmit = async (evt) => {
    evt.preventDefault();    
    const username = evt.target.elements.user.value;
    const email = evt.target.elements.email.value;
    const password = evt.target.elements.password.value;
    
    if (!(email && password && username)) { setErrorMessage('Hello, Mudick!');  return};
    
    // signup({ username: username, email: email, password: password });   
    const resp = await dispatch(signup({ username: username, email: email, password: password }));            
    console.log(resp);

    console.log(isError);
    if (isError) setErrorMessage(isError);

    // navigate('/profile', { replace: true });

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
