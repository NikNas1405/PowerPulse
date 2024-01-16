import { LogoNavLink, NavLinkPower, Svg, SvgPowerPlus } from './Logo.styled';
import sprite from '../../assets/sprite.svg';
import { useLocation } from 'react-router-dom';

export const Logo = () => {
  const location = useLocation();
  const isErrorPage = location.pathname === '/error';

  return (
    <NavLinkPower>
      <LogoNavLink to={'/'}>
        <Svg
          style={{
            fill: isErrorPage ? 'white' : 'current',
          }}
        >
          <use href={`${sprite}#icon-Vector`}></use>
        </Svg>
        <SvgPowerPlus>
          <use href={`${sprite}#icon-PowerPulse`}></use>
        </SvgPowerPlus>
      </LogoNavLink>
    </NavLinkPower>
  );
};
