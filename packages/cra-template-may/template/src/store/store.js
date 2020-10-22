import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './entities/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
