import React from 'react';

function EmergencyServices() {
  return (
    <div className="emergency-container">
      <h1>Emergency Services</h1>
      <p className="lead">
        Your safety is our top priority. ULM provides 24/7 emergency services and crisis support 
        to ensure the well-being of our campus community. Know your resources and don't hesitate 
        to reach out in times of need.
      </p>

      <div className="emergency-content">
        <section className="emergency-contacts">
          <h2>Emergency Contact Numbers</h2>
          <div className="contact-list">
            <div className="contact-item urgent">
              <div className="contact-header">
                <h3>ULM Police (24/7)</h3>
              </div>
              <div className="contact-details">
                <p className="phone">(318) 342-5350</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-header">
                <h3>Emergency</h3>
              </div>
              <div className="contact-details">
                <p className="phone">911</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-header">
                <h3>Counseling Center Crisis Line</h3>
              </div>
              <div className="contact-details">
                <p className="phone">(318) 342-5220</p>
                <p className="availability">Available during business hours</p>
              </div>
            </div>
          </div>
        </section>

        <section className="crisis-resources">
          <h2>24/7 Crisis Resources</h2>
          <div className="resource-grid">
            <div className="resource-card">
              <h3>National Suicide Prevention Lifeline</h3>
              <div className="resource-numbers">
                <p className="primary-number">988</p>
                <p className="secondary-number">1-800-273-8255</p>
              </div>
            </div>

            <div className="resource-card">
              <h3>Crisis Text Line</h3>
              <div className="resource-details">
                <p className="instruction">Text</p>
                <p className="highlight">HOME</p>
                <p className="instruction">to</p>
                <p className="number">741741</p>
              </div>
            </div>

            <div className="resource-card">
              <h3>Wellspring Alliance 24-Hour Crisis Line</h3>
              <p className="phone-number">(318) 323-1505</p>
            </div>
          </div>
        </section>

        <section className="emergency-help">
          <h2>When to Seek Emergency Help</h2>
          <div className="help-list">
            <ul>
              <li><span className="icon">⚠️</span>Thoughts of suicide or self-harm</li>
              <li><span className="icon">🧠</span>Experiencing a psychological crisis</li>
              <li><span className="icon">👁️</span>Witness to a crime or accident</li>
              <li><span className="icon">🏥</span>Medical emergencies</li>
              <li><span className="icon">🔒</span>Safety concerns on campus</li>
              <li><span className="icon">⚡</span>Suspicious activities</li>
            </ul>
          </div>
        </section>

        <section className="safety-tips">
          <h2>Campus Safety Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">📱</div>
              <div className="tip-content">
                <p>Download the ULM Safe App for quick access to emergency services</p>
              </div>
            </div>

            <div className="tip-card">
              <div className="tip-icon">📞</div>
              <div className="tip-content">
                <p>Save ULM Police number in your phone</p>
              </div>
            </div>

            <div className="tip-card">
              <div className="tip-icon">🔷</div>
              <div className="tip-content">
                <p>Be aware of Blue Light Emergency Phones locations on campus</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EmergencyServices;
