// import { BackBtn } from './BackBtn.Styled';

import { useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

// export const GoBackBtn = ({ to, children }) => {
//   return <BackBtn to={to}>{children}</BackBtn>;
// };

const GoBackBtn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const { from } = location.state || {
  //   from: { pathname: '/exercises/Body parts' },
  // };
  // console.log('from:', from.pathname);
  // console.log('location =>', location);

  const backLinkLocationRef = useRef(
    location.state?.from || '/exercises/Body parts'
  );

  useEffect(() => {
    if (location.pathname !== backLinkLocationRef.current) {
      backLinkLocationRef.current = location.pathname;
    }
  }, [location]);

  const handleClickBackBtn = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleClickBackBtn}> Go back</button>
    </div>
  );
};

export default GoBackBtn;
