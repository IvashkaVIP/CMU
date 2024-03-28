import { } from "./ProfilePage.styled"

import { useEffect, useState } from 'react';

import { SingleButton, ProfileForm } from "../../components";
import { resetUser } from "../../redux/auth/slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { selectIsToken } from "../../redux/auth/selectors";

import {
  selectIsLoggedIn,
  selectIsProfile,
  selectUserMail,
  selectUserName,
  selectUserPass,
} from '../../redux/auth/selectors';

export const ProfilePage = () => {
  const isLogged = useSelector(selectIsLoggedIn);
  const isProfile = useSelector(selectIsProfile);
  const isToken = useSelector(selectIsToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();  
  
  const handleClick = () => {
    dispatch(resetUser());
    navigate('/');

  };
  const handleClickResendMessage = () => {
    console.log('ResendMessage');
}


    useEffect(() => {
      if (!isLogged) {
        navigate('/');
      } else if (isProfile) navigate('/main');
    }, [isLogged, isProfile, navigate]);

    
    return (
      <div style={{ textAlign: 'center', paddingTop: '50px' }}>
        <h3>Profile Page</h3>
        <br />
        <br />
        {!isToken && (
          <>
            <h2 style={{ marginBottom: '50px', marginBottom: '30px' }}>
              waiting for email confirmation
            </h2>
            <SingleButton style={{marginBottom: '50px'}} handleClick={handleClickResendMessage}>
              resend message
            </SingleButton>
          </>
        )}
        <br />
        <ProfileForm />
        <br />
        <SingleButton handleClick={handleClick}>Back</SingleButton>
      </div>
    );
}