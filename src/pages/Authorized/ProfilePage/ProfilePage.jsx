import { UserForm } from '../../../components/Authorized/UserForm/UserForm';
import { Component } from 'react';

export class ProfilePage extends Component {
  render() {
    return (
      <div>
        <h1>Profile Settings</h1>
        <UserForm />
      </div>
    );
  }
}

export default ProfilePage;
