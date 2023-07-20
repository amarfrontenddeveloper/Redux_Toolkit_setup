import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
// import FilesystemStorage from 'redux-persist-filesystem-storage';
import { userReducer, loaderReducer, customerReducer } from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  customer: customerReducer,
});


const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['loader', 'customer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // disable the serializable check for redux-persist's actions
      // serializableCheck: {
      //   ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      // },
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;

export const persistor = persistStore(store);
// reset persisted store when a user logs out
export const resetStore = async () => {
  return await persistor.purge().then(() => persistor.flush());
};
