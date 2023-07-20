import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import StackNavigation from './navigation/StackNavigation';
import store, { persistor } from './redux/store';
import { loaderSelectors } from './redux/reducers/loader';

import { Loader } from './shared';
import toastConfig from './utils/customToast';
import { UserSelectors } from './redux/reducers/user';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const AppWrapper = () => {
  const { indicatorLoading } = loaderSelectors();
  const { userLoading } = UserSelectors();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      <Loader isLoading={indicatorLoading} />
    </SafeAreaProvider>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWrapper />
      </PersistGate>
      <Toast config={toastConfig} />
    </Provider>
  );
};

export default App;
