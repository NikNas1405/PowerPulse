import { UserCard } from '../../../components/Authorized/UserCard/UserCard';
import { UserForm } from '../../../components/Authorized/UserForm/UserForm';
import { Component } from 'react';
import { ProfilePageContainer } from './ProfilePage.styled';

export class ProfilePage extends Component {
  render() {
    return (
      <div>
        <h1>Profile Settings</h1>
        <ProfilePageContainer>
          <UserForm />
          <UserCard />
        </ProfilePageContainer>
      </div>
    );
  }
}

export default ProfilePage;
