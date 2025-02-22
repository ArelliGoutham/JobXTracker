import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, X, User } from "lucide-react";
import logo from "../../../assets/react.svg";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../../middlewares/AuthMiddlewares";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(signout());
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 left-0 bg-white shadow-md transition-all duration-300 z-10 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-gray-900">JobTrack</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/features" className="nav-link">
            Features
          </Link>
          <Link to="/pricing" className="nav-link">
            Pricing
          </Link>
          {user && (
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          )}

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <Menu as="div" className="relative">
                <MenuButton className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                  {user?.image ? (
                    <img
                      src={user.image}
                      alt="User"
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <User className="w-5 h-5 text-gray-700" />
                  )}
                </MenuButton>
                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
                    <MenuItem>
                      {({ focus }) => (
                        <Link
                          to="/dashboard/profile"
                          className={`block px-4 py-2 text-gray-700 ${
                            focus ? "text-orange-600" : ""
                          }`}
                        >
                          Profile
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <button
                          onClick={handleSignOut}
                          className={`block w-full text-left px-4 py-2 text-gray-700 cursor-pointer ${
                            focus ? "text-orange-600" : ""
                          }`}
                        >
                          Sign Out
                        </button>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Sign Up
              </Link>
            )}
          </div>
        </nav>
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded focus:outline-none"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-4 p-4 bg-white shadow-md">
          <Link to="/" className="nav-link">
            Home
          </Link>
          {!user && (
            <>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/features" className="nav-link">
                Features
              </Link>
              <Link to="/pricing" className="nav-link">
                Pricing
              </Link>
            </>
          )}
          {user ? (
            <>
              <Link to="/dashboard/profile" className="nav-link">
                Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="btn btn-primary w-full"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary w-full">
              Sign Up
            </Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
