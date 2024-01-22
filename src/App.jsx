import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout';

import { GlobalStyles } from './styles/GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from '../src/hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Loader } from './components/Loader/Loader';
import { selectIsRefreshing } from './redux/auth/selectors';

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
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={isLoggedIn ? <DiaryPage /> : <WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />

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
            element={
              isUserParams ? (
                <RestrictedRoute
                  redirectTo="/profile"
                  component={<ProfilePage />}
                />
              ) : (
                <RestrictedRoute
                  redirectTo="/diary"
                  component={<DiaryPage />}
                />
              )
            }
          />

          <Route
            path="/products"
            element={
              isUserParams ? (
                <RestrictedRoute
                  redirectTo="/profile"
                  component={<ProfilePage />}
                />
              ) : (
                <RestrictedRoute
                  redirectTo="/products"
                  component={<ProductsPage />}
                />
              )
            }
          />

          <Route
            path="/exercises"
            element={
              isUserParams ? (
                <RestrictedRoute
                  redirectTo="/profile"
                  component={<ProfilePage />}
                />
              ) : (
                <RestrictedRoute
                  redirectTo="/diary"
                  component={<ExercisesPage />}
                />
              )
            }
          />

          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
}

export default App;
