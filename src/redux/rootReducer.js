import { combineReducers } from "redux";
import AuthReducer from "./slices/AuthSlice";
import ApplicationsReducer from "./slices/ApplicationsSlice";

const rootReducer = combineReducers({
  auth: AuthReducer,
  applications: ApplicationsReducer,
});

export default rootReducer;
