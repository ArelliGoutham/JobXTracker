import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appliedPlatformsList: [],
  applicationStatusList: [],
  error: null,
};

const ApplicationsUtilsSlice = createSlice({
  name: "applicationsUtils",
  initialState,
  reducers: {
    fetchPlatformsListSuccess: (state, action) => {
      state.appliedPlatformsList = action.payload;
    },
    fetchPlatformsListFailure: (state, action) => {
      state.error = action.payload;
    },
    fetchStatusesListSuccess: (state, action) => {
      state.applicationStatusList = action.payload;
    },
    fetchStatusesListFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  fetchPlatformsListSuccess,
  fetchPlatformsListFailure,
  fetchStatusesListSuccess,
  fetchStatusesListFailure,
} = ApplicationsUtilsSlice.actions;

export default ApplicationsUtilsSlice.reducer;
