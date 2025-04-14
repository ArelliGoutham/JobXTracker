import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutFailure,
  logoutStart,
  logoutSuccess,
  signupFailure,
  signupStart,
  signupSuccess,
} from "../redux/slices/AuthSlice";
import { AxiosErrorHandler } from "./errorMiddleware";

const AUTH_URL = `${import.meta.env.VITE_API_URL}/auth`;
const USER_URL = `${import.meta.env.VITE_API_URL}/users`;

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(loginStart());
    try {
      const response = await axios.post(`${AUTH_URL}/login`, {
        username: email,
        password,
      });
      const userDetails = response.data;

      localStorage.setItem("auth", JSON.stringify(userDetails.data));

      dispatch(loginSuccess(userDetails));
    } catch (error) {
      AxiosErrorHandler(error, loginFailure, dispatch);
    }
  };

export const signout = () => async (dispatch) => {
  dispatch(logoutStart());
  try {
    // await axios.post(
    //   `${AUTH_URL}/sign-out`,
    //   {},
    //   {
    //     withCredentials: true,
    //   }
    // );
    localStorage.removeItem("auth");
    dispatch(logoutSuccess());
  } catch (error) {
    AxiosErrorHandler(error, logoutFailure, dispatch);
  }
};

export const signup = (user) => async (dispatch) => {
  dispatch(signupStart());
  try {
    const response = await axios.post(`${USER_URL}`, user);
    dispatch(signupSuccess(response.data));
  } catch (error) {
    AxiosErrorHandler(error, signupFailure, dispatch);
  }
};
