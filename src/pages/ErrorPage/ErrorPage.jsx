import {
  BgImage,
  BgText,
  Wrapper,
  DescriptionError,
  ErrorContainer,
  ErrorNavlinkGoHome,
  TitleError,
  Content,
} from './ErrorPage.styled';
import { Logo } from '../../components/Logo/Logo';

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <BgText>
        <Wrapper>
          <Logo />
          <Content>
            <TitleError>404</TitleError>
            <DescriptionError>
              Sorry, you have reached a page that we could not find. It seems
              that you are lost among the numbers and letters of our virtual
              space. Perhaps this page went on vacation or decided to disappear
              into another dimension. We apologize for this inconvenience.
            </DescriptionError>
            <ErrorNavlinkGoHome to={'/'}>Go Home</ErrorNavlinkGoHome>
          </Content>
        </Wrapper>
      </BgText>
      <BgImage></BgImage>
    </ErrorContainer>
  );
};

export default ErrorPage;
