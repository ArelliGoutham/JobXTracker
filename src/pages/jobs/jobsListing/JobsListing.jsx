import React, { useState } from "react";
import {
  Search,
  Bell,
  User,
  MapPin,
  Clock,
  DollarSign,
  Send,
} from "lucide-react";
import DropdownFilter from "../../../components/jobs/dropdownFilters/DropdownFilters";

// Dummy data for job listings
const jobs = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    type: "Full-time",
    location: "Remote",
    salary: "$120k - $150k",
    posted: "2 days ago",
    description: `
      <h2 class="text-xl font-semibold text-gray-800 mb-4">About the role</h2>
      <p class="text-gray-600 leading-relaxed">
        We are looking for a Senior Frontend Developer to join our growing team. You will be responsible for building and maintaining high-quality web applications using modern frontend technologies. The ideal candidate should have extensive experience with React, TypeScript, and modern web development practices.
      </p>
      <h2 class="text-xl font-semibold text-gray-800 mb-4 mt-6">Requirements</h2>
      <ul class="list-disc pl-6 text-gray-600 space-y-2">
        <li>5+ years of experience in frontend development</li>
        <li>Strong proficiency in React, TypeScript, and modern JavaScript</li>
        <li>Experience with state management solutions (Redux, MobX, etc.)</li>
        <li>Understanding of responsive design and cross-browser compatibility</li>
        <li>Experience with testing frameworks and CI/CD pipelines</li>
      </ul>
      <h2 class="text-xl font-semibold text-gray-800 mb-4 mt-6">Benefits</h2>
      <ul class="list-disc pl-6 text-gray-600 space-y-2">
        <li>Competitive salary and equity package</li>
        <li>Health, dental, and vision insurance</li>
        <li>Flexible working hours and remote work options</li>
        <li>Professional development budget</li>
        <li>Regular team events and meetups</li>
      </ul>
    `,
  },
  {
    id: 2,
    role: "Product Designer",
    company: "DesignHub Co.",
    type: "Full-time",
    location: "Hybrid",
    salary: "$90k - $120k",
    posted: "3 days ago",
    description: `
      <h2 class="text-xl font-semibold text-gray-800 mb-4">About the role</h2>
      <p class="text-gray-600 leading-relaxed">
        We are seeking a talented Product Designer to join our team. You will work closely with our product and engineering teams to create intuitive and visually appealing user interfaces.
      </p>
      <h2 class="text-xl font-semibold text-gray-800 mb-4 mt-6">Requirements</h2>
      <ul class="list-disc pl-6 text-gray-600 space-y-2">
        <li>3+ years of experience in product design</li>
        <li>Proficiency in Figma, Sketch, or Adobe XD</li>
        <li>Strong understanding of user-centered design principles</li>
        <li>Experience working in agile environments</li>
      </ul>
      <h2 class="text-xl font-semibold text-gray-800 mb-4 mt-6">Benefits</h2>
      <ul class="list-disc pl-6 text-gray-600 space-y-2">
        <li>Competitive salary and benefits</li>
        <li>Flexible work hours</li>
        <li>Remote work options</li>
      </ul>
    `,
  },
  {
    id: 3,
    role: "Backend Engineer",
    company: "CloudSys Ltd.",
    type: "Full-time",
    location: "On-site",
    salary: "$100k - $130k",
    posted: "5 days ago",
    description: `
      <h2 class="text-xl font-semibold text-gray-800 mb-4">About the role</h2>
      <p class="text-gray-600 leading-relaxed">
        We are looking for a Backend Engineer to join our team. You will be responsible for designing, building, and maintaining scalable backend systems.
      </p>
      <h2 class="text-xl font-semibold text-gray-800 mb-4 mt-6">Requirements</h2>
      <ul class="list-disc pl-6 text-gray-600 space-y-2">
        <li>4+ years of experience in backend development</li>
        <li>Proficiency in Node.js, Python, or Go</li>
        <li>Experience with databases like PostgreSQL or MongoDB</li>
        <li>Knowledge of cloud platforms like AWS or GCP</li>
      </ul>
      <h2 class="text-xl font-semibold text-gray-800 mb-4 mt-6">Benefits</h2>
      <ul class="list-disc pl-6 text-gray-600 space-y-2">
        <li>Competitive salary and equity</li>
        <li>Health and wellness benefits</li>
        <li>On-site gym and cafeteria</li>
      </ul>
    `,
  },
];

const JobListingsPage = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  const handleFilters = (e) => {
    console.log(e);
  };
  return (
    <div className="bg-white">
      {/* Main Content */}
      <div className="container mx-auto mt-6 flex items-center gap-4">
        <div className="font-bold">Filters</div>
        <DropdownFilter
          name="location"
          placeholder="Location"
          options={[
            { label: "Remote", value: "remote" },
            { label: "Onsite", value: "onsite" },
          ]}
          isMultiSelect={true}
          onSelect={handleFilters}
        />
        <DropdownFilter
          name="jobType"
          placeholder="Job Role Type"
          options={[
            { label: "Fulltime", value: "fulltime" },
            { label: "Parttime", value: "parttime" },
            { label: "Internship", value: "internship" },
          ]}
          isMultiSelect={true}
          onSelect={handleFilters}
        />
      </div>
      <div className="container mx-auto mt-6 flex gap-6">
        {/* Left Sidebar - Job Listings */}
        <div className="w-1/3 border-r border-gray-200 pr-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Job Listings
            </h2>
            <span className="text-orange-600 text-sm">{jobs.length} jobs</span>
          </div>

          {/* Search and Filter */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
              <Search className="w-5 h-5 absolute right-3 top-3 text-gray-400" />
            </div>
            <div className="flex gap-2 mt-3">
              <button className="px-3 py-1 text-sm border border-orange-200 text-orange-600 rounded-full hover:bg-orange-50">
                Remote
              </button>
              <button className="px-3 py-1 text-sm border border-orange-200 text-orange-600 rounded-full hover:bg-orange-50">
                Full-time
              </button>
              <button className="px-3 py-1 text-sm border border-orange-200 text-orange-600 rounded-full hover:bg-orange-50">
                Tech
              </button>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`p-4 ${
                  selectedJob.id === job.id
                    ? "bg-orange-50 border-l-4 border-orange-600"
                    : "hover:bg-gray-50 border border-gray-200"
                } rounded-lg cursor-pointer`}
                onClick={() => setSelectedJob(job)}
              >
                <h3 className="font-semibold text-gray-800">{job.role}</h3>
                <p className="text-sm text-gray-600 mt-1">{job.company}</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">
                    {job.location}
                  </span>
                  <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">
                    {job.type}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-sm text-gray-500">{job.salary}</span>
                  <span className="text-xs text-gray-500">{job.posted}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Job Details */}
        <div className="w-2/3">
          <div className="mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {selectedJob.role}
                </h1>
                <p className="text-lg text-gray-600 mt-1">
                  {selectedJob.company}
                </p>
              </div>
              <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                Apply Now
              </button>
            </div>
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{selectedJob.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{selectedJob.type}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <DollarSign className="w-4 h-4" />
                <span>{selectedJob.salary}</span>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: selectedJob.description }}
          />

          {/* Apply Button */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Apply for this position
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListingsPage;
