import React from "react";

const ContactUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-orange-50 opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight">
              Contact<span className="text-orange-500"> Us</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-neutral-600">
              Have any questions or need support? Reach out to us, and we'll be
              happy to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            Get in Touch
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-neutral-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-neutral-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-neutral-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
