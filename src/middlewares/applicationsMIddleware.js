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

const APPLICATIONS_URL = `${import.meta.env.VITE_API_URL}/job-application`;

const AuthDetails = localStorage.getItem("auth");
const TOKEN = JSON.parse(AuthDetails).token;

export const createApplication = (body) => async (dispatch) => {
  body.appliedPlatform = body.appliedPlatform.id;
  body.status = body.status.id;
  dispatch(createApplicationStart());
  try {
    const response = await axios.post(`${APPLICATIONS_URL}`, body, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    dispatch(createApplicationSuccess(response.data));
  } catch (error) {
    AxiosErrorHandler(error, createApplicationFailure, dispatch);
    throw error;
  }
};

export const getApplications =
  (page = 0, size = 10) =>
  async (dispatch) => {
    dispatch(fetchApplicationsStart());
    try {
      const response = await axios.get(`${APPLICATIONS_URL}`, {
        params: { page, size },
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
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
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    dispatch(fetchApplicationSuccess(response.data.data));
  } catch (error) {
    AxiosErrorHandler(error, fetchApplicationFailure, dispatch);
  }
};

export const updateApplication = (body) => async (dispatch) => {
  body.appliedPlatform = body.appliedPlatform.id;
  body.status = body.status.id;
  dispatch(updateApplicationStart());
  try {
    const response = await axios.patch(`${APPLICATIONS_URL}/${body.id}`, body, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    dispatch(updateApplicationSuccess(response.data.data));
  } catch (error) {
    AxiosErrorHandler(error, updateApplicationFailure, dispatch);
  }
};
