import { configureStore } from '@reduxjs/toolkit';
import courseReducer from '../features/Learning/courseSlice';  // Import the course slice

const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});

export default store;
