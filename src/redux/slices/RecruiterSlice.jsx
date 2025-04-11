import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobsPosted: [],
  selectedJob: null,
  error: null,
  loading: false,
};

const RecruiterSlice = createSlice({
  name: "recruiter",
  initialState,
  reducers: {
    fetchJobsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchJobsSuccess: (state, action) => {
      state.loading = false;
      state.jobsPosted = action.payload;
    },
    fetchJobsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchJobStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchJobSuccess: (state, action) => {
      state.loading = false;
      state.selectedJob = action.payload;
    },
    fetchJobFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createJobStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createJobSuccess: (state, action) => {
      state.loading = false;
      state.selectedJob = action.payload;
    },
    createJobFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateJobStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateJobSuccess: (state, action) => {
      state.loading = false;
      state.selectedJob = action.payload;
    },
    updateJobFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchJobsStart,
  fetchJobsSuccess,
  fetchJobsFailure,
  fetchJobStart,
  fetchJobSuccess,
  fetchJobFailure,
  createJobStart,
  createJobSuccess,
  createJobFailure,
  updateJobStart,
  updateJobSuccess,
  updateJobFailure,
} = RecruiterSlice.actions;

export default RecruiterSlice.reducer;
