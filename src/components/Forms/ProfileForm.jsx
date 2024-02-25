import { Form, Input, Button } from "./Forms.styled";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Error } from "../ServicesMessages/Error";

export const ProfileForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isError = useSelector(selectIsError);

const handleSubmit = async (evt) => {
  evt.preventDefault();
  const field =  evt.target.elements ; 
  const nickname = field.nickname.value;
  const age = field.age.value;
  const country = field.country.value;
  const phone = field.phone.value;

  console.log(nickname, age, country, phone )

  if (!(nickname && age && country && phone)) {
    setErrorMessage([
      `Hello, ${nickname || `User`}!`,
      `All fields must be filled in`,
    ]);
    return;
  }
  
  if (nickname.length < 3) {
    setErrorMessage([
      `Hello, ${nickname || `User`}!`,
      `the username must be at least 3 characters long`,
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
             <Input type="text" name="nickname" placeholder="nickname" />
             <Input type="text" name="age" placeholder="age" pattern="[0-9]*" />
             <Input type="text" name="country" placeholder="country" />
             <Input type="text" name="phone" placeholder="phone" />
             <Input type="file" name="avatar" placeholder="avatar" />
             <Button type="submit">Confirm</Button>
             <Button type="reset">Reset</Button>
           </>
         )}
       </Form>
     );
}