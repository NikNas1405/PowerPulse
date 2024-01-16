import sprite from '../../../assets/sprite.svg';

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
} from './UserCard.styled';
export const UserCard = () => {
  return (
    <ProfileContainer>
      <ContainerAvatar>
        <Avatar
          src="../../../assets/profile/gridicons_user.png"
          alt="User Avatar"
        />
        <AvatarUpload>
          <InputFile type="file" accept="image/*" />
        </AvatarUpload>
      </ContainerAvatar>
      <UserName>
        <h2>Anna Rybachok</h2>
        <p>User</p>
      </UserName>
      <ActivityBoxes>
        <TextWrapper>
          <WrapperTextSvg>
            <Svg>
              <use href={`${sprite}#icon-fluent_food-24-filled`}></use>
            </Svg>
          </WrapperTextSvg>
          <TextDescription> Daily calorie intake</TextDescription>

          <WrapperDescription>
            <TextNumber>0</TextNumber>
          </WrapperDescription>
        </TextWrapper>
        <TextWrapper>
          <WrapperTextSvg>
            <Svg>
              <use href={`${sprite}#icon-dumbbell`}></use>
            </Svg>
          </WrapperTextSvg>
          <TextDescription> Daily physical activity</TextDescription>

          <WrapperDescription>
            <TextNumber>0</TextNumber>
            <TextDescription>min</TextDescription>
          </WrapperDescription>
        </TextWrapper>
      </ActivityBoxes>

      <SectionText>
        We understand that each individual is unique, so the
        <br /> entire approach to diet is relative and tailored to your
        <br /> unique body and goals.
      </SectionText>
    </ProfileContainer>
  );
};
