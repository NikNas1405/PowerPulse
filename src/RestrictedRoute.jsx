// import { Navigate } from 'react-router-dom';
// import { useAuth } from 'operations/useAuth';

// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();

//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
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
