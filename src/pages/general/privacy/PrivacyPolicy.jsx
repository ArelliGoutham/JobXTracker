import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-orange-50 opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight">
              Privacy Policy
              <span className="block text-orange-500">
                Your Data, Your Control
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-neutral-600">
              We are committed to protecting your privacy and ensuring your data
              is handled securely and transparently.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                Introduction
              </h2>
              <p className="text-neutral-600">
                This Privacy Policy outlines how we collect, use, and protect
                your personal information when you use our services. By using
                our platform, you agree to the practices described in this
                policy.
              </p>
            </div>

            {/* Data Collection */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                Data Collection
              </h2>
              <p className="text-neutral-600">
                We collect information you provide directly, such as when you
                create an account, submit job applications, or contact us. This
                may include:
              </p>
              <ul className="list-disc list-inside text-neutral-600">
                <li>Personal details (e.g., name, email address)</li>
                <li>
                  Job application details (e.g., company names, job titles)
                </li>
                <li>Usage data (e.g., IP address, browser type)</li>
              </ul>
            </div>

            {/* Data Usage */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                How We Use Your Data
              </h2>
              <p className="text-neutral-600">
                Your data is used to provide and improve our services,
                including:
              </p>
              <ul className="list-disc list-inside text-neutral-600">
                <li>Managing your job applications and tracking progress</li>
                <li>Personalizing your experience on our platform</li>
                <li>Communicating with you about updates and support</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                Data Sharing
              </h2>
              <p className="text-neutral-600">
                We do not sell your personal information. However, we may share
                data with:
              </p>
              <ul className="list-disc list-inside text-neutral-600">
                <li>Service providers who assist in operating our platform</li>
                <li>Legal authorities if required by law</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                Data Security
              </h2>
              <p className="text-neutral-600">
                We implement industry-standard security measures to protect your
                data, including encryption and access controls. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </div>

            {/* Your Rights */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                Your Rights
              </h2>
              <p className="text-neutral-600">
                You have the right to access, update, or delete your personal
                information. If you have any questions or requests, please
                contact us.
              </p>
            </div>

            {/* Contact Us */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                Contact Us
              </h2>
              <p className="text-neutral-600">
                If you have any questions about this Privacy Policy, please
                reach out to us at{" "}
                <Link
                  href="mailto:privacy@jobtracker.in"
                  className="text-orange-500 hover:underline"
                >
                  privacy@jobtracker.in
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-neutral-900">
            Have Questions About Your Data?
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            We're here to help. Contact us for more information about our
            privacy practices.
          </p>
          <button
            size="lg"
            className="btn btn-primary mx-auto flex items-center"
          >
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
