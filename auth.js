import * as Keychain from 'react-native-keychain';
import {resetStore} from '../redux/store';

export const setAuthToken = token => {
  Keychain.setGenericPassword('token', token);
};

export const getAuthToken = () => {
  return Keychain.getGenericPassword().then(credentials =>
    credentials === false ? null : credentials.password,
  );
};

export const AUTHORIZATION_HEADER_NAME = 'Authorization';

export const getAuthorizationHeaderValue = () => {
  return getAuthToken()
    .then(authToken => `Bearer ${authToken || ''}`)
    .catch(() => undefined);
};

const resetAuthToken = () => {
  return Keychain.resetGenericPassword();
};

export const logoutAction = async () => {
  await resetAuthToken();
  await resetStore();
};
