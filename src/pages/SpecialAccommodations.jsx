import React from 'react';
import { 
  FaClipboardCheck, FaPencilAlt, FaSignLanguage, FaFileAlt, 
  FaLaptop, FaHome, FaChalkboardTeacher, FaClipboardList,
  FaFileUpload, FaCalendarCheck, FaUserTie, FaEnvelope,
  FaMapMarkerAlt, FaPhone
} from 'react-icons/fa';

function SpecialAccommodations() {
  const accommodations = [
    { 
      title: "Testing Accommodations", 
      icon: <FaClipboardCheck />, 
      description: "Extended time, quiet environment, and other testing modifications" 
    },
    { 
      title: "Note-Taking Services", 
      icon: <FaPencilAlt />, 
      description: "Access to comprehensive class notes and recording accommodations" 
    },
    { 
      title: "Sign Language Interpreters", 
      icon: <FaSignLanguage />, 
      description: "Professional interpretation services for deaf and hard of hearing students" 
    },
    { 
      title: "Alternative Format Materials", 
      icon: <FaFileAlt />, 
      description: "Textbooks and course materials in accessible formats" 
    },
    { 
      title: "Assistive Technology", 
      icon: <FaLaptop />, 
      description: "Access to specialized software and hardware" 
    },
    { 
      title: "Housing Accommodations", 
      icon: <FaHome />, 
      description: "Modified housing arrangements to meet specific needs" 
    },
    { 
      title: "Classroom Accommodations", 
      icon: <FaChalkboardTeacher />, 
      description: "Adjustments to ensure accessible learning environments" 
    }
  ];

  const registrationSteps = [
    { number: 1, title: "Complete Registration", description: "Fill out the online registration form", icon: <FaClipboardList /> },
    { number: 2, title: "Submit Documentation", description: "Provide documentation of disability", icon: <FaFileUpload /> },
    { number: 3, title: "Schedule Appointment", description: "Book an intake appointment", icon: <FaCalendarCheck /> },
    { number: 4, title: "Meet Counselor", description: "Discuss your needs with an Accessibility Counselor", icon: <FaUserTie /> },
    { number: 5, title: "Receive Letter", description: "Get your official accommodation letter", icon: <FaEnvelope /> }
  ];

  return (
    <div className="accommodations-container">
      <h1>Special Accommodations</h1>
      <p className="lead">
        The ULM Office of Disability Services ensures equal access to education for all students. 
        We provide comprehensive support and accommodations tailored to individual needs, 
        helping students achieve their academic goals and participate fully in university life.
      </p>
      
      <section className="accommodations-section">
        <h2>Available Accommodations</h2>
        <div className="accommodations-grid">
          {accommodations.map((item, index) => (
            <div key={index} className="accommodation-card">
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="registration-section">
        <h2>Registration Process</h2>
        <div className="registration-steps">
          {registrationSteps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="documentation-section">
        <div className="documentation-card">
          <h3>Documentation Requirements</h3>
          <ul>
            <li>Diagnosis of disability</li>
            <li>Current impact and limitations</li>
            <li>Recommendations for accommodations</li>
            <li>Credentials of the diagnosing professional</li>
          </ul>
        </div>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <div className="contact-grid">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Location</h3>
            <p>Library, Suite 239</p>
          </div>
          
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <a href="tel:+13183425220">(318) 342-5220</a>
          </div>
          
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <a href="mailto:kfoster@ulm.edu">kfoster@ulm.edu</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpecialAccommodations;










