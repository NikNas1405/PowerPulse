import { UserNavLink } from './UserNav.styled';

export const UserNav = () => {
  return (
    <>
      <UserNavLink to={'/diary'}>Diary</UserNavLink>
      <UserNavLink to={'/products'}>Products</UserNavLink>
      <UserNavLink to={'/exercises'}>Exercises</UserNavLink>
    </>
  );
};
