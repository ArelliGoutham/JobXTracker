import React from "react";
import { BookmarkCheck, Building2, Search, ArrowRight } from "lucide-react";
import Navbar from "../../../components/common/navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-orange-50 opacity-70"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight">
                Track Your Job Applications
                <span className="block text-orange-500">All in One Place</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-neutral-600">
                Never lose track of your job applications again. Organize,
                monitor, and manage your job search journey efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn btn-primary flex items-center gap-1">
                  Get Started <ArrowRight className="h-5 w-5" />
                </button>

                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">
              Everything You Need to Manage Your Job Search
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-900">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-6">
                  <p className="text-4xl font-bold mb-2 text-orange-400">
                    {stat.value}
                  </p>
                  <p className="text-lg text-neutral-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 pt-2 text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8 text-center ">
            <h2 className="text-3xl font-bold mb-6 text-neutral-900">
              Ready to Organize Your Job Search?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Join thousands of job seekers who are managing their applications
              effectively.
            </p>

            <button className="btn btn-primary ">Start Tracking Now</button>
          </div>
        </section>
      </div>
    </>
  );
};

// Data arrays for the features and steps
const features = [
  {
    icon: <BookmarkCheck className="w-6 h-6 text-orange-500" />,
    title: "Track Applications",
    description:
      "Keep all your job applications organized in one place with detailed status tracking and updates.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-orange-500" />,
    title: "Company Insights",
    description:
      "Access comprehensive information about companies and their hiring processes.",
  },
  {
    icon: <Search className="w-6 h-6 text-orange-500" />,
    title: "Smart Search",
    description:
      "Easily find and filter through your applications with powerful search capabilities.",
  },
];

const stats = [
  {
    value: "10,000+",
    label: "Active Users",
  },
  {
    value: "50,000+",
    label: "Applications Tracked",
  },
  {
    value: "1,000+",
    label: "Companies",
  },
];

const steps = [
  {
    title: "Create Your Account",
    description:
      "Sign up in seconds and start organizing your job search journey immediately.",
  },
  {
    title: "Add Applications",
    description:
      "Log applications from any source - company websites, LinkedIn, email, or referrals.",
  },
  {
    title: "Track Progress",
    description:
      "Monitor status updates, interviews, and outcomes in a clean, organized interface.",
  },
];

export default HomePage;
