const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Fitness Tracker</h1>
        <p className="text-lg mb-8">
          Track your workouts and achieve your fitness goals.
        </p>
        <a href="/signup" className="btn btn-primary">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;
