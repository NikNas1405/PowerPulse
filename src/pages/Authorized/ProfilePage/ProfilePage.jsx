import { UserCard } from '../../../components/Authorized/UserCard/UserCard';
import { UserForm } from '../../../components/Authorized/UserForm/UserForm';
import { Component } from 'react';
import { ProfilePageContainer } from './ProfilePage.styled';

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
      dateOfBirth: null,
      avatarURL: '',
    },
  };
  refreshProfileState = (newState) => {
    this.setState({ profile: newState });
  };
  render() {
    return (
      <div>
        <h1>Profile Settings</h1>
        <ProfilePageContainer>
          <UserForm
            profile={this.state.profile}
            refreshUserData={this.refreshProfileState}
          />
          <UserCard
            profile={this.state.profile}
            refreshUserData={this.refreshProfileState}
          />
        </ProfilePageContainer>
      </div>
    );
  }
}

export default ProfilePage;
