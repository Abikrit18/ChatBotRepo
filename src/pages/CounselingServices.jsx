import React from 'react';
import { 
  FaPhone, 
  FaBuilding,
  FaUserAlt,
  FaUserFriends,
  FaExclamationTriangle,
  FaComments,
  FaBook,
  FaExternalLinkAlt,
  FaHeartbeat,
  FaUsers,
  FaGraduationCap,
  FaHome,
  FaSadTear,
  FaUserCircle,
  FaBalanceScale
} from 'react-icons/fa';

function CounselingServices() {
  const services = [
    {
      title: "Individual Counseling",
      icon: <FaUserAlt />,
      description: "One-on-one sessions tailored to your specific needs and concerns"
    },
    {
      title: "Group Counseling",
      icon: <FaUserFriends />,
      description: "Supportive group environment to share experiences and learn from others"
    },
    {
      title: "Crisis Intervention",
      icon: <FaExclamationTriangle />,
      description: "Immediate support and assistance during urgent mental health situations"
    },
    {
      title: "Consultation Services",
      icon: <FaComments />,
      description: "Professional guidance and consultation for students, faculty, and staff"
    },
    {
      title: "Educational Programming",
      icon: <FaBook />,
      description: "Workshops and programs promoting mental health awareness and well-being"
    },
    {
      title: "Referral Services",
      icon: <FaExternalLinkAlt />,
      description: "Connections to specialized care and community resources when needed"
    }
  ];

  const concerns = [
    {
      title: "Anxiety and Depression",
      icon: <FaHeartbeat />,
      description: "Support for managing mood disorders, panic attacks, and general anxiety"
    },
    {
      title: "Relationship Issues",
      icon: <FaUsers />,
      description: "Help with interpersonal relationships, communication, and conflict resolution"
    },
    {
      title: "Academic Stress",
      icon: <FaGraduationCap />,
      description: "Assistance with study-related pressure, time management, and academic performance"
    },
    {
      title: "Family Problems",
      icon: <FaHome />,
      description: "Support for dealing with family conflicts, transitions, and dynamics"
    },
    {
      title: "Grief and Loss",
      icon: <FaSadTear />,
      description: "Help coping with loss, bereavement, and processing difficult emotions"
    },
    {
      title: "Identity Development",
      icon: <FaUserCircle />,
      description: "Support for personal growth, self-discovery, and identity exploration"
    },
    {
      title: "Adjustment Difficulties",
      icon: <FaBalanceScale />,
      description: "Help with life transitions, cultural adjustment, and personal challenges"
    }
  ];

  return (
    <div className="counseling-container">
      <h1>Counseling Services</h1>
      <p className="lead">
        The ULM Counseling Center provides confidential mental health services to all currently enrolled students at no additional cost.
      </p>
      
      <div className="services-list">
        <section className="services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-item"
                style={{
                  gridRow: index >= 3 ? '2' : '1' // Force items into two rows
                }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="concerns-section">
          <h2>Common Concerns We Address</h2>
          <div className="concerns-grid">
            {concerns.map((concern, index) => (
              <div 
                key={index} 
                className="concern-card"
                style={{
                  gridRow: index >= 4 ? '2' : '1' // Force items into two rows
                }}
              >
                <div className="concern-icon">
                  {concern.icon}
                </div>
                <h3>{concern.title}</h3>
                <p>{concern.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="location-section">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              title="ULM Counseling Center Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.8340718514545!2d-92.07040678481035!3d32.52918198104736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862e4f6e844ae8cf%3A0x762c0a93b93978bc!2s1140%20University%20Ave%2C%20Monroe%2C%20LA%2071209!5e0!3m2!1sen!2sus!4v1665432678901"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className="appointment-options">
          <h2>Making an Appointment</h2>
          <div className="options-grid">
            <div className="option-card">
              <FaPhone className="option-icon" />
              <h3>Call Us</h3>
              <a href="tel:+13183425220" className="action-link">
                (318) 342-5220
              </a>
              <span className="hint">During business hours</span>
            </div>

            <div className="option-card">
              <FaBuilding className="option-icon" />
              <h3>Visit Us</h3>
              <span className="location">Student Health Center</span>
              <span className="hint">Walk-ins welcome</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CounselingServices;














