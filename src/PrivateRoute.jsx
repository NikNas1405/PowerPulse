// import { Navigate } from 'react-router-dom';
// import { useAuth } from 'operations/useAuth';

// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };

// ========================== useAuth:==========================
// import { useSelector } from 'react-redux';
// import {
//   selectUser,
//   selectIsSignedIn,
//   selectIsRefreshing,
// } from '../../redux/auth/selectors';

// export const useAuth = () => {
//   const user = useSelector(selectUser);
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);

//   return {
//     user,
//     isLoggedIn,
//     isRefreshing,
//   };
// };
//========================== ==========================
