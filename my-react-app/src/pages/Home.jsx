import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;

// pages/Home.js
const Home = () => {
  return <h1 className="text-2xl">Home Page</h1>;
};

export default Home;