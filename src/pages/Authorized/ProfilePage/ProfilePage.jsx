import { UserCard } from '../../../components/Authorized/UserCard/UserCard';
import { UserForm } from '../../../components/Authorized/UserForm/UserForm';
import { Component } from 'react';

export class ProfilePage extends Component {
  render() {
    return (
      <div>
        <h1>Profile Settings</h1>
        <UserForm />
        <UserCard />
      </div>
    );
  }
}

export default ProfilePage;
