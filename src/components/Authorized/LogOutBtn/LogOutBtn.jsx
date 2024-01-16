import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
import sprite from '../../../assets/sprite.svg';
import { BtnLogOut, SvgLogOutBtn, LogOutContainer } from './LogOutBtn.styled';

export const LogOutBtn = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <LogOutContainer>
      <BtnLogOut type="button" onClick={handleLogOut}>
        Logout
        <SvgLogOutBtn>
          <use href={`${sprite}#icon-log-out-01`} />
        </SvgLogOutBtn>
      </BtnLogOut>
    </LogOutContainer>
  );
};
