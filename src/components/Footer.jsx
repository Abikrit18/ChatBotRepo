import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/counseling">Counseling</Link></li>
            <li><Link to="/accommodations">Accommodations</Link></li>
            <li><Link to="/emergency">Emergency</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="https://www.ulm.edu/studenthandbook/" target="_blank" rel="noopener noreferrer">Student Handbook</a></li>
            <li><a href="https://www.ulm.edu/titleix/" target="_blank" rel="noopener noreferrer">Title IX</a></li>
            <li><a href="https://www.ulm.edu/safety/" target="_blank" rel="noopener noreferrer">Campus Safety</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>📍 1140 University Ave</li>
            <li>📞 (318) 342-5220</li>
            <li>✉️ kfoster@ulm.edu</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>About</h4>
          <p>Supporting student success through counseling, accommodations, and development resources.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-legal">
            <a href="https://www.ulm.edu/privacy/" target="_blank" rel="noopener noreferrer">Privacy</a>
            <a href="https://www.ulm.edu/ada/" target="_blank" rel="noopener noreferrer">Accessibility</a>
            <a href="https://www.ulm.edu/titleix/" target="_blank" rel="noopener noreferrer">Non-Discrimination</a>
          </div>          
          <p className="copyright">© {new Date().getFullYear()} ULM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

