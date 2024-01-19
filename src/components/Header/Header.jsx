import sprite from '../../assets/sprite.svg';
import {
  LogoNavLink,
  NavLinkPowerPlus,
  Svg,
  SvgPowerPlus,
  HeaderContainer,
  NavLinkWrapper,
  Wrapper,
} from './Header.styled';
import { useAuth } from '../../hooks/useAuth';
import { Logo } from '../Logo/Logo';
import { UserBar } from '../Authorized/UserBar/UserBar';
const Header = () => {
  const { isLoggedIn, isUserParams } = useAuth();

  return (
    <Wrapper>
      <HeaderContainer>
        {!isLoggedIn ? (
          <Logo />
        ) : (
          <>
            <NavLinkPowerPlus>
              {!isUserParams ? (
                <>
                  <NavLinkWrapper>
                    <LogoNavLink to={'/diary'}>
                      <Svg>
                        <use href={`${sprite}#icon-Vector`}></use>
                      </Svg>
                      <SvgPowerPlus>
                        <use href={`${sprite}#icon-PowerPulse`}></use>
                      </SvgPowerPlus>
                    </LogoNavLink>
                  </NavLinkWrapper>
                  <UserBar />
                </>
              ) : (
                <>
                  <NavLinkWrapper>
                    <LogoNavLink to={'/profile'}>
                      <Svg>
                        <use href={`${sprite}#icon-Vector`}></use>
                      </Svg>
                      <SvgPowerPlus>
                        <use href={`${sprite}#icon-PowerPulse`}></use>
                      </SvgPowerPlus>
                    </LogoNavLink>
                  </NavLinkWrapper>
                  <UserBar />
                </>
              )}
            </NavLinkPowerPlus>
          </>
        )}
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
