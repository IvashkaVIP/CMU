import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import {SharedLayout} from 'components';
import { HomePage, MainPage, ProfilePage, FirstPage, SecondPage, HalfPage, ErrorPage } from 'pages';
import { AppWrapper } from './App.styled';

// const test = import.meta.env.VITE_API_TEST;

function App() {
   const dispatch = useDispatch();   

  //  useEffect(() => {
  //    dispatch(refreshUser());
  //  }, [dispatch]);
  
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/first" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />}>
            <Route path=":half" element={<HalfPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
