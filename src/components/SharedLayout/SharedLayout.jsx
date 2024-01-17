import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { Container } from '../../styles/GlobalStyles';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer />
      </Container>
    </>
  );
};

export default SharedLayout;
