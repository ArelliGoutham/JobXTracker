import axios from "axios";
import {
  createJobFailure,
  createJobStart,
  createJobSuccess,
  fetchJobFailure,
  fetchJobsFailure,
  fetchJobsStart,
  fetchJobsSuccess,
  fetchJobStart,
  fetchJobSuccess,
  updateJobFailure,
  updateJobStart,
  updateJobSuccess,
} from "../redux/slices/RecruiterSlice";
import { AxiosErrorHandler } from "./errorMiddleware";

const RECRUITER_URL = `${import.meta.env.VITE_API_URL}/recruiter`;
const JOBS_URL = `${import.meta.env.VITE_API_URL}/jobs`;

export const createRecruiterJob = (body) => async (dispatch) => {
  dispatch(createJobStart());
  try {
    const response = await axios.post(`${JOBS_URL}`, body, {
      withCredentials: true,
    });
    dispatch(createJobSuccess(response.data));
  } catch (error) {
    AxiosErrorHandler(error, createJobFailure, dispatch);
  }
};

export const getRecruiterJobs = () => async (dispatch) => {
  dispatch(fetchJobsStart());
  try {
    const response = await axios.get(`${RECRUITER_URL}`, {
      withCredentials: true,
    });
    const applications = response.data;
    dispatch(fetchJobsSuccess(applications.data));
  } catch (error) {
    AxiosErrorHandler(error, fetchJobsFailure, dispatch);
  }
};

export const getRecruiterJob = (applicationId) => async (dispatch) => {
  dispatch(fetchJobStart());
  try {
    const response = await axios.get(`${RECRUITER_URL}/${applicationId}`, {
      withCredentials: true,
    });
    dispatch(fetchJobSuccess(response.data));
  } catch (error) {
    AxiosErrorHandler(error, fetchJobFailure, dispatch);
  }
};

export const updateRecruiterJob = (body) => async (dispatch) => {
  dispatch(updateJobStart());
  try {
    const response = await axios.put(`${RECRUITER_URL}`, body, {
      withCredentials: true,
    });
    dispatch(updateJobSuccess(response.data));
  } catch (error) {
    AxiosErrorHandler(error, updateJobFailure, dispatch);
  }
};
