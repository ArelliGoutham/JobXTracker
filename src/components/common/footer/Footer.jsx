import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-500">JobTrack</h3>
            <p className="text-neutral-300">
              Your all-in-one solution for managing job applications and
              tracking your career progress.
            </p>
            <p className="text-neutral-300">Hyderabad, Telangana, India</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {QuickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className="text-neutral-300 hover:text-orange-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">
              Contact Us
            </h4>
            <p className="text-neutral-300">
              Have questions or need support? Reach out to us:
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  to="mailto:support@jobtrack.in"
                  className="text-neutral-300 hover:text-orange-500 transition-colors"
                >
                  support@jobtrack.in
                </Link>
              </li>
              <li>
                <Link
                  to="tel:+919875555599"
                  className="text-neutral-300 hover:text-orange-500 transition-colors"
                >
                  +91 987*****99
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">Follow Us</h4>
            <div className="flex space-x-4">
              {SocialLinks.map(({ icon, link }, index) => (
                <Link
                  key={index}
                  to={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-orange-500 transition-colors"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} JobTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const QuickLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about",
  },
  {
    label: "Terms of Service",
    to: "/terms-of-service",
  },
  {
    label: "Privacy Policy",
    to: "/privacy-policy",
  },
];

const SocialLinks = [
  {
    icon: <Facebook className="w-6 h-6" />,
    link: "https://facebook.com",
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    link: "https://twitter.com",
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    link: "https://instagram.com",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    link: "https://linkedin.com",
  },
];

export default Footer;
