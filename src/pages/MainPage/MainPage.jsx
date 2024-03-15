import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { shadow } from "../../GlobalStyles";
import { SingleButton } from "../../components";
import { logOut } from "../../redux/auth/operations";
import { Fragment } from "react";
import {
  selectIsLoggedIn,
  selectIsProfile,
  selectUserMail,
  selectUserName,
  selectUserPass,
} from '../../redux/auth/selectors';


export const MainPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName) || `User`;  
  const isLogged = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  
  const handleClick = () => {
    dispatch(logOut())
  }

  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    } 
  }, [isLogged, navigate]);


    return (
      <div style={{textAlign: 'center'}}>
        <h3>Main Page</h3>
        <br />
        <h2 style={{color: "white", textShadow: `${shadow}`}}>Hello, {user}!</h2>
            <br />
        <h3 style={{ marginBottom: "50px" }}>you are is logged successful</h3>
        
        <SingleButton handleClick={handleClick}>Log Out</SingleButton> 
      </div>
    );
}