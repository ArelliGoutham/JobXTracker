export const AxiosErrorHandler = (error, action, dispatch) => {
  console.log(error);
  if (error.response) {
    let message = "";
    let statusCode = error.response.status;

    switch (statusCode) {
      case 401:
        message = "Session timeout. Please Logout and Login again";
        break;
      case 404:
        message = "The requested resource was not found.";
        break;
      case 500:
        message =
          error.response.data?.message ||
          "Server Error. Please try again later.";
        break;
      case 429:
        message =
          error.response.data?.message || "Too many requests. Try again later.";
        break;
      default:
        message =
          error.response.data?.message || "An unexpected error occurred.";
        break;
    }

    dispatch(
      action({
        statusCode,
        message,
      })
    );
  } else if (error.request) {
    dispatch(
      action({
        message: error.message || "Request was made, but no response received.",
      })
    );
  } else {
    dispatch(
      action({
        message: "Error occurred while making the request.",
      })
    );
  }
};
