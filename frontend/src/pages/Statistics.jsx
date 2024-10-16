import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const [workoutStats, setWorkoutStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/stats/workouts"
        );
        setWorkoutStats(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Statistics</h1>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Workout Trends Over Time</h2>
          <LineChart width={600} height={300} data={workoutStats}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="duration"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="caloriesBurned" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
