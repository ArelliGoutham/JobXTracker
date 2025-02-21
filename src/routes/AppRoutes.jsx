import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeneralLayout from "../layouts/general/GeneralLayout";
import AuthLayout from "../layouts/auth/AuthLayout";
import HomePage from "../pages/general/home";
import About from "../pages/general/about";
import LoginPage from "../pages/auth/login/login";
import TermsOfService from "../pages/general/terms/TermsOfService";
import PrivacyPolicy from "../pages/general/privacy/PrivacyPolicy";
import ContactUs from "../pages/general/contact/ContactUs";
import Features from "../pages/general/features";
import Dashboard from "../pages/jobs/dashboard/Dashboard";
import Applications from "../pages/jobs/applications/Applications";
import JobsLayout from "../layouts/jobs/JobsLayout";
import ApplicationForm from "../pages/jobs/applications/ApplicationForm";
import PrivateRoute from "../components/PrivateRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes with a shared layout */}
        <Route element={<GeneralLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/features" element={<Features />} />
        </Route>

        {/* Authentication routes (Login, Signup) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<JobsLayout />}>
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
          <Route
            path="/applications"
            element={<PrivateRoute element={<Applications />} />}
          />
          <Route
            path="/applications/form"
            element={<PrivateRoute element={<ApplicationForm />} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
