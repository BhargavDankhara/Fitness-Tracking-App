import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [workouts, setWorkouts] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("http://localhost:5000/api/auth", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, workouts, setWorkouts, goals, setGoals }}
    >
      {children}
    </UserContext.Provider>
  );
};
