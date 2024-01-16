import { Popover, useMediaQuery } from '@mui/material';
import sprite from '../../../assets/sprite.svg';
import {
  BtnIconClose,
  UserNavMobileWrapper,
  BtnLogOut,
  SvgLogOutBtn,
  LogOutContainer,
} from './MobileMenu.styled';
import { UserNav } from '../UserNav/UserNav';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';

export const MobileMenu = ({ onClose, isActive, anchorEl }) => {
  const isMobileWidth = useMediaQuery('(max-width: 375px)');
  const isTabletWidth = useMediaQuery('(max-width: 768px)');

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
        vertical: 'top',
        horizontal: 'right',
      }}
      PaperProps={{
        sx: {
          position: 'fixed !important',
          boxSizing: 'border-box',
          boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.2)',
          backgroundColor: '#E6533C',
          paddingTop: `${isTabletWidth ? 20 : 26}px`,
          paddingRight: `${isTabletWidth ? 20 : 32}px`,
          paddingBottom: `${isTabletWidth ? 20 : 26}px`,
          paddingLeft: `${isTabletWidth ? 20 : 32}px`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: `${isTabletWidth ? 200 : 300}px`,
          height: `${isTabletWidth ? 812 : 1005}px`,
          top: '0 !important',
        },
      }}
    >
      <BtnIconClose type="button" onClick={onClose}>
        <svg>
          <use href={`${sprite}#icon-x`} />
        </svg>
      </BtnIconClose>
      <UserNavMobileWrapper>
        <UserNav />
      </UserNavMobileWrapper>
      <LogOutContainer>
        <BtnLogOut type="button" onClick={handleLogOut}>
          Logout
          <SvgLogOutBtn>
            <use href={`${sprite}#icon-log-out-02`} />
          </SvgLogOutBtn>
        </BtnLogOut>
      </LogOutContainer>
    </Popover>
  );
};
