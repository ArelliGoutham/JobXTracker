import React, { useEffect, useState } from "react";
import { Edit2Icon, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../../../components/common/loading/LoadingSpinner";
import {
  createRecruiterJob,
  getRecruiterJob,
  updateRecruiterJob,
} from "../../../../middlewares/recruiterMiddleware";
import { JobType } from "../../../../utils/JobType";
import RichTextEditor from "../../../../components/richTextEditor/RichTextEditor";

const RecruiterJobsForm = () => {
  const [searchParams] = useSearchParams();
  const action = searchParams.get("action");
  const jobId = searchParams.get("job");

  const [isEditMode, setIsEditMode] = useState(false);
  const [jobForm, setJobForm] = useState({ ...defaultFormValues });

  const fetchedRecruiterJob = useSelector(
    (state) => state.recruiter.selectedJob
  );
  const loading = useSelector((state) => state.recruiter.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (action === "view" && jobId) {
      dispatch(getRecruiterJob(jobId));
    } else {
      setIsEditMode(true);
    }
  }, [action, jobId]);

  useEffect(() => {
    if (fetchedRecruiterJob) {
      setJobForm({ ...jobForm, ...fetchedRecruiterJob });
    }
  }, [fetchedRecruiterJob]);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setJobForm({ ...defaultFormValues });
      }, 0);
    };
  }, []);

  const handleSubmit = () => {
    if (action === "view") {
      const updatedJobForm = { ...jobForm };
      delete updatedJobForm.createdAt;
      dispatch(updateRecruiterJob(updatedJobForm));
      setIsEditMode(false);
    } else {
      const updatedJobForm = { ...jobForm };
      delete updatedJobForm.createdAt;
      delete updatedJobForm.id;
      dispatch(createRecruiterJob(updatedJobForm));
      setIsEditMode(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-10/12 h-full m-auto">
      {/* Main container */}
      <div className="md:h-[600px] max-h-[85vh] overflow-hidden flex flex-col">
        {/* Form header */}
        <div className="p-4 border-b bg-white flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">
            {isEditMode ? "New Job" : "View Job"}
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
        <div className="flex-1 overflow-y-auto p-4 mb-4">
          <form className="h-full">
            {/* Grid layout for desktop and mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1: Basic Info (1 part) */}
              <div className="space-y-4 md:col-span-1">
                <h3 className="font-medium text-gray-700 mb-4">
                  Basic Information
                </h3>

                <InputField
                  label="Company"
                  id="company"
                  value={jobForm.company}
                  setValue={(value) =>
                    setJobForm((prev) => ({ ...prev, company: value }))
                  }
                  isEditMode={isEditMode}
                  isRequired={true}
                />

                <InputField
                  label="Role"
                  id="role"
                  value={jobForm.role}
                  setValue={(value) =>
                    setJobForm((prev) => ({ ...prev, role: value }))
                  }
                  isEditMode={isEditMode}
                  isRequired={true}
                />

                <InputField
                  label="Location"
                  id="location"
                  value={jobForm.location}
                  setValue={(value) =>
                    setJobForm((prev) => ({ ...prev, location: value }))
                  }
                  isEditMode={isEditMode}
                  isRequired={true}
                />

                <SelectField
                  label="Type"
                  id="type"
                  value={jobForm.status}
                  options={[
                    JobType.FULLTIME,
                    JobType.PARTTIME,
                    JobType.INTERNSHIP,
                  ]}
                  setValue={(value) =>
                    setJobForm((prev) => ({ ...prev, type: value }))
                  }
                  isEditMode={isEditMode}
                  isRequired={true}
                />
                <InputField
                  label="Salary Range"
                  id="salary"
                  value={jobForm.salary}
                  setValue={(value) =>
                    setJobForm((prev) => ({ ...prev, salary: value }))
                  }
                  isEditMode={isEditMode}
                />
              </div>

              {/* Column 2: Additional Info (2 parts) */}
              <div className="space-y-4 md:col-span-2">
                <h3 className="font-medium text-gray-700 mb-4">
                  Additional Information
                </h3>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <RichTextEditor
                  value={jobForm.description}
                  onChange={(value) => {
                    console.log(value);
                    setJobForm((prev) => ({ ...prev, description: value }));
                  }}
                  placeholder="Start typing..."
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

const defaultFormValues = {
  id: 0,
  role: "",
  company: "",
  type: JobType.FULLTIME,
  location: "",
  salary: "",
  createdAt: "",
  description: "",
};

export default RecruiterJobsForm;
