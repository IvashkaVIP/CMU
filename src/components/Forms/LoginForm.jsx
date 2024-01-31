import { Form, Input, Button } from "./Forms.styled";
import { login } from "../../utilities/apiservice";
// import { useDispatch } from "react-redux";

export const LoginForm = () => {
  // const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const loginValue = evt.target.elements.login.value;
    const password = evt.target.elements.password.value;

    try {
      
      const LoginAct = login({ username: loginValue, password: password });
      // const resp = dispatch(
      //   LoginAct
      // );
      // console.log(resp); 
    } catch (error) {
      console.error("Login error:", error);      
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="login" placeholder="example@mail.ua" />
      <Input type="password" name="password" placeholder="********" />
      <Button type="submit">Log In</Button>
      <Button type="reset">Reset</Button>
    </Form>
  );
};
