import * as constants from './constants';

export const signInSuccess = user => ({
  type: constants.SIGN_IN_SUCCESS,
  user,
});

export const signOut = user => ({
  type: constants.SIGN_OUT,
  user,
});
