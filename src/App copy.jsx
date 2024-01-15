// import { Route, Routes } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { lazy, useEffect } from 'react';

// import { GlobalStyles } from './styles/GlobalStyles';
// import SharedLayout from './components/SharedLayout/SharedLayout';

// import { useAuth } from './hooks/useAuth';

// import { refreshUser } from './redux/auth/operations';
// import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';

// const WelcomePage = lazy(() =>
//   import('./pages/UnAuthorized/WelcomePage/WelcomePage')
// );

// const SignUpPage = lazy(() =>
//   import('./pages/UnAuthorized/SignUpPage/SignUpPage')
// );

// const SignInPage = lazy(() =>
//   import('./pages/UnAuthorized/SignInPage/SignInPage')
// );

// const ProfilePage = lazy(() =>
//   import('./pages/Authorized/ProfilePage/ProfilePage')
// );

// const DiaryPage = lazy(() => import('./pages/Authorized/DiaryPage/DiaryPage'));

// const ProductsPage = lazy(() =>
//   import('./pages/Authorized/ProductsPage/ProductsPage')
// );

// const ExercisesPage = lazy(() =>
//   import('./pages/Authorized/ExercisesPage/ExercisesPage')
// );

// const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

// function App() {
//   const dispatch = useDispatch();

//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return (
//     !isRefreshing && (
//       <>
//         <Routes>
//           <Route path="/" element={<SharedLayout />}>
//             <Route index element={<WelcomePage />} />
//             <Route
//               path="welcome"
//               element={
//                 <RestrictedRoute
//                   redirectTo="/profile"
//                   component={<WelcomePage />}
//                 />
//               }
//             />
//             <Route
//               path="/signup"
//               element={
//                 <RestrictedRoute
//                   redirectTo="/profile"
//                   component={<SignUpPage />}
//                 />
//               }
//             />
//             <Route
//               path="/signin"
//               element={
//                 <RestrictedRoute
//                   redirectTo="/diary"
//                   component={<SignInPage />}
//                 />
//               }
//             />

//             <Route
//               path="/profile"
//               element={
//                 <PrivateRoute redirectTo="/" component={<ProfilePage />} />
//               }
//             />

//             <Route
//               path="/diary"
//               element={
//                 <PrivateRoute redirectTo="/" component={<DiaryPage />} />
//               }
//             />
//             <Route
//               path="/products"
//               element={
//                 <PrivateRoute redirectTo="/" component={<ProductsPage />} />
//               }
//             />
//             <Route
//               path="/exercises"
//               element={
//                 <PrivateRoute redirectTo="/" component={<ExercisesPage />} />
//               }
//             />
//             <Route path="*" element={<ErrorPage />} />
//           </Route>
//         </Routes>
//         <GlobalStyles />
//       </>
//     )
//   );
// }

// export default App;
