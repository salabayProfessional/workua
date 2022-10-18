import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import root from './slices/root'

const persistConfig = {
  key: 'root',
  storage,
};

// const persistConfig = {
//   key: 'root',
//   storage,
//   transforms: [
//     createWhitelistFilter('notes', ['notes'])
//   ],
//   whitelist: ['notes']
// };

const persistedReducer = persistReducer(persistConfig, root);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const localStore = persistStore(store);
export default store;