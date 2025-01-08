import '../style/RegisteredComplaints.css';
import '../style/RoomDetails.css';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function RegisteredComplaints() {
  const { user } = useAuth();
  const { status } = useParams();
  const isAdmin = user && user.role === 'admin';
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        let url = '';

        if (isAdmin) {
          switch (status) {
            case 'new_complaints':
              url = 'http://localhost:5000/register_complaint/unprocessed';
              break;
            case 'in_process_complaints':
              url = 'http://localhost:5000/register_complaint/in_process';
              break;
            case 'closed_complaints':
              url = 'http://localhost:5000/register_complaint/closed';
              break;
            default:
              url = 'http://localhost:5000/register_complaint';
              break;
          }
        } else {
          url = `http://localhost:5000/register_complaint/${user.id_user}`;
        }

        const response = await axios.get(url);
        setComplaints(response.data);
      } catch (err) {
        console.error('Error fetching complaints:', err);
      }
    };

    if (user) {
      fetchComplaints();
    }
  }, [user, status, isAdmin]);

  return (
    <div className="container">
      <div className="content">
        {isAdmin ? <h2>Registered Complaints</h2> : <h2>My Complaints</h2>}

        <div>
          <div className="box">
            <div className="boxheader">
              <p>COMPLAINT DETAILS</p>
            </div>
            <div className="boxinfo">
              <table border="1" cellSpacing="0">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Room No</th>
                    <th>Complaint Type</th>
                    <th>Complaint Status</th>
                    <th>Complaint Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((complaint, index) => {
                    const date = new Date(complaint.createdAt);
                    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
                    const formattedTime = date.toTimeString().split(' ')[0];

                    return (
                      <tr key={complaint.register_complaint_id}>
                        <td id="center">{index + 1}</td>
                        <td id="center">{complaint.room_no}</td>
                        <td>{complaint.complaint_type}</td>
                        <td id="center">{complaint.complaint_status}</td>
                        <td>{`${formattedDate} ${formattedTime}`}</td>
                        <td id="center">
                        <Link to={`/complaint_detail/${complaint.register_complaint_id}`}>
                          <button>View Details</button>
                        </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
