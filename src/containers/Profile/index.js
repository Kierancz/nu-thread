import { connect } from 'react-redux';
import addProfile from '../../redux/actions/profile'
import ProfileForm from '../../components/ProfileForm';

const mapDispatchToProps = (
  dispatch,
  ownProps
) => {
  return {
    onSubmit: () => {
      console.log("in mapDispatchToProps onSubmit");
      dispatch(addProfile(ownProps));
    }
  };
};

const Profile = connect(
  null,
  mapDispatchToProps
)(ProfileForm);

export default Profile;