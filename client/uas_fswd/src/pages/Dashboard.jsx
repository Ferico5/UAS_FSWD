import '../style/Dashboard.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth(); // Get user data from context
  const isAdmin = user && user.role === 'admin'; // Check if the user is an admin

  return (
    <div className="container">
      <div className="content">
        <h2>Dashboard</h2>

        {isAdmin ? (
          <div className="dashboard">
            <div className="box-container">
              <div className="box" id="purple">
                <div className="box-title">
                  <div className="info">
                    <h3 className="qty">4</h3>
                    <h3>TOTAL STUDENTS</h3>
                  </div>
                </div>
                <div className="full-info">
                  <Link className="link-full-detail" to="/students">Full Detail</Link>
                </div>
              </div>

              <div className="box" id="green">
                <div className="box-title">
                  <div className="info">
                    <h3 className="qty">4</h3>
                    <h3>TOTAL ROOMS</h3>
                  </div>
                </div>
                <div className="full-info">
                  <Link className="link-full-detail" to="/rooms">Full Detail</Link>
                </div>
              </div>

              <div className="box" id="blue">
                <div className="box-title">
                  <div className="info">
                    <h3 className="qty">4</h3>
                    <h3>REGISTERED COMPLAINTS</h3>
                  </div>
                </div>
                <div className="full-info">
                  <Link className="link-full-detail" to="/registered_complaints">Full Detail</Link>
                </div>
              </div>

              <div className="box" id="red">
                <div className="box-title">
                  <div className="info">
                    <h3 className="qty">4</h3>
                    <h3>NEW COMPLAINTS</h3>
                  </div>
                </div>
                <div className="full-info">
                  <Link className="link-full-detail" to="/new_complaints">Full Detail</Link>
                </div>
              </div>

              <div className="box" id="orange">
                <div className="box-title">
                  <div className="info">
                    <h3 className="qty">4</h3>
                    <h3>IN PROCESS COMPLAINTS</h3>
                  </div>
                </div>
                <div className="full-info">
                  <Link className="link-full-detail" to="/in_process_complaints">Full Detail</Link>
                </div>
              </div>

              <div className="box" id="green">
                <div className="box-title">
                  <div className="info">
                    <h3 className="qty">4</h3>
                    <h3>CLOSED COMPLAINTS</h3>
                  </div>
                </div>
                <div className="full-info">
                <Link className="link-full-detail" to="/closed_complaints">Full Detail</Link>
                </div>
              </div>

              <div className="box" id="blue">
                <div className="box-title">
                  <div className="info">
                    <h3 className="qty">4</h3>
                    <h3>TOTAL FEEDBACKS</h3>
                  </div>
                </div>
                <div className="full-info">
                <Link className="link-full-detail" to="/feedback">Full Detail</Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="dashboard">
            <div className="box-container">
              <div className="box" id="blue">
                <div className="box-title">
                  <h3>My Profile</h3>
                </div>
                <div className="full-info">
                  <Link className="link-full-detail" to="/my_profile">Full Detail</Link>
                </div>
              </div>

              <div className="box" id="green">
                <div className="box-title">
                  <h3>My Room</h3>
                </div>
                <div className="full-info">
                <Link className="link-full-detail" to="/room_details">Full Detail</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
