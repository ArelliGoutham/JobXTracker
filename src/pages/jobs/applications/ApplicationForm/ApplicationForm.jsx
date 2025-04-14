import React, { useEffect, useState } from "react";
import { Edit2Icon, LinkIcon, X } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createApplication,
  getApplication,
  updateApplication,
} from "../../../../middlewares/applicationsMIddleware";
import LoadingSpinner from "../../../../components/common/loading/LoadingSpinner";
import {
  getApplicationsStatusList,
  getAppliedPlatforms,
} from "../../../../middlewares/applicationUtilsMiddleware";

const ApplicationForm = () => {
  const [searchParams] = useSearchParams();
  const action = searchParams.get("action");
  const applicationId = searchParams.get("application");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isEditMode, setIsEditMode] = useState(false);
  const [application, setApplication] = useState({ ...defaultFormValues });

  const fetchedApplication = useSelector(
    (state) => state.applications.application
  );
  const { error, loading } = useSelector((state) => state.applications);

  const { appliedPlatformsList, applicationStatusList } = useSelector(
    (state) => state.applicationsUtils
  );

  useEffect(() => {
    if (action === "view" && applicationId) {
      dispatch(getApplication(applicationId));
    } else {
      setIsEditMode(true);
    }
  }, [action, applicationId]);

  useEffect(() => {
    if (fetchedApplication) {
      setApplication({ ...application, ...fetchedApplication });
    }
  }, [fetchedApplication]);

  useEffect(() => {
    if (appliedPlatformsList.length === 0) {
      dispatch(getAppliedPlatforms());
    }
    if (applicationStatusList.length === 0) {
      dispatch(getApplicationsStatusList());
    }
  }, []);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setApplication({ ...defaultFormValues });
      }, 0);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedApplication = { ...application };

    if (action === "view") {
      delete updatedApplication.createdAt;
      await dispatch(updateApplication(updatedApplication));
      setIsEditMode(false);
    } else {
      try {
        await dispatch(createApplication(updatedApplication));
        navigate("/applications");
      } catch (err) {
        console.error("Error creating application:", err);
      }
    }
  };

  // const handleSubmit = async () => {
  //   if (!validateApplication(application)) {
  //     alert("Please fill in all required fields.");
  //     return;
  //   }
  //   if (action === "view") {
  //     const updatedApplication = { ...application };
  //     delete updatedApplication.createdAt;
  //     await dispatch(updateApplication(updatedApplication));
  //     setIsEditMode(false);
  //   } else {
  //     try {
  //       await dispatch(createApplication(application));
  //       navigate("/applications");
  //     } catch (err) {}
  //   }
  // };

  const validateApplication = (app) => {
    if (!app.company || !app.role || !app.location) return false;
    if (!app.appliedPlatform || !app.appliedPlatform.id) return false;
    if (!app.status || !app.status.id) return false;
    return true;
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-10/12 h-full m-auto">
      {/* Main container */}
      <div className="md:h-[600px] max-h-[85vh] flex flex-col">
        {/* Form header */}
        <div className="p-4 border-b bg-white flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">
            {isEditMode ? "New Application" : "View Application"}
          </h2>
          <button
            onClick={() => {
              setIsEditMode((prev) => !prev);
            }}
            className="btn btn-secondary"
          >
            {!isEditMode ? <Edit2Icon height={16} /> : <X height={16} />}
          </button>
        </div>

        {/* Scrollable content */}
        <form className="flex-1 flex flex-col" onSubmit={handleSubmit}>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700 mb-4">
                  Basic Information
                </h3>

                <InputField
                  label="Company"
                  id="company"
                  value={application.company}
                  setValue={(value) =>
                    setApplication((prev) => ({ ...prev, company: value }))
                  }
                  isEditMode={isEditMode}
                  isRequired={true}
                />

                <InputField
                  label="Role"
                  id="role"
                  value={application.role}
                  setValue={(value) =>
                    setApplication((prev) => ({ ...prev, role: value }))
                  }
                  isEditMode={isEditMode}
                  isRequired={true}
                />

                <InputField
                  label="Location"
                  id="location"
                  value={application.location}
                  setValue={(value) =>
                    setApplication((prev) => ({ ...prev, location: value }))
                  }
                  isEditMode={isEditMode}
                  isRequired={true}
                />

                <SelectField
                  label="Applied Platform"
                  id="appliedPlatform"
                  value={application.appliedPlatform?.name || ""}
                  options={appliedPlatformsList.map(
                    (platform) => platform.name
                  )}
                  setValue={(value) =>
                    setApplication((prev) => ({
                      ...prev,
                      appliedPlatform: appliedPlatformsList.find(
                        (platform) => platform.name === value
                      ),
                    }))
                  }
                  isEditMode={isEditMode}
                  isRequired={true}
                />
              </div>

              {/* Job Details */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700 mb-4">Job Details</h3>

                <SelectField
                  label="Status"
                  id="status"
                  value={application.status?.name || ""}
                  options={applicationStatusList.map((status) => status.name)}
                  setValue={(value) => {
                    setApplication((prev) => ({
                      ...prev,
                      status: applicationStatusList.find(
                        (status) => status.name === value
                      ),
                    }));
                  }}
                  isEditMode={isEditMode}
                  isRequired={true}
                />

                <InputField
                  label="Salary Range"
                  id="salary"
                  value={application.salaryRange}
                  setValue={(value) =>
                    setApplication((prev) => ({ ...prev, salaryRange: value }))
                  }
                  isEditMode={isEditMode}
                />

                <div className="space-y-2">
                  <label
                    htmlFor="jobPostingLink"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Posting Link
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="jobPostingLink"
                      type="url"
                      placeholder="https://..."
                      value={application.postingUrl}
                      onChange={(e) =>
                        setApplication((prev) => ({
                          ...prev,
                          postingUrl: e.target.value,
                        }))
                      }
                      disabled={!isEditMode}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <button
                      onClick={() =>
                        window.open(application.postingUrl, "_blank")
                      }
                      type="button"
                      className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <LinkIcon className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700 mb-4">
                  Additional Information
                </h3>

                <InputField
                  label="Required Skills"
                  id="skills"
                  value={application.requiredSkills}
                  setValue={(value) =>
                    setApplication((prev) => ({
                      ...prev,
                      requiredSkills: value,
                    }))
                  }
                  isEditMode={isEditMode}
                />

                <TextAreaField
                  label="Job Description"
                  id="description"
                  value={application.jobDescription}
                  setValue={(value) =>
                    setApplication((prev) => ({
                      ...prev,
                      jobDescription: value,
                    }))
                  }
                  isEditMode={isEditMode}
                />

                <TextAreaField
                  label="Notes"
                  id="notes"
                  value={application.notes}
                  setValue={(value) =>
                    setApplication((prev) => ({ ...prev, notes: value }))
                  }
                  isEditMode={isEditMode}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          {isEditMode && (
            <div className="p-4 border-t bg-white">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Submit Application
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, id, value, setValue, isEditMode, isRequired }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      id={id}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={!isEditMode}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
      required={isRequired}
    />
  </div>
);

const SelectField = ({
  label,
  id,
  value,
  options,
  setValue,
  isEditMode,
  isRequired,
}) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <select
      id={id}
      value={value || ""}
      onChange={(e) => setValue(e.target.value)}
      disabled={!isEditMode}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
      required={isRequired}
    >
      <option value="" disabled>
        -- Select an option --
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </option>
      ))}
    </select>
  </div>
);

const TextAreaField = ({
  label,
  id,
  value,
  setValue,
  isEditMode,
  isRequired,
}) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <textarea
      id={id}
      rows={3}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={!isEditMode}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
      required={isRequired}
    />
  </div>
);

const defaultFormValues = {
  id: "",
  company: "",
  role: "",
  location: "",
  appliedPlatform: "",
  status: "",
  salaryRange: "",
  postingUrl: "",
  requiredSkills: "",
  jobDescription: "",
  notes: "",
};

export default ApplicationForm;
