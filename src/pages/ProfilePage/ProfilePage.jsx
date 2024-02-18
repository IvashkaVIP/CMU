import { } from "./ProfilePage.styled"
import { SingleButton } from "../../components";
import { logOut } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate('/', { replace: true });
  };
    
    return (
      <div style={{ textAlign: 'center', paddingTop: '50px' }}>
        <h3>Profile Page</h3>
        <br />
        <h2 style={{ marginBottom: '50px' }}>
          waiting for email confirmation{' '}
        </h2>
        <SingleButton handleClick={handleClick}>Back</SingleButton>
      </div>
    );
}