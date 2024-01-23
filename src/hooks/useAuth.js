import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsUserParams,
  selectBmr,
} from '../redux/auth/selectors.js';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isUserParams = useSelector(selectIsUserParams);
  const bmr = useSelector(selectBmr);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    isUserParams,
    bmr,
  };
};
