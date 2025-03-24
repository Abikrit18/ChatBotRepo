import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="brand-text">HopeBot</Link>
      </div>
      <div className="nav-links">
      <Link to="/">Home</Link>
        <Link to="/counseling">Counseling Services</Link>
        <Link to="/accommodations">Special Accommodations</Link>
        <Link to="/emergency">Emergency Services</Link>
      </div>
    </nav>
  );
}

export default Navbar;




