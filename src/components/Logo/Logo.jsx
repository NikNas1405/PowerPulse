import sprite from '../../assets/sprite.svg';
import { IconWrapper, SecondaryIconWrapper, Wrapper } from './Logo.styled';

const Logo = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <use href={`${sprite}#icon-logo`} />
      </IconWrapper>
      <SecondaryIconWrapper>
        <use href={`${sprite}#icon-powerpulse`} />
      </SecondaryIconWrapper>
    </Wrapper>
  );
};

export default Logo;
