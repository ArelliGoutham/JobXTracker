import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code,
  Users,
  Target,
  Briefcase,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Company Mission Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-orange-50 opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-neutral-900">
              About <span className="text-orange-500">JobTracker</span>
            </h1>
            <p className="text-lg text-neutral-700">
              Empowering job seekers to organize their journey and connect with
              opportunities that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-900">
                  {value.title}
                </h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Meet the Developer</h2>
              <p className="text-neutral-300 text-lg">
                Hi, I'm Goutham Arelli, a passionate full-stack developer with
                expertise in modern web technologies. I created JobTracker to
                help job seekers streamline their application process and
                achieve their career goals.
              </p>
              <div className="space-y-4">
                <p className="text-neutral-300">
                  <span className="text-orange-400 font-semibold">
                    Tech Stack:
                  </span>{" "}
                  Next.js, TypeScript, Tailwind CSS, PostgreSQL
                </p>
                <p className="text-neutral-300">
                  <span className="text-orange-400 font-semibold">
                    Experience:
                  </span>{" "}
                  3+ years in web development, specializing in React ecosystem
                </p>
              </div>
              <div className="flex space-x-4">
                <SocialButton icon={<Github className="w-5 h-5" />} />
                <SocialButton icon={<Linkedin className="w-5 h-5" />} />
                <SocialButton icon={<Twitter className="w-5 h-5" />} />
                <SocialButton icon={<Mail className="w-5 h-5" />} />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-orange-500 to-neutral-800 opacity-90">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-24 h-24 text-white opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-neutral-900">
            Want to Know More?
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Whether you're interested in using JobTracker or discussing
            potential collaborations, I'd love to hear from you.
          </p>
          <button className="btn btn-primary">Get in Touch</button>
        </div>
      </section>
    </div>
  );
};

const SocialButton = ({ icon }) => (
  <button className="p-2 rounded-full bg-transparent text-white hover:text-orange-400 transition-all">
    {icon}
  </button>
);

const values = [
  {
    icon: <Target className="w-6 h-6 text-orange-500" />,
    title: "Our Mission",
    description:
      "To simplify the job search process and help professionals track their applications effectively, ensuring no opportunity slips through the cracks.",
  },
  {
    icon: <Users className="w-6 h-6 text-orange-500" />,
    title: "User-Focused",
    description:
      "Built with real job seekers in mind, incorporating feedback and features that make a real difference in the application process.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-orange-500" />,
    title: "Future Vision",
    description:
      "Expanding to become a comprehensive platform where companies and candidates can connect directly, streamlining the hiring process.",
  },
];

export default About;
