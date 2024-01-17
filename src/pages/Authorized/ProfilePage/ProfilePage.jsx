import { UserCard } from '../../../components/Authorized/UserCard/UserCard';
import { UserForm } from '../../../components/Authorized/UserForm/UserForm';
import { Component } from 'react';
import {
  ProfileComponentsContainer,
  ProfileContainer,
} from './ProfilePage.styled';

export class ProfilePage extends Component {
  state = {
    profile: {
      name: 'Jane',
      email: '',
      height: 0,
      currentWeight: 0,
      desiredWeight: 0,
      blood: '1',
      sex: 'female',
      levelActivity: '1',
      avatarURL: '',
      birthday: '',
    },
  };
  refreshProfileState = (newState) => {
    this.setState({ profile: newState });
  };

  render() {
    return (
      <ProfileContainer>
        <h1>Profile Settings</h1>
        <ProfileComponentsContainer>
          <UserForm
            profile={this.state.profile}
            refreshUserData={this.refreshProfileState}
          />
          <UserCard
            profile={this.state.profile}
            refreshUserData={this.refreshProfileState}
          />
        </ProfileComponentsContainer>
      </ProfileContainer>
    );
  }
}

export default ProfilePage;
