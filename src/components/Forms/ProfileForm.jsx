import { Form, Input, Button } from './Forms.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Error } from '../ServicesMessages/Error';
import {
  selectIsLoggedIn,
  selectIsProfile,
  selectUserMail,
  selectUserName,
  selectUserPass,
} from '../../redux/auth/selectors';
import { createProfile, logIn } from '../../redux/auth/operations';

export const ProfileForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const email = useSelector(selectUserMail);
  const password = useSelector(selectUserPass);
  const isLogged = useSelector(selectIsLoggedIn);
  const isProfile = useSelector(selectIsProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isError = useSelector(selectIsError);

  // useEffect(() => {
  //   if (!isLogged) {
  //     navigate('/');
  //   } else if (isProfile) navigate('/main');
  // }, [isLogged, isProfile, navigate]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const field = evt.target.elements;
    const nickname = field.nickname.value;
    const age = field.age.value;
    const country = field.country.value;
    const phone = field.phone.value;
    const avatarFile = field.avatar.files[0] || '';

    console.log(nickname, age, country, phone);

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

    console.log(email, password);

    try {
      const resp = await dispatch(
        logIn({ username: email, password: password })
      );
      console.log('ProfileForm Login : ', resp.payload);
      if (resp.payload.code) {
        setErrorMessage([`Error   ${resp.payload.code}`, resp.payload.message]);
        return;
      }
    } catch (error) {
      console.log('ProfileForm Error: ', error.message);
    }

    try {
      console.log({ nickname, country, age, phone, avatar: avatarFile });
      await dispatch(
        createProfile({ nickname, country, age, phone, avatar: avatarFile })
      );
    } catch (error) {
      console.log('ProfileForm creatProfile: ', error.message, error.status);
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
          <Input
            type="text"
            name="age"
            placeholder="age"
            pattern="\d{4}-\d{2}-\d{2}"
          />
          <Input type="text" name="country" placeholder="country" />
          <Input type="text" name="phone" placeholder="phone" />
          <Input type="file" name="avatar" placeholder="avatar" />
          <Button type="submit">Confirm</Button>
          <Button type="reset">Reset</Button>
        </>
      )}
    </Form>
  );
};
