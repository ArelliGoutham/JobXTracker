import React from "react";
import { MapPin, DollarSign, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ApplicationCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 max-w-sm border border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{job.company}</p>
          <h3 className="text-lg font-medium text-gray-900 mt-0.5">
            {job.role}
          </h3>
        </div>
        <Link
          to={`./form?action=view&application=${job.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:text-orange-600"
        >
          <ExternalLink className="w-5 h-5" />
        </Link>
      </div>

      <div className="flex gap-4 mt-2 text-sm text-gray-600">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center">
          <DollarSign className="w-4 h-4 mr-1" />
          <span>{job.salary}</span>
        </div>
      </div>

      <div className="mt-3">
        <div className="flex flex-wrap gap-1">
          {job.skills.split(", ").map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 bg-orange-50 text-orange-700 rounded text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <a
          href={job.jobPostingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-500 hover:text-blue-500 flex items-center"
        >
          Applied via {job.applicationSource}
        </a>
      </div>
    </div>
  );
};

export default ApplicationCard;
