import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ isAuthenticated, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-500">
          Fitness Tracker
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-indigo-500">
            Home
          </Link>
          {!isAuthenticated && (
            <>
              <Link to="/login" className="text-gray-700 hover:text-indigo-500">
                Login
              </Link>
              <Link
                to="/signup"
                className="text-gray-700 hover:text-indigo-500"
              >
                Signup
              </Link>
            </>
          )}
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-indigo-500"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-indigo-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-indigo-500"
            >
              Home
            </Link>
            {!isAuthenticated && (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-indigo-500"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-indigo-500"
                >
                  Signup
                </Link>
              </>
            )}
            {isAuthenticated && (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-indigo-500"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
