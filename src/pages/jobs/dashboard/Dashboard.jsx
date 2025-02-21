import React from "react";
import {
  BookmarkCheck,
  Briefcase,
  FileText,
  Users,
  UploadCloud,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const features = [
    {
      icon: <BookmarkCheck className="w-10 h-10 text-orange-500" />,
      title: "Check Applications",
      description:
        "Track the status of your job applications and manage them in one place.",
      link: "/applications",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-orange-500" />,
      title: "Check Jobs",
      description:
        "Browse and search for new job opportunities tailored to your profile.",
      link: "/jobs",
    },
    {
      icon: <UploadCloud className="w-10 h-10 text-orange-500" />,
      title: "Post Listings",
      description: "Post job listings if you're an employer or recruiter.",
      link: "/post-job",
    },
    {
      icon: <FileText className="w-10 h-10 text-orange-500" />,
      title: "Resume Analyzer",
      description:
        "Get feedback on your resume and improve your chances of landing interviews.",
      link: "/resume-analyzer",
    },
    {
      icon: <Users className="w-10 h-10 text-orange-500" />,
      title: "Community",
      description:
        "Connect with other job seekers, share experiences, and get advice.",
      link: "/community",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-orange-50 opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight">
              Dashboard
              <span className="block text-orange-500">Your Job Search Hub</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-neutral-600">
              Manage your job search, analyze your resume, and connect with the
              community—all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link to={feature.link} key={index}>
                <div className="p-8 rounded-xl bg-white border border-neutral-200 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral-900">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-neutral-900">
            Need Help with Your Job Search?
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Explore our resources, connect with the community, and take your job
            search to the next level.
          </p>
          <button className="btn btn-primary">Explore Resources</button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
