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
export const UserCard = () => {
  return (
    <ProfileContainer>
      <ContainerAvatar>
        <Avatar url={gridicons_user} alt="User Avatar" />
        <AvatarUpload>
          <InputFile type="file" accept="image/*" />
        </AvatarUpload>
      </ContainerAvatar>
      <UserName>
        <UserNameTitle>Anna Rybachok</UserNameTitle>
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
