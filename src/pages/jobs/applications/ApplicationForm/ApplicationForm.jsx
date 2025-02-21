import React, { useEffect, useState } from "react";
import { Edit2Icon, LinkIcon, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  createApplication,
  getApplication,
} from "../../../../middlewares/applicationsMIddleware";

// Sample application data (mocked API response)
const SAMPLE_APPLICATIONS = [
  {
    id: "1",
    company: "ABC Corp",
    position: "Software Engineer",
    location: "Seattle",
    status: "offer",
    dateApplied: "2022-01-01",
    skills: ["JavaScript", "React", "Node.js"],
    salary: "$100,000",
    source: "LinkedIn",
    jobPostingLink: "https://example.com/job-posting",
    notes: "No specific rejection reason provided",
    description: "Full-stack developer role focusing on React and Node.js",
  },
];

const ApplicationForm = () => {
  const [searchParams] = useSearchParams();
  const action = searchParams.get("action");
  const applicationId = searchParams.get("application");

  const [isEditMode, setIsEditMode] = useState(false);
  const [application, setApplication] = useState({
    company: "",
    position: "",
    location: "",
    status: "",
    salary: "",
    jobPostingLink: "",
    skills: "",
    notes: "",
    description: "",
    applicationSource: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (action === "view" && applicationId) {
      // Simulating API fetch with static data
      dispatch(getApplication(applicationId));
    } else {
      setIsEditMode(true);
    }
  }, [action, applicationId]);

  const handleSubmit = () => {
    dispatch(createApplication(application));
  };
  return (
    <div className="w-10/12 h-full m-auto">
      {/* Main container */}
      <div className="md:h-[600px] max-h-[85vh] overflow-hidden flex flex-col">
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
        <div className="flex-1 overflow-y-auto p-4">
          <form className="h-full">
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
                  value={application.position}
                  setValue={(value) =>
                    setApplication((prev) => ({ ...prev, position: value }))
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
                  value={application.applicationSource}
                  options={["linkedin", "indeed", "others"]}
                  setValue={(value) =>
                    setApplication((prev) => ({ ...prev, status: value }))
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
                  value={application.status}
                  options={[
                    "bookmarked",
                    "applied",
                    "scheduled",
                    "accepted",
                    "rejected",
                    "withdrawn",
                  ]}
                  setValue={(value) =>
                    setApplication((prev) => ({ ...prev, status: value }))
                  }
                  isEditMode={isEditMode}
                  isRequired={true}
                />

                <InputField
                  label="Salary Range"
                  id="salary"
                  value={application.salary}
                  setValue={(value) =>
                    setApplication((prev) => ({ ...prev, salary: value }))
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
                      value={application.jobPostingLink}
                      onChange={(e) =>
                        setApplication((prev) => ({
                          ...prev,
                          jobPostingLink: e.target.value,
                        }))
                      }
                      disabled={!isEditMode}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <button
                      onClick={() =>
                        window.open(application.jobPostingLink, "_blank")
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
                  value={application.skills}
                  setValue={(value) =>
                    setApplication((prev) => ({ ...prev, skills: value }))
                  }
                  isEditMode={isEditMode}
                />

                <TextAreaField
                  label="Job Description"
                  id="description"
                  value={application.description}
                  setValue={(value) =>
                    setApplication((prev) => ({ ...prev, description: value }))
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
          </form>
        </div>

        {/* Footer */}
        {isEditMode && (
          <div className="p-4 border-t bg-white">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
              onClick={handleSubmit}
            >
              Submit Application
            </button>
          </div>
        )}
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
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={!isEditMode}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
      required={isRequired}
    >
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

export default ApplicationForm;
