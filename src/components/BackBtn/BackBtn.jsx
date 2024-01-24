import { BackBtn } from './BackBtn.Styled';

// import { useLocation, useNavigate } from 'react-router-dom';

export const GoBackBtn = ({ to, children }) => {
  return <BackBtn to={to}>{children}</BackBtn>;
};
