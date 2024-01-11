import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout';

import { GlobalStyles } from './styles/GlobalStyles';

const WelcomePage = lazy(() =>
  import('./pages/UnAuthorized/WelcomePage/WelcomePage')
);

const SignUpPage = lazy(() =>
  import('./pages/UnAuthorized/SignUpPage/SignUpPage')
);

const SignInPage = lazy(() =>
  import('./pages/UnAuthorized/SignInPage/SignInPage')
);

const ProfilePage = lazy(() =>
  import('./pages/Authorized/ProfilePage/ProfilePage')
);

const DiaryPage = lazy(() => import('./pages/Authorized/DiaryPage/DiaryPage'));

const ProductsPage = lazy(() =>
  import('./pages/Authorized/ProductsPage/ProductsPage')
);

const ExercisesPage = lazy(() =>
  import('./pages/Authorized/ExercisesPage/ExercisesPage')
);

const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
}

export default App;
