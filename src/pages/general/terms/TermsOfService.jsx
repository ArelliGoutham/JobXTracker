import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-orange-50 opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight">
              Terms of Service
              <span className="block text-orange-500">
                Your Agreement with Us
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-neutral-600">
              By using our platform, you agree to these terms and conditions.
              Please read them carefully.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                1. Introduction
              </h2>
              <p className="text-neutral-600">
                These Terms of Service ("Terms") govern your use of our website
                and services. By accessing or using our platform, you agree to
                be bound by these Terms. If you do not agree, you may not use
                our services.
              </p>
            </div>

            {/* Eligibility */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                2. Eligibility
              </h2>
              <p className="text-neutral-600">
                To use our services, you must be at least 16 years old or the
                legal age of majority in your jurisdiction. By using our
                platform, you represent and warrant that you meet these
                requirements.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                3. User Responsibilities
              </h2>
              <p className="text-neutral-600">
                You agree to use our platform responsibly and in compliance with
                all applicable laws. Specifically, you agree not to:
              </p>
              <ul className="list-disc list-inside text-neutral-600">
                <li>
                  Use our services for any illegal or unauthorized purpose.
                </li>
                <li>Violate any laws, including intellectual property laws.</li>
                <li>Upload or share harmful or malicious content.</li>
                <li>Attempt to gain unauthorized access to our systems.</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                4. Intellectual Property
              </h2>
              <p className="text-neutral-600">
                All content on our platform, including text, graphics, logos,
                and software, is owned by us or our licensors and is protected
                by intellectual property laws. You may not use, reproduce, or
                distribute our content without prior written permission.
              </p>
            </div>

            {/* Termination */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                5. Termination
              </h2>
              <p className="text-neutral-600">
                We reserve the right to suspend or terminate your access to our
                services at any time, with or without notice, for any reason,
                including if you violate these Terms.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                6. Limitation of Liability
              </h2>
              <p className="text-neutral-600">
                To the fullest extent permitted by law, we are not liable for
                any indirect, incidental, or consequential damages arising from
                your use of our services. Our total liability is limited to the
                amount you paid to us, if any, for using our services.
              </p>
            </div>

            {/* Governing Law */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                7. Governing Law
              </h2>
              <p className="text-neutral-600">
                These Terms are governed by the laws of India, without regard to
                its conflict of laws principles. Any disputes will be resolved
                in the courts of India.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                8. Changes to Terms
              </h2>
              <p className="text-neutral-600">
                We may update these Terms from time to time. If we make
                significant changes, we will notify you by email or through our
                platform. Your continued use of our services after the changes
                take effect constitutes your acceptance of the updated Terms.
              </p>
            </div>

            {/* Contact Us */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900">
                9. Contact Us
              </h2>
              <p className="text-neutral-600">
                If you have any questions about these Terms, please contact us
                at{" "}
                <Link
                  href="mailto:support@jobtracker.in"
                  className="text-orange-500 hover:underline"
                >
                  support@jobtracker.in
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
            Have Questions About Our Terms?
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            We're here to help. Contact us for more information about our terms
            and conditions.
          </p>
          <button className="btn btn-primary mx-auto flex items-center">
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
