import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    
    fetchAppointments();
  }, [navigate]);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify({ status })
      });
      
      if (response.ok) {
        fetchAppointments();
      }
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="admin-dashboard">
      <h1>Appointment Dashboard</h1>
      <div className="appointments-list">
        {appointments.map(appointment => (
          <div key={appointment._id} className="appointment-card">
            <h3>{appointment.name}</h3>
            <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
            <p>Time: {appointment.time}</p>
            <p>Email: {appointment.email}</p>
            <p>Phone: {appointment.phone}</p>
            <p>Status: {appointment.status}</p>
            <div className="status-actions">
              <button 
                onClick={() => updateStatus(appointment._id, 'confirmed')}
                className="confirm-btn"
              >
                Confirm
              </button>
              <button 
                onClick={() => updateStatus(appointment._id, 'cancelled')}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;