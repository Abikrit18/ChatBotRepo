import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CounselingServices from './pages/CounselingServices';
import SpecialAccommodations from './pages/SpecialAccommodations';
import EmergencyServices from './pages/EmergencyServices';
import BookAppointment from './pages/BookAppointment';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counseling" element={<CounselingServices />} />
            <Route path="/accommodations" element={<SpecialAccommodations />} />
            <Route path="/emergency" element={<EmergencyServices />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


