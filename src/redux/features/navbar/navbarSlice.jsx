import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sections: {
    home: {
      active: true,
    },
    about: {
      active: false,
    },
    work: {
      active: false,
    },
    contact: {
      active: false,
    },
  },
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setSectionState: (state, action) => {
      const targetSection = action.payload;

      for (const section in state.sections) {
        if (section === targetSection) {
          state.sections[section].active = true;
        } else {
          state.sections[section].active = false;
        }
      }
    },
  },
});

export const { setSectionState } = navbarSlice.actions;

export default navbarSlice.reducer;
