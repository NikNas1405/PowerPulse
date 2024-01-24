// import { BackBtn } from './BackBtn.Styled';

import { useLocation, useNavigate } from 'react-router-dom';

// export const GoBackBtn = ({ to, children }) => {
//   return <BackBtn to={to}>{children}</BackBtn>;
// };

const GoBackBtn = () => {
  const location = useLocation();
  const { from } = location.state || {
    from: { pathname: '/exercises/Body parts' },
  };
  console.log('from:', from.pathname);
  console.log('location =>', location);

  const navigate = useNavigate();

  const handleClickBackBtn = () => {
    navigate(location);
  };

  return (
    <>{from && <button onClick={() => handleClickBackBtn()}>Back</button>}</>
  );
};

export default GoBackBtn;
