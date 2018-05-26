import { getProfile } from './index';
import profile from './index';

const state = {
  profile: {
    fit: "slim",
    gender: "Men",
    upper: "M"
  }
};
// Test Selectors
test('selector getProfile should return profile object', () => {
  const result = getProfile(state);
  expect(result).toEqual(state.profile);
});

// Test Reducers
test('should set addProfile state', () => {
  const result = profile({}, { 
    type: 'ADD_PROFILE', 
    profile: state.profile 
  });
  expect(result).toEqual({
    fit: "slim",
    gender: "Men",
    upper: "M"
  });
});
