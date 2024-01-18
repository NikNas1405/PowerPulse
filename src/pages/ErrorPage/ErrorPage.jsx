import {
  Bg,
  BgContainer,
  DescriptionError,
  ErrorContainer,
  ErrorNavlinkGoHome,
  TextContainer,
  TitleError,
} from './ErrorPage.styled';
import { Container } from '../../styles/GlobalStyles';

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <Bg></Bg>
      <Container>
        <TextContainer>
          <TitleError>404</TitleError>
          <DescriptionError>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </DescriptionError>
          <ErrorNavlinkGoHome to={'/'}>Go Home</ErrorNavlinkGoHome>
        </TextContainer>
      </Container>
      <div>
        <BgContainer></BgContainer>
      </div>
    </ErrorContainer>
  );
};

export default ErrorPage;
