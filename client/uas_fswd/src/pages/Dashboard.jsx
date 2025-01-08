import '../style/Dashboard.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const { user } = useAuth(); // Get user data from context
  const isAdmin = user && user.role === 'admin'; // Check if the user is an admin
  const [studentCount, setStudentCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [complaintCount, setComplaintCount] = useState(0);
  const [newComplaintCount, setNewComplaintCount] = useState(0);
  const [inProcessComplaintCount, setInProcessComplaintCount] = useState(0);
  const [closedComplaintCount, setClosedComplaintCount] = useState(0);
  const [feedbackCount, setFeedbackCount] = useState(0);

  useEffect(() => {
    // Fetch counts for students, rooms, complaints, etc.

    const fetchData = async () => {
      try {
        const [students, rooms, complaints, newComplaints, inProcessComplaint, closedComplaint, feedbacks] = await Promise.all([
          axios.get('http://localhost:5000/count_users'),
          axios.get('http://localhost:5000/count_room'),
          axios.get('http://localhost:5000/count_complaint'),
          axios.get('http://localhost:5000/count_new_complaint'),
          axios.get('http://localhost:5000/count_in_process_complaint'),
          axios.get('http://localhost:5000/count_closed_complaint'),
          axios.get('http://localhost:5000/count_feedback'),
        ]);
        
        setStudentCount(students.data.count);
        setRoomCount(rooms.data.count);
        setComplaintCount(complaints.data.count);
        setNewComplaintCount(newComplaints.data.count);
        setInProcessComplaintCount(inProcessComplaint.data.count);
        setClosedComplaintCount(closedComplaint.data.count);
        setFeedbackCount(feedbacks.data.count);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="content">
        <h2>Dashboard</h2>

        {isAdmin ? (
          <div className="dashboard">
            <div className="box-container">
              <div className="box-dashboard" id="purple">
                <div className="box-title">
                  <div className="info">
                    <h3 className="qty">{studentCount}</h3>
                    <h3>TOTAL STUDENTS</h3>
                  </div>
                </div>
                <div className="full-info">
                  <Link className="link-full-detail" to="/students">Full Detail</Link>
                </div>
              </div>

              <div className="box-dashboard" id="green">
                <div className="box-title">
                  <div className="info">
                    <h3 className="qty">{roomCount}</h3>
                    <h3>TOTAL ROOMS</h3>
                  </div>
                </div>
                <div className="full-info">
                  <Link className="link-full-detail" to="/rooms">Full Detail</Link>
                </div>
              </div>

              <div className="box-dashboard" id="blue">
                <div className="box-title">
                  <div className="info">
                    <h3 className="qty">{complaintCount}</h3>
                    <h3>REGISTERED COMPLAINTS</h3>
                  </div>
                </div>
                <div className="full-info">
                  <Link className="link-full-detail" to="/registered_complaints">Full Detail</Link>
                </div>
              </div>

              <div className="box-dashboard" id="red">
                <div className="box-title">
                  <div className="info">
                    <h3 className="qty">{newComplaintCount}</h3>
                    <h3>NEW COMPLAINTS</h3>
                  </div>
                </div>
                <div className="full-info">
                  <Link className="link-full-detail" to="/registered_complaints/new_complaints">Full Detail</Link>
                </div>
              </div>

              <div className="box-dashboard" id="orange">
                <div className="box-title">
                  <div className="info">
                    <h3 className="qty">{inProcessComplaintCount}</h3>
                    <h3>IN PROCESS COMPLAINTS</h3>
                  </div>
                </div>
                <div className="full-info">
                  <Link className="link-full-detail" to="/registered_complaints/in_process_complaints">Full Detail</Link>
                </div>
              </div>

              <div className="box-dashboard" id="green">
                <div className="box-title">
                  <div className="info">
                    <h3 className="qty">{closedComplaintCount}</h3>
                    <h3>CLOSED COMPLAINTS</h3>
                  </div>
                </div>
                <div className="full-info">
                <Link className="link-full-detail" to="/registered_complaints/closed_complaints">Full Detail</Link>
                </div>
              </div>

              <div className="box-dashboard" id="blue">
                <div className="box-title">
                  <div className="info">
                    <h3 className="qty">{feedbackCount}</h3>
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
              <div className="box-dashboard" id="blue">
                <div className="box-title">
                  <h3>My Profile</h3>
                </div>
                <div className="full-info">
                  <Link className="link-full-detail" to="/my_profile">Full Detail</Link>
                </div>
              </div>

              <div className="box-dashboard" id="green">
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
