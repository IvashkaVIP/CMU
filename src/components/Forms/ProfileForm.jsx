import { Form, Input, Button } from "./Forms.styled";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const ProfileForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isError = useSelector(selectIsError);

  const Error = false;

const handleSubmit = async (evt) => {
  evt.preventDefault();
  const nickname = evt.target.elements.nickname.value;
  const age = evt.target.elements.age.value;
  const country = evt.target.elements.country.value;

  if (!(nickname && age && country)) {
    setErrorMessage([
      `Hello, ${nickname || `User`}!`,
      `All fields must be filled in`,
    ]);
    return;
  }
  
  if (nickname.length < 6) {
    setErrorMessage([
      `Hello, ${nickname || `User`}!`,
      `the username must be at least 6 characters long`,
    ]);
    return;
  }

  // signup({ username: username, email: email, password: password });
  // const resp = await dispatch(
  //   signup({ username: username, email: email, password: password })
  // );
  // console.log('Reg : ', resp);
  // if (resp.payload.code) {
  //   setErrorMessage([`Error`, resp.payload.code, resp.payload.message]);
  //   return;
  // }

  // navigate('/profile', { replace: true });
};


     return (
       <Form style={{ margin: '0 auto' }} onSubmit={handleSubmit}>
         {errorMessage ? (
           <Error
             resetError={() => setErrorMessage('')}
             errorMessage={errorMessage}
           />
         ) : (
           <>
             <Input type="text" name="mickmame" placeholder="nickname" />
             <Input type="text" name="age" placeholder="age" pattern="[0-9]*" />
             <Input type="text" name="country" placeholder="country" />
             <Input type="file" name="avatar" placeholder="avatar" />
             <Button type="submit">Confirm</Button>
             <Button type="reset">Reset</Button>
           </>
         )}
       </Form>
     );
}