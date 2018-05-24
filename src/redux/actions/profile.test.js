import {
  addProfile
} from './profile';

test('should setup addProfile action object', () => {
  const action = addProfile({
    fit: "slim",
    gender: "Men",
    upper: "M"
  });
  expect(action).toEqual({
    type: 'ADD_PROFILE',
    profile: {
      fit: "slim",
      gender: "Men",
      upper: "M"
    }
  });
});
