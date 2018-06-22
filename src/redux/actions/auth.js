import { firebase, googleAuthProvider } from '../../modules/firebase/fire';

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};