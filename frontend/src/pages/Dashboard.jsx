import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [recentWorkouts, setRecentWorkouts] = useState([]);
  const [weeklyGoals, setWeeklyGoals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const workoutsResponse = await axios.get(
          "http://localhost:5000/api/workouts/get"
        );
        setRecentWorkouts(workoutsResponse.data);

        const goalsResponse = await axios.get(
          "http://localhost:5000/api/goals/get"
        );
        setWeeklyGoals(goalsResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Recent Workouts</h2>
          <ul>
            {recentWorkouts.map((workout) => (
              <li key={workout._id} className="mb-4">
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title">{workout.type}</h3>
                    <p>Duration: {workout.duration} minutes</p>
                    <p>Calories Burned: {workout.caloriesBurned}</p>
                    <p>
                      Date: {new Date(workout.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Weekly Goals</h2>
          <ul>
            {weeklyGoals.map((goal) => (
              <li key={goal._id} className="mb-4">
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title">{goal.type}</h3>
                    <p>Target: {goal.target}</p>
                    <p>
                      Start Date:{" "}
                      {new Date(goal.startDate).toLocaleDateString()}
                    </p>
                    <p>
                      End Date: {new Date(goal.endDate).toLocaleDateString()}
                    </p>
                    <p>Status: {goal.status}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
