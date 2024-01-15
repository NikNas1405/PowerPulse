// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import MediaQuery from 'react-responsive';
// import { Link } from 'react-router-dom';
// import sprite from '../../assets/sprite.svg';
// import Logo from '../Logo/Logo';
// import MobileMenu from '../MobileMenu';
// import UserBar from '../UserBar/UserBar';
// import { LogoutRouteStyled } from '../LogOutBtn/LogOutBtn.styled';
// import { logOutUser } from '../../redux/auth/operations';
// import {
//   HeaderContainer,
//   Navigation,
//   NavWrapper,
//   SecondNavWrapper,
//   StyledLink,
//   Burger,
//   StyledLinkSettings,
//   LogoutIconStyled,
// } from './Header.styled';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

import sprite from '../../assets/sprite.svg';
import {
  LogoNavLink,
  NavLinkPower,
  NavLinkPowerPlus,
  Svg,
  SvgPowerPlus,
} from './Header.styled';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useAuth();
  //   const dispatch = useDispatch();
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   const toggleMenu = () => {
  //     setIsMenuOpen((prevState) => !prevState);
  //   };
  //   const { profile } = useSelector((state) => state.profile);
  //   const handleLogOut = () => {
  //     dispatch(logOutUser());
  //   };
  return (
    <div>
      {!isLoggedIn ? (
        <>
          <NavLinkPower>
            <LogoNavLink to={'/'}>
              <Svg>
                <use href={`${sprite}#icon-Vector`}></use>
              </Svg>
              <SvgPowerPlus>
                <use href={`${sprite}#icon-PowerPulse`}></use>
              </SvgPowerPlus>
            </LogoNavLink>
          </NavLinkPower>
        </>
      ) : (
        <>
          <NavLinkPowerPlus>
            <LogoNavLink to={'/'}>
              <Svg>
                <use href={`${sprite}#icon-Vector`}></use>
              </Svg>
              <SvgPowerPlus>
                <use href={`${sprite}#icon-PowerPulse`}></use>
              </SvgPowerPlus>
            </LogoNavLink>

            <NavLink to={'/diary'}>Diary</NavLink>
            <NavLink to={'/products'}>Products</NavLink>
            <NavLink to={'/exercises'}>Exercises</NavLink>
            <button
              type="button"
              onClick={() => {
                dispatch(logOut());
              }}
            >
              Logout
            </button>
          </NavLinkPowerPlus>
        </>
      )}
    </div>
    //     <HeaderContainer>
    //       <Navigation>
    //         <Link to="/">
    //           <Logo />
    //         </Link>
    //         <SecondNavWrapper>
    //           <MediaQuery minWidth={1440}>
    //             {profile === null ? null : (
    //               <NavWrapper>
    //                 <StyledLink to="/diary">Diary</StyledLink>
    //                 <StyledLink to="/products">Products</StyledLink>
    //                 <StyledLink to="/exercises">Exercises</StyledLink>
    //               </NavWrapper>
    //             )}
    //           </MediaQuery>
    //           <StyledLinkSettings to="/profile">
    //             <UserBar />
    //           </StyledLinkSettings>
    //           <MediaQuery minWidth={1440}>
    //             <LogoutRouteStyled onClick={handleLogOut} to="/welcome">
    //               <span>Logout</span>
    //               <LogoutIconStyled>
    //                 <use href={`${sprite}#icon-logout`} />
    //               </LogoutIconStyled>
    //             </LogoutRouteStyled>
    //           </MediaQuery>
    //           <MediaQuery maxWidth={1439}>
    //             <Burger onClick={toggleMenu}>
    //               <use href={`${sprite}#icon-menu`} />
    //             </Burger>
    //           </MediaQuery>
    //         </SecondNavWrapper>
    //       </Navigation>
    //       <MediaQuery maxWidth={1439}>
    //         {isMenuOpen && <MobileMenu onClick={toggleMenu} />}
    //       </MediaQuery>
    //     </HeaderContainer>
  );
};

export default Header;
