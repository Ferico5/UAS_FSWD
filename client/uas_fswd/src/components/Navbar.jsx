import '../style/Navbar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function Navbar() {
  const { isLoggedIn } = useAuth(); // Ambil status login dan data user dari context
  const [isAdmin] = useState(false)

  return (
    <div className="navbar">
      {isLoggedIn ? (
        isAdmin ? (
          <div className="navbar-after-login">
            <p>M A I N</p>
            <div className="links">
              <Link className="link" to="/">Dashboard</Link>
              <Link className="link" to="/rooms">Rooms</Link>
              <Link className="link" to="/add_room">Add Room</Link>
              <Link className="link" to="/complaints">Complaints</Link>
              <Link className="link" to="/feedback">Feedback</Link>
              <Link className="link" to="/my_profile">My Profile</Link>
              <Link className="link" to="/add_admin">Add Admin</Link>
            </div>
          </div>
        ) : (
          <div className="navbar-after-login">
            <p>M A I N</p>
            <div className="links">
              <Link className="link" to="/">Dashboard</Link>
              <Link className="link" to="/book_hostel">Book Hostel</Link>
              <Link className="link" to="/room_details">Room Details</Link>
              <Link className="link" to="/complaint_registration">Complaint Registration</Link>
              <Link className="link" to="/registered_complaints">Registered Complaints</Link>
              <Link className="link" to="/feedback">Feedback</Link>
              <Link className="link" to="/my_profile">My Profile</Link>
              <Link className="link" to="/change_password">Change Password</Link>
            </div>
          </div>
        )
      ) : (
        <div className="navbar-before-login">
          <div className="links">
            <Link className="link" to="/register">User Registration</Link>
            <Link className="link" to="/login">User Login</Link>
          </div>
        </div>
      )}
    </div>
  );
}
