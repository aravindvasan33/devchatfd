// appStore.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Correctly import the default export
import feedReducer from './feedSlice';
import ConnectionReducer from './connectionSlice';
const store = configureStore({
  reducer: {user:userReducer,
    feed:feedReducer,connection:ConnectionReducer,   // Use 'user' as the key for the reducer
  },
});

export default store;
