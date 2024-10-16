import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      console.log(response.data);
      alert("Login successful!");
      navigate("/dashbord");
    } catch (error) {
      console.error(error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-6">
      <div className="card lg:card-side bg-white shadow-2xl rounded-lg overflow-hidden max-w-3xl transform transition-transform duration-300 hover:scale-105">
        <figure className="lg:w-1/2">
          <img
            src="https://i.ytimg.com/vi/73n-6Y6ou1w/maxresdefault.jpg"
            alt="Album"
            className="w-full h-full object-cover shadow-lg"
          />
        </figure>
        <div className="card-body p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-600 font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered border-gray-300 rounded-md focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text text-gray-600 font-medium">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input input-bordered border-gray-300 rounded-md focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div className="text-center mb-4">
              <span className="text-gray-600">Don’t have an account? </span>
              <a
                href="/signup"
                className="text-indigo-500 font-medium hover:underline"
              >
                Sign up here
              </a>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary w-full bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-md transition-transform duration-200"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
