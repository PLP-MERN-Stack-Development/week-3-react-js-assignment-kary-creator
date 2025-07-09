import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4" aria-label="Main navigation">
    <div className="max-w-7xl mx-auto flex">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/about">About</Link>
    </div>
  </nav>
);

export default Navbar;