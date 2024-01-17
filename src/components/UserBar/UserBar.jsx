import { IconSettings, UserWrapper, IconUserInner } from './UserBar.styled';
import sprite from '../../assets/sprite.svg';

const UserBar = () => {
  
  return (
    <>
      <IconSettings>
        <use href={`${sprite}#icon-settings`} />
      </IconSettings>
      <UserWrapper>
        <>
          
            <IconUserInner>
                          <use href={`${sprite}#icon-user-inner`} />
            </IconUserInner>
         
        </>
      </UserWrapper>
    </>
  );
};

export default UserBar;
