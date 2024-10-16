import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import WorkoutLog from "./pages/WorkoutLog";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashbord" element={<Dashboard />} />
        <Route path="/workout-log" element={<WorkoutLog />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
}

export default App;
