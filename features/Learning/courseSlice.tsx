import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCourses: JSON.parse(localStorage.getItem('selectedCourses')) || [], // Use array
  completedCourses: JSON.parse(localStorage.getItem('completedCourses')) || [], // Completed courses
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
    completeCourse: (state, action) => {
      // Find the course in the selectedCourses array
      const completedCourse = state.selectedCourses.find(
        (course) => course.id === parseInt(action.payload.courseId)
      );

      if (completedCourse) {
        // Check if the course is already completed
        const courseAlreadyCompleted = state.completedCourses.find(
          (course) => course.id === completedCourse.id
        );

        // If not already completed, add it to the completedCourses array
        if (!courseAlreadyCompleted) {
          state.completedCourses.push(completedCourse);
          localStorage.setItem(
            'completedCourses',
            JSON.stringify(state.completedCourses)
          ); // Save to localStorage
        }

        // Remove the course from selectedCourses
        state.selectedCourses = state.selectedCourses.filter(
          (course) => course.id !== completedCourse.id
        );
        localStorage.setItem(
          'selectedCourses',
          JSON.stringify(state.selectedCourses)
        ); // Update localStorage
      }
    },
  },
});

export const { addCourse, completeCourse } = courseSlice.actions;
export default courseSlice.reducer;
