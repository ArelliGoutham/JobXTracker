import { useEffect, useState } from "react";
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from "@headlessui/react";
import { ChevronsUpIcon, ChevronsDownIcon, Plus, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ApplicationCard from "../../../components/jobs/applicationCards/ApplicationCard";
import { useDispatch, useSelector } from "react-redux";
import { getApplications } from "../../../middlewares/applicationsMIddleware";
import LoadingSpinner from "../../../components/common/loading/LoadingSpinner";

const Applications = () => {
  const [openApplicationForm, setApplicationForm] = useState(false);
  const { userApplications, loading } = useSelector(
    (state) => state.applications
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApplications());
  }, [dispatch]);

  const handleNewApplication = () => {
    setApplicationForm(true);
    navigate("./form?action=new");
  };

  if (loading) <LoadingSpinner />;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-neutral-50 shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">
              Applications
            </h1>
            <p className="text-neutral-600 mt-2">
              Track and manage your job applications
            </p>
          </div>

          <button
            onClick={handleNewApplication}
            className="btn btn-primary flex items-center"
          >
            <Plus className="mr-2 h-4 w-4" /> Add Application
          </button>
        </div>
        <div className="overflow-x-auto">
          {userApplications.length === 0 && (
            <>
              <p className="text-neutral-400 text-center text-lg">
                No applications found. Click the "Add Application" button to
                create your first job application.
              </p>
            </>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {userApplications.map((app, index) => (
              <ApplicationCard key={index} job={app} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function for status colors
const getStatusColor = (status) => {
  const colors = {
    applied: "text-blue-600 bg-blue-50",
    interview: "text-purple-600 bg-purple-50",
    offer: "text-green-600 bg-green-50",
    rejected: "text-red-600 bg-red-50",
    pending: "text-yellow-600 bg-yellow-50",
  };
  return colors[status] || "text-gray-600 bg-gray-50";
};

export default Applications;
