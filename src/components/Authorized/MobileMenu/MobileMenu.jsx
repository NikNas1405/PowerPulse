import { Popover, useMediaQuery } from '@mui/material';
import sprite from '../../../assets/sprite.svg';
import {
  BtnIconClose,
  UserNavMobileWrapper,
  BtnLogOut,
  SvgLogOutBtn,
  LogOutContainer,
  TextUser,
} from './MobileMenu.styled';
import { UserNav } from '../UserNav/UserNav';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
import { useAuth } from '../../../hooks/useAuth';

export const MobileMenu = ({ onClose, isActive, anchorEl }) => {
  const isMobileWidth = useMediaQuery('(min-width: 375px)');
  const isTabletWidth = useMediaQuery('(min-width: 768px)');
  const isDesctopWidth = useMediaQuery('(min-width: 1440px)');
  const { isUserParams, user } = useAuth();

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Popover
      open={isActive}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      PaperProps={{
        sx: {
          // position: 'fixes !important',
          boxSizing: 'border-box',
          boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',
          backgroundColor: '#E6533C',
          paddingTop: `${isTabletWidth ? 20 : 26}px`,
          paddingRight: `${isTabletWidth ? 20 : 32}px`,
          paddingBottom: `${isTabletWidth ? 20 : 26}px`,
          paddingLeft: `${isTabletWidth ? 20 : 32}px`,
          display: `${isDesctopWidth ? 'none' : 'flex'}`,
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: `${isTabletWidth ? 350 : 200}px`,
          height: '100vh !important',
          top: '0 !important',
        },
      }}
    >
      <BtnIconClose type="button" onClick={onClose}>
        <use href={`${sprite}#icon-x`} />
      </BtnIconClose>
      <UserNavMobileWrapper>
        {isUserParams ? (
          <TextUser>
            Dear {user.name}, to continue using the application correctly,
            please fill in all parameters in the profile settings.
            <p> Thank you for choosing our application!</p>
          </TextUser>
        ) : (
          <UserNav />
        )}
      </UserNavMobileWrapper>
      <LogOutContainer>
        <BtnLogOut type="button" onClick={handleLogOut}>
          Logout
          <SvgLogOutBtn>
            <use href={`${sprite}#icon-log-out-01`} />
          </SvgLogOutBtn>
        </BtnLogOut>
      </LogOutContainer>
    </Popover>
  );
};
