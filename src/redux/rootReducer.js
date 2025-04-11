import { combineReducers } from "redux";
import AuthReducer from "./slices/AuthSlice";
import ApplicationsReducer from "./slices/ApplicationsSlice";
import RecruiterReducer from "./slices/RecruiterSlice";

const rootReducer = combineReducers({
  auth: AuthReducer,
  applications: ApplicationsReducer,
  recruiter: RecruiterReducer,
});

export default rootReducer;
