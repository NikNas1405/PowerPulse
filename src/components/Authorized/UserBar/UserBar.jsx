import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
import { UserNav } from '../UserNav/UserNav';
import { useAuth } from '../../../hooks/useAuth';
import {
  UserBarConatiner,
  ImageHolder,
  IconAvatarWrapper,
  AvatarContainer,
  SvgUserNav,
  UserCardContainer,
  BtnIconMenu,
  BtnIconClose,
  LogOutWrapper,
  UseNavWrapper,
} from './UserBar.styled';
import sprite from '../../../assets/sprite.svg';
import { useState } from 'react';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const UserBar = () => {
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';

  const { user } = useAuth();
  const { name, avatarURL } = user;

  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onClickMenuBtn = (event) => {
    setIsOpenMenu(true);
    setAnchorEl(event.currentTarget);
  };

  const onClickCloseBtn = () => {
    setIsOpenMenu(false);
  };

  return (
    <UserBarConatiner>
      {isProfilePage ? null : (
        <UseNavWrapper>
          <UserNav />
        </UseNavWrapper>
      )}

      <UserCardContainer>
        <NavLink to={'/profile'}>
          <SvgUserNav>
            <use href={`${sprite}#icon-settings-01`} />
          </SvgUserNav>
        </NavLink>
        {avatarURL ? (
          <ImageHolder>
            <img src={avatarURL} alt={`User name ${name}`} />
          </ImageHolder>
        ) : (
          <AvatarContainer>
            <IconAvatarWrapper>
              <use href={`${sprite}#icon-gridicons_user`} />
            </IconAvatarWrapper>
          </AvatarContainer>
        )}
      </UserCardContainer>
      <BtnIconMenu onClick={onClickMenuBtn}>
        <svg>
          <use href={`${sprite}#icon-menu`} />
        </svg>
      </BtnIconMenu>
      {isOpenMenu && (
        <MobileMenu
          isOpen={Boolean(anchorEl)}
          onClose={onClickCloseBtn}
          anchorEl={anchorEl}
          isActive={isOpenMenu}
        />
      )}
      <LogOutWrapper>
        <LogOutBtn />
      </LogOutWrapper>
    </UserBarConatiner>
  );
};
