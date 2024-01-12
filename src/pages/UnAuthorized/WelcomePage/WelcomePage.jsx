// import { ContainerPage } from 'components/ContainerPage/ContainerPage';
import { StatisticsInfo } from '../../../components/UnAuthorized/StatisticsInfo/StatisticsInfo';
import { Container } from '../../../styles/GlobalStyles';
import {
  HeroContainer,
  HeroSignInLink,
  HeroSignUpLink,
  HeroTitle,
  HeroWrapper,
  LinkWrapper,
} from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroTitle>Transforming your body shape with Power Pulse</HeroTitle>
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
