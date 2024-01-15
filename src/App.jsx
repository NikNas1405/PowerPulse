import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout';

import { GlobalStyles } from './styles/GlobalStyles';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from '../src/hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

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
  const { isUserParams, isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={isLoggedIn ? <DiaryPage /> : <WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          {/* <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/exercises" element={<ExercisesPage />} /> */}

          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/profile"
                component={<SignUpPage />}
              />
            }
          />
          <Route
            path="/signin"
            element={
              !isUserParams ? (
                <RestrictedRoute
                  redirectTo="/diary"
                  component={<SignInPage />}
                />
              ) : (
                <RestrictedRoute
                  redirectTo="/profile"
                  component={<SignInPage />}
                />
              )
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute redirectTo="/" component={<ProfilePage />} />
            }
          />

          <Route
            path="/diary"
            element={<PrivateRoute redirectTo="/" component={<DiaryPage />} />}
          />

          <Route
            path="/products"
            element={
              <PrivateRoute redirectTo="/" component={<ProductsPage />} />
            }
          />

          <Route
            path="/exercises"
            element={
              <PrivateRoute redirectTo="/" component={<ExercisesPage />} />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
}

export default App;
