import { connect } from 'react-redux';
import addProfile from '../../redux/actions/profile'
import ProfileForm from '../../components/ProfileForm';

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  };
};

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
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);

export default Profile;
