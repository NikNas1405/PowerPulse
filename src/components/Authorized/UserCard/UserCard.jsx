import sprite from '../../../assets/sprite.svg';
import gridicons_user from '../../../assets/profile/gridicons_user.jpg';
import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
import {
  TextWrapper,
  WrapperTextSvg,
  WrapperDescription,
  TextNumber,
  TextDescription,
  Svg,
  ActivityBoxes,
  ProfileContainer,
  UserName,
  ContainerAvatar,
  Avatar,
  AvatarUpload,
  InputFile,
  SectionText,
  UserNameTitle,
  UserText,
} from './UserCard.styled';
export const UserCard = ({ profile }) => {
  const handleAvaChange = (e) => {
    console.log(e.target.value);
    // TODO UPDATE USER HERE
    try {
      //const resp = dispatch(updateUser());
      //setUserData(resp.payload);
      //console.log(resp);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
    return e.target.value;
  };

  return (
    <ProfileContainer>
      <ContainerAvatar>
        <Avatar src={profile.avatarURL} alt="User Avatar" />
        <AvatarUpload>
          <InputFile type="file" accept="image/*" />
        </AvatarUpload>
      </ContainerAvatar>
      <UserName>
        <UserNameTitle>{profile.name}</UserNameTitle>
        <UserText>User</UserText>
      </UserName>
      <ActivityBoxes>
        <TextWrapper>
          <WrapperDescription>
            <WrapperTextSvg>
              <Svg>
                <use href={`${sprite}#icon-fluent_food-24-filled`}></use>
              </Svg>
            </WrapperTextSvg>
            <TextDescription> Daily calorie intake</TextDescription>
          </WrapperDescription>
          <WrapperDescription>
            <TextNumber>0</TextNumber>
          </WrapperDescription>
        </TextWrapper>
        <TextWrapper>
          <WrapperDescription>
            <WrapperTextSvg>
              <Svg>
                <use href={`${sprite}#icon-dumbbell`}></use>
              </Svg>
            </WrapperTextSvg>
            <TextDescription> Daily physical activity</TextDescription>
          </WrapperDescription>

          <WrapperDescription>
            <TextNumber>0</TextNumber>
            <TextDescription>min</TextDescription>
          </WrapperDescription>
        </TextWrapper>
      </ActivityBoxes>

      <SectionText>
        <WrapperDescription>
          <WrapperTextSvg>
            <Svg>
              <use href={`${sprite}#exclamation-mark`}></use>
            </Svg>
          </WrapperTextSvg>
          We understand that each individual is unique, so the
          <br /> entire approach to diet is relative and tailored to your
          <br /> unique body and goals.
        </WrapperDescription>
      </SectionText>
      <LogOutBtn />
    </ProfileContainer>
  );
};
