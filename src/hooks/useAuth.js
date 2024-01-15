import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsUserParams,
} from '../redux/auth/selectors.js';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isUserParams = useSelector(selectIsUserParams);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    isUserParams,
  };
};
