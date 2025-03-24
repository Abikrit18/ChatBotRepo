function Home() {
  return (
    <div className="home-container">
      <h1>Empowering Your Journey at ULM</h1>
      <p className="lead">
        Welcome to the Self-Development, Counseling, and Special Accommodations Center. 
        We're dedicated to supporting your personal growth, mental well-being, and academic success.
      </p>
      
      <div className="services-overview">
        <div className="service-card">
          <span className="tag">Professional Support</span>
          <h3>Counseling Services</h3>
          <p>Access confidential counseling and mental health support from our experienced professionals. 
             We're here to help you navigate life's challenges.</p>
          <a href="/counseling" className="btn">Learn More</a>
        </div>
        
        <div className="service-card">
          <span className="tag">Academic Support</span>
          <h3>Special Accommodations</h3>
          <p>Receive personalized academic accommodations and support services designed 
             to ensure equal access and opportunity for all students.</p>
          <a href="/accommodations" className="btn">Learn More</a>
        </div>
        
        <div className="service-card">
          <span className="tag">24/7 Available</span>
          <h3>Emergency Services</h3>
          <p>Access immediate support when you need it most. Our emergency services 
             are available 24/7 to ensure your safety and well-being of everyone.</p>
          <a href="/emergency" className="btn">Learn More</a>
        </div>
      </div>
      
      <div className="contact-section">
        <h2 className="section-title">Connect With Us</h2>
        <div className="contact-cards">
          <div className="contact-card">
            <div className="card-icon">⏰</div>
            <h3>Hours of Operation</h3>
            <div className="schedule-item">
              <span className="days">Monday - Thursday</span>
              <span className="time">7:30 AM - 5:00 PM</span>
            </div>
            <div className="schedule-item">
              <span className="days">Friday</span>
              <span className="time">7:30 AM - 11:30 AM</span>
            </div>
          </div>

          <div className="contact-card">
            <div className="card-icon">📍</div>
            <h3>Visit Our Center</h3>
            <div className="address-details">
              <p>1140 University Avenue</p>
              <p>Monroe, LA 71209</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="card-icon">📞</div>
            <h3>Contact Us</h3>
            <div className="contact-details">
              <p><a href="tel:+13183425220">(318) 342-5220</a></p>
              <p><a href="mailto:kfoster@ulm.edu">kfoster@ulm.edu</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;




