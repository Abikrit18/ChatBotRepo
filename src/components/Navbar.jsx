import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="brand-text">
          ULM SDCSAC
        </Link>
      </div>
      
      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/counseling" onClick={() => setIsMenuOpen(false)}>Counseling</Link></li>
          <li><Link to="/accommodations" onClick={() => setIsMenuOpen(false)}>Accommodations</Link></li>
          <li><Link to="/emergency" onClick={() => setIsMenuOpen(false)}>Emergency</Link></li>
          <li><Link to="/book-appointment" onClick={() => setIsMenuOpen(false)}>Book Now</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


