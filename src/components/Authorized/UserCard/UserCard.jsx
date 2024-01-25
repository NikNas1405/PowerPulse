import sprite from '../../../assets/sprite.svg';
import gridicons_user from '../../../assets/profile/gridicons_user.jpg';
import { LogOutBtn } from '../LogOutBtn/LogOutBtn';
import { useDispatch, useSelector } from 'react-redux';

import { useAuth } from '../../../hooks/useAuth';
import { updatedUserAvatar } from '../../../redux/settings/operations';
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
  ButtonContainer,
  ShortText,
  WrapperAvatar,
  Label,
  AvatarPickerSvg,
  NewAvatar,
} from './UserCard.styled';

export const UserCard = ({ profile, refreshUserData }) => {
  const dispatch = useDispatch();

  const { bmr } = useAuth();

  const handleAvaChange = (e) => {
    // TODO UPDATE USER HERE
    try {
      const resp = dispatch(
        // updatedUserAvatar(URL.createObjectURL(e.target.files[0]))
        updatedUserAvatar(e.target.files[0])
      );
      profile.avatarURL = URL.createObjectURL(e.target.files[0]);
      refreshUserData(profile);
      //setUserData(resp.payload);
      //console.log(resp);
    } catch (error) {
      console.error('error ava update:', error);
    }
    return e.target.value;
  };

  return (
    <ProfileContainer>
      <WrapperAvatar>
        <ContainerAvatar>
          {/* <Avatar src={profile.avatarURL} alt="User Avatar" /> */}
          <AvatarUpload>
            <InputFile
              type="file"
              accept="image/*"
              id="file-input"
              src={profile.avatarURL}
              alt="User Avatar"
              onChange={(e) => {
                handleAvaChange(e);
              }}
              onClick={(e) => {
                e.target.value = null;
              }}
            />
          </AvatarUpload>
        </ContainerAvatar>
        <Label htmlFor="file-input">
          <AvatarPickerSvg>
            <use href={sprite + '#icon-check-mark-1'} />
          </AvatarPickerSvg>
        </Label>
        <div>
          <NewAvatar src={profile.avatarURL} alt="User Avatar" />
        </div>
      </WrapperAvatar>
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
            <TextNumber>
              {bmr && bmr !== null && bmr !== 0 ? bmr : 2200}
            </TextNumber>
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
            <TextNumber>110</TextNumber>
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
          <ShortText>
            We understand that each individual is unique, so the entire approach
            to diet is relative and tailored to your unique body and goals.
          </ShortText>
        </WrapperDescription>
      </SectionText>
      <ButtonContainer>
        <LogOutBtn />
      </ButtonContainer>
    </ProfileContainer>
  );
};
