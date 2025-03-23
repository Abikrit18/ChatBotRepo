import { useState } from 'react';

function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Appointment request submitted successfully! We will contact you shortly to confirm your appointment.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          notes: ''
        });
      } else {
        alert('Failed to submit appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting appointment:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="appointment-container">
      <h1>Book a Counseling Appointment</h1>
      <p className="lead">
        Schedule your confidential counseling session with one of our professional counselors.
      </p>

      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Warhawk Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="yourname@warhawks.ulm.edu"
            pattern=".+@warhawks\.ulm\.edu"
            title="Please use your Warhawks email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(XXX) XXX-XXXX"
            pattern="[\(]\d{3}[\)]\s?\d{3}[\-]\d{4}"
            title="Please enter a valid phone number: (XXX) XXX-XXXX"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Preferred Date *</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={today}
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Preferred Time *</label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select a time</option>
              <option value="08:00">8:00 AM</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="notes">Additional Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Please include any specific concerns or questions you'd like to discuss"
            rows="4"
          />
        </div>

        <button type="submit" className="btn submit-btn">
          Schedule Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointment;
