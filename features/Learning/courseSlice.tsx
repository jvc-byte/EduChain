import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCourses: JSON.parse(localStorage.getItem('selectedCourses')) || [], // Use array
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    addCourse: (state, action) => {
      // Check if the course already exists in the array by comparing IDs
      const existingCourse = state.selectedCourses.find(
        (course) => course.id === action.payload.id
      );

      // Only add the course if it doesn't already exist
      if (!existingCourse) {
        state.selectedCourses.push(action.payload); // Add new course to the array
        localStorage.setItem(
          'selectedCourses',
          JSON.stringify(state.selectedCourses)
        ); // Update localStorage
      }
    },
  },
});

export const { addCourse } = courseSlice.actions;

export default courseSlice.reducer;
