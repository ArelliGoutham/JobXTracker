import { combineReducers } from "redux";
import AuthReducer from "./slices/AuthSlice";
import ApplicationsReducer from "./slices/ApplicationsSlice";
import RecruiterReducer from "./slices/RecruiterSlice";
import ApplicationsUtilsReducer from "./slices/ApplicationsUtilsSlice";

const rootReducer = combineReducers({
  auth: AuthReducer,
  applications: ApplicationsReducer,
  recruiter: RecruiterReducer,
  applicationsUtils: ApplicationsUtilsReducer,
});

export default rootReducer;
