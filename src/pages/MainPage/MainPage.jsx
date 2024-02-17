import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { shadow } from "../../GlobalStyles";
import { SingleButton } from "../../components";
import { logOut } from "../../redux/auth/operations";


export const MainPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser) || `User`;
  console.log(user);
  
  const handleClick = () => {
    dispatch(logOut())
  }

    return (
      <>
        <h3>Main Page</h3>
        <br />
        <h2 style={{color: "white", textShadow: `${shadow}`}}>Hello, {user}!</h2>
            <br />
        <h3 style={{ marginBottom: "50px" }}>you are is logged successful</h3>
        
        <SingleButton handleClick={handleClick}>Log Out</SingleButton> 
      </>
    );
}