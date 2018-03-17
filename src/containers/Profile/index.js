import { connect } from 'react-redux';
import addProfile from '../../redux/actions/profile'
import ProfileForm from '../../components/ProfileForm';

const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onSubmit: (profile) => {
      dispatch(addProfile(profile));
    }
  };
};

const Profile = connect(
  null,
  mapDispatchToProps
)(ProfileForm);

export default Profile;
