import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RoomDetails from './RoomDetails';

export default function FeedbackDetails() {
  const { id_feedback } = useParams();
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const fetchFeedbackDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/feedback/${id_feedback}`);
        setFeedback(response.data);
      } catch (error) {
        console.error('Error fetching feedback details:', error);
      }
    };

    fetchFeedbackDetails();
  }, [id_feedback]);

  if (!feedback) {
    return <p>Loading feedback details...</p>;
  }

  return (
    <div className="container">
      <div className="content">
        <RoomDetails id_user={feedback.id_user} />

        <h2 className="padding-top-feedback">Feedback Details</h2>

        <table className="feedback-table" border="1" cellSpacing="0" cellPadding="8">
          <thead>
            <tr>
              <th colSpan="2" className="table-header">
                Feedback Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Full Name:</strong>
              </td>
              <td>{feedback.user?.full_name || 'N/A'}</td>
            </tr>
            <tr>
              <td>
                <strong>Room No:</strong>
              </td>
              <td>{feedback.bookedRoom?.room_no || 'N/A'}</td>
            </tr>
            <tr>
              <td>
                <strong>Accessibility to Warden:</strong>
              </td>
              <td>{feedback.accessibility_to_warden}</td>
            </tr>
            <tr>
              <td>
                <strong>Accessibility to Hostel Committee Members:</strong>
              </td>
              <td>{feedback.accessibility_to_hostel_committee_members}</td>
            </tr>
            <tr>
              <td>
                <strong>Redressal of Problems:</strong>
              </td>
              <td>{feedback.redressal_of_problems}</td>
            </tr>
            <tr>
              <td>
                <strong>Room:</strong>
              </td>
              <td>{feedback.room}</td>
            </tr>
            <tr>
              <td>
                <strong>Mess:</strong>
              </td>
              <td>{feedback.mess}</td>
            </tr>
            <tr>
              <td>
                <strong>Hostel Surroundings:</strong>
              </td>
              <td>{feedback.hostel_surroundings}</td>
            </tr>
            <tr>
              <td>
                <strong>Overall Rating:</strong>
              </td>
              <td>{feedback.overall_rating}</td>
            </tr>
            <tr>
              <td>
                <strong>Feedback Message:</strong>
              </td>
              <td>{feedback.feedback_message || '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
