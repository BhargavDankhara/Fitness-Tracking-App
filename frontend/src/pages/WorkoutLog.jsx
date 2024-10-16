import { useState } from "react";
import axios from "axios";

const WorkoutLog = () => {
  const [formData, setFormData] = useState({
    type: "",
    duration: "",
    caloriesBurned: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/workouts/create",
        formData
      );
      console.log(response.data);
      alert("Workout logged successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to log workout. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Log Workout</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Activity Type</span>
              </label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Duration (minutes)</span>
              </label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Calories Burned</span>
              </label>
              <input
                type="number"
                name="caloriesBurned"
                value={formData.caloriesBurned}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Log Workout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkoutLog;
