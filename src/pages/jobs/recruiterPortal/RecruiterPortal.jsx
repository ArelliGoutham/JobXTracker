import { useEffect } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../../components/common/loading/LoadingSpinner";
import FloatingBar from "../../../components/common/FloatingInfoBar/FloatingBar";
import JobCard from "../../../components/recruiter/jobCard";

const RecruiterPortal = () => {
  const { jobsPosted, loading, error } = useSelector(
    (state) => state.recruiter
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getRecruiterJobs());
  }, [dispatch]);

  const handleNewJobPost = () => {
    navigate("./form?action=new");
  };

  if (loading) <LoadingSpinner />;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-neutral-50 shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Jobs</h1>
            <p className="text-neutral-600 mt-2">Track and manage your jobs</p>
          </div>

          <button
            onClick={handleNewJobPost}
            className="btn btn-primary flex items-center"
          >
            <Plus className="mr-2 h-4 w-4" /> Add Job
          </button>
        </div>
        <div className="overflow-x-auto">
          {jobs.length === 0 && (
            <>
              <p className="text-neutral-400 text-center text-lg">
                No Jobs posted. Click the "Add Job" button to create your first
                job posting.
              </p>
            </>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {jobs.map((app, index) => (
              <JobCard key={index} job={app} />
            ))}
          </div>
        </div>
      </div>
      {error && (
        <FloatingBar
          duration={0}
          isVisible={true}
          message={error.message}
          type="error"
        />
      )}
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

const jobs = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    type: "Full-time",
    location: "Remote",
    salary: "$120k - $150k",
    createdAt: "2 days ago",
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
    createdAt: "3 days ago",
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
    createdAt: "5 days ago",
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

export default RecruiterPortal;
