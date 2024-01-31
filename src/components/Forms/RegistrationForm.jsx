import { Form, Input, Button } from "./Forms.styled";
// import { signup } from "../../utilities/apiservice";
// import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export const RegistrationForm = () => {
  // const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();    
    const username = evt.target.elements.user.value;
    const email = evt.target.elements.email.value;
    const password = evt.target.elements.password.value;
    // console.log("Submitted values:", {
    //    UserName : username,
    //    Email: email,
    //    Password: password,
    // });
    // const resp = await signup({ username: username, email: email, password: password });
    // console.log (resp?.data)

    // dispatch(register({ UserName: username, Email: email, Password: password }));

  };
 
 
  return (
  <Form onSubmit={handleSubmit}>
    <Input type="text" name="user" placeholder="user name" />
    <Input type="text" name="email" placeholder="example@mail.ua" />
    <Input type="password" name="password" placeholder="********" />
      <Button type="submit">Sign Up</Button>
      <Button type="reset">Reset</Button>
  </Form>)
};
