import axios from "axios";
import {
  createApplicationFailure,
  createApplicationStart,
  createApplicationSuccess,
  fetchApplicationFailure,
  fetchApplicationsFailure,
  fetchApplicationsStart,
  fetchApplicationsSuccess,
  fetchApplicationStart,
  fetchApplicationSuccess,
  updateApplicationFailure,
  updateApplicationStart,
  updateApplicationSuccess,
} from "../redux/slices/ApplicationsSlice";
import { AxiosErrorHandler } from "./errorMiddleware";

const APPLICATIONS_URL = `${import.meta.env.VITE_API_URL}/applications`;

export const createApplication = (body) => async (dispatch) => {
  dispatch(createApplicationStart());
  try {
    const response = await axios.post(`${APPLICATIONS_URL}`, body, {
      withCredentials: true,
    });
    dispatch(createApplicationSuccess(response.data));
  } catch (error) {
    AxiosErrorHandler(error, createApplicationFailure, dispatch);
  }
};

export const getApplications = () => async (dispatch) => {
  dispatch(fetchApplicationsStart());
  try {
    const response = await axios.get(`${APPLICATIONS_URL}`, {
      withCredentials: true,
    });
    const applications = response.data;
    dispatch(fetchApplicationsSuccess(applications.data));
  } catch (error) {
    AxiosErrorHandler(error, fetchApplicationsFailure, dispatch);
  }
};

export const getApplication = (applicationId) => async (dispatch) => {
  dispatch(fetchApplicationStart());
  try {
    const response = await axios.get(`${APPLICATIONS_URL}/${applicationId}`, {
      withCredentials: true,
    });
    dispatch(fetchApplicationSuccess(response.data));
  } catch (error) {
    AxiosErrorHandler(error, fetchApplicationFailure, dispatch);
  }
};

export const updateApplication = (body) => async (dispatch) => {
  dispatch(updateApplicationStart());
  try {
    const response = await axios.put(`${APPLICATIONS_URL}`, body, {
      withCredentials: true,
    });
    dispatch(updateApplicationSuccess(response.data));
  } catch (error) {
    AxiosErrorHandler(error, updateApplicationFailure, dispatch);
  }
};
