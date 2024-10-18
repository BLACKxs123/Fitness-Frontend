import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  groups: [],
};

const groupSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    setGroups: (state, action) => {
      state.groups = action.payload;
    },
    joinGroup: (state, action) => {
      const group = state.groups.find(g => g.id === action.payload);
      if (group) {
        group.members += 1;
      }
    },
  },
});

// Export actions and reducer
export const { setGroups, joinGroup } = groupSlice.actions;
export default groupSlice.reducer;
