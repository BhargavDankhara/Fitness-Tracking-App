import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formData
      );
      console.log(response.data);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-6">
      <div className="card lg:card-side bg-white shadow-2xl rounded-lg overflow-hidden max-w-3xl transform transition-transform duration-300 hover:scale-105">
        <figure className="lg:w-1/2">
          <img
            src="https://www.ob-fit.com/wp-content/uploads/2021/12/Bentuk-Latihan-Fisik-untuk-Meningkatkan-Daya-Tahan-Otot-.jpg"
            alt="Album"
            className="w-full h-full object-cover shadow-lg"
          />
        </figure>
        <div className="card-body p-8 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-600 font-medium">
                  Username
                </span>
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="input input-bordered border-gray-300 rounded-md focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
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
            <div className="form-control mb-4">
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
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text text-gray-600 font-medium">
                  Role
                </span>
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="input input-bordered border-gray-300 rounded-md focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="text-center mb-4">
              <span className="text-gray-600">Already have an account? </span>
              <a
                href="/login"
                className="text-indigo-500 font-medium hover:underline"
              >
                Login here
              </a>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary w-full bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-md transition-all duration-200 transform hover:scale-105"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
