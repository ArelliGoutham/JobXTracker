import React from "react";
import { ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Comprehensive Dashboard",
      description:
        "All in one place dashboard for easily navigating through different features",
      image: "src/assets/user-dashboard.png",
    },
    {
      title: "Track Your Applications",
      description:
        "Easily log and monitor all your job applications in one place. Stay organized with detailed status updates and reminders.",
      image: "src/assets/track-applications.png", // Replace with your image path
    },
    {
      title: "Company Insights",
      description:
        "Get detailed information about companies, including their hiring processes, reviews, and interview experiences.",
      image: "/company-insights.jpg", // Replace with your image path
    },
    {
      title: "Smart Search",
      description:
        "Quickly find and filter through your applications with powerful search and sorting tools.",
      image: "/smart-search.jpg", // Replace with your image path
    },
    {
      title: "Progress Analytics",
      description:
        "Visualize your job search progress with charts and analytics. Identify trends and improve your strategy.",
      image: "/progress-analytics.jpg", // Replace with your image path
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
              Powerful Features
              <span className="block text-orange-500">For Your Job Search</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-neutral-600">
              Discover the tools and insights you need to manage your job
              applications effectively and land your dream job.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-16 py-12`}
            >
              {/* Image Placeholder */}
              <div className="w-full md:w-1/2">
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-lg bg-cover object-cover"
                  />
                </div>
              </div>

              {/* Feature Description */}
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold text-neutral-900">
                  {feature.title}
                </h2>
                <p className="text-lg text-neutral-600">
                  {feature.description}
                </p>
                <button className="btn btn-primary flex items-center">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-neutral-900">
            Ready to Supercharge Your Job Search?
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Join thousands of job seekers who are using JobTrack to manage their
            applications and land their dream jobs.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default Features;
