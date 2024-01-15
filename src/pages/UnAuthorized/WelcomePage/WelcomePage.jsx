import { StatisticsInfo } from '../../../components/UnAuthorized/StatisticsInfo/StatisticsInfo';
import {
  HeroContainer,
  HeroSignInLink,
  HeroSignUpLink,
  HeroSvg,
  HeroTitle,
  HeroWrapper,
  LinkWrapper,
} from './WelcomePage.styled';
import sprite from '../../../assets/sprite.svg';

const WelcomePage = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroTitle>Transforming your body shape with Power Pulse</HeroTitle>
        <HeroSvg>
          <use href={`${sprite}#icon-line`}></use>
        </HeroSvg>
        <LinkWrapper>
          <HeroSignUpLink to={'/signup'}>Sign Up</HeroSignUpLink>
          <HeroSignInLink to={'/signin'}>Sign In</HeroSignInLink>
        </LinkWrapper>
      </HeroWrapper>
      <StatisticsInfo />
    </HeroContainer>
  );
};

export default WelcomePage;
