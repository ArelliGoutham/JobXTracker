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

const Applications = () => {
  const [openApplicationForm, setApplicationForm] = useState(false);
  const { userApplications } = useSelector((state) => state.applications);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApplications());
  }, [dispatch]);

  const handleNewApplication = () => {
    setApplicationForm(true);
    navigate("./form?action=new");
  };

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {applications.map((app, index) => (
              <>
                <ApplicationCard key={index} job={app} />
              </>
            ))}
          </div>
          {/* <table className="w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 tracking-wider">
                  Company
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 tracking-wider">
                  Position
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 tracking-wider">
                  Date Applied
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {applications.map((app) => (
                <Disclosure key={app.id}>
                  {({ open }) => (
                    <>
                      <tr className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {app.company}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {app.position}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {app.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                              app.status
                            )}`}
                          >
                            {app.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {app.dateApplied}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button
                            onClick={() => handleEditApplication(app.id)}
                            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors duration-150"
                          >
                            <Edit height={16} />
                          </button>
                          <DisclosureButton className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors duration-150">
                            <span>
                              {open ? "Hide Details" : "View Details"}
                            </span>
                            {open ? (
                              <ChevronsUpIcon className="ml-1.5 h-4 w-4" />
                            ) : (
                              <ChevronsDownIcon className="ml-1.5 h-4 w-4" />
                            )}
                          </DisclosureButton>
                        </td>
                      </tr>
                      <DisclosurePanel as="tr" className="bg-gray-50">
                        <td colSpan={5} className="px-6 py-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <div className="flex gap-2">
                                <span className="text-sm font-medium text-gray-500">
                                  Skills:
                                </span>
                                <span className="text-sm text-gray-900">
                                  {app.skills.join(", ")}
                                </span>
                              </div>
                              <div className="flex gap-2">
                                <span className="text-sm font-medium text-gray-500">
                                  Salary:
                                </span>
                                <span className="text-sm text-gray-900">
                                  {app.salary}
                                </span>
                              </div>
                              <div className="flex gap-2">
                                <span className="text-sm font-medium text-gray-500">
                                  Source:
                                </span>
                                <span className="text-sm text-gray-900">
                                  {app.source}
                                </span>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex gap-2">
                                <span className="text-sm font-medium text-gray-500">
                                  Next Steps:
                                </span>
                                <span className="text-sm text-gray-900">
                                  {app.nextSteps}
                                </span>
                              </div>
                              <div className="flex gap-2">
                                <span className="text-sm font-medium text-gray-500">
                                  Notes:
                                </span>
                                <span className="text-sm text-gray-900">
                                  {app.notes}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              ))}
            </tbody>
          </table> */}
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

const applications = [
  {
    id: 1,
    company: "Atlassian",
    role: "Software Engineer",
    location: "New York, NY",
    status: "bookmarked",
    salary: "$100,000 - $130,000",
    jobPostingLink: "https://www.example.com/job/12345",
    skills: "React, Node.js, TypeScript, PostgreSQL",
    applicationSource: "linkedin",
    description:
      "We are looking for a skilled full stack developer to work on innovative web applications. The ideal candidate should have experience with React, Node.js, and PostgreSQL.",
    notes: "Candidate must be willing to work in a remote environment.",
    createdAt: "2025-02-21",
  },
  {
    id: 2,
    company: "Atlassian",
    role: "Software Engineer",
    location: "New York, NY",
    status: "bookmarked",
    salary: "$100,000 - $130,000",
    jobPostingLink: "https://www.example.com/job/12345",
    skills: "React, Node.js, TypeScript, PostgreSQL",
    applicationSource: "linkedin",
    description:
      "We are looking for a skilled full stack developer to work on innovative web applications. The ideal candidate should have experience with React, Node.js, and PostgreSQL.",
    notes: "Candidate must be willing to work in a remote environment.",
    createdAt: "2025-02-21",
  },
];

export default Applications;
