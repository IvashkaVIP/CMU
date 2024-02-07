import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { shadow } from "../../GlobalStyles";

export const MainPage = () => {
    const user = useSelector(selectUser);
    console.log(user);

    return (
      <>
        <h3>Main Page</h3>
        <br />
        <h2 style={{color: "white", textShadow: `${shadow}`}}>Hello, {user}!</h2>
            <br />
            <h3>you are is logged successful</h3>
      </>
    );
}