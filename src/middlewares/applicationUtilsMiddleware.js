import axios from "axios";
import {
  fetchPlatformsListFailure,
  fetchPlatformsListSuccess,
  fetchStatusesListFailure,
  fetchStatusesListSuccess,
} from "../redux/slices/ApplicationsUtilsSlice";
import { AxiosErrorHandler } from "./errorMiddleware";

const APPLICATIONS_UTILS_URL = `${
  import.meta.env.VITE_API_URL
}/job-application`;

const AuthDetails = localStorage.getItem("auth");
const TOKEN = JSON.parse(AuthDetails).token;

export const getAppliedPlatforms = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${APPLICATIONS_UTILS_URL}/applied-platforms`,
      {
        withCredentials: true,
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );
    dispatch(fetchPlatformsListSuccess(response.data.data));
  } catch (error) {
    AxiosErrorHandler(error, fetchPlatformsListFailure, dispatch);
  }
};

export const getApplicationsStatusList = () => async (dispatch) => {
  try {
    const response = await axios.get(`${APPLICATIONS_UTILS_URL}/status`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    dispatch(fetchStatusesListSuccess(response.data.data));
  } catch (error) {
    AxiosErrorHandler(error, fetchStatusesListFailure, dispatch);
  }
};
