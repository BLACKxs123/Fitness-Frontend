import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workouts: [],
};

const workoutSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    addWorkout: (state, action) => {
      state.workouts.push(action.payload);
    },
    setWorkouts: (state, action) => {
      state.workouts = action.payload;
    },
  },
});

export const { addWorkout, setWorkouts } = workoutSlice.actions;
export default workoutSlice.reducer;
