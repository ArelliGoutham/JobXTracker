import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userApplications: [],
  application: null,
  error: null,
  loading: false,
};

const AuthSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    fetchApplicationsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchApplicationsSuccess: (state, action) => {
      state.loading = false;
      state.userApplications = action.payload;
    },
    fetchApplicationsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchApplicationStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchApplicationSuccess: (state, action) => {
      state.loading = false;
      state.application = action.payload;
    },
    fetchApplicationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createApplicationStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createApplicationSuccess: (state, action) => {
      state.loading = false;
      state.application = action.payload;
    },
    createApplicationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateApplicationStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateApplicationSuccess: (state, action) => {
      state.loading = false;
      const updatedApplications = state.userApplications.map((app) =>
        app.id === action.payload.id ? action.payload : app
      );
      state.userApplications = updatedApplications;
    },
    updateApplicationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchApplicationsStart,
  fetchApplicationsSuccess,
  fetchApplicationsFailure,
  fetchApplicationStart,
  fetchApplicationSuccess,
  fetchApplicationFailure,
  createApplicationStart,
  createApplicationSuccess,
  createApplicationFailure,
  updateApplicationStart,
  updateApplicationSuccess,
  updateApplicationFailure,
} = AuthSlice.actions;

export default AuthSlice.reducer;
