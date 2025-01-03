import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Feedback Details</h2>
      <p><strong>Full Name:</strong> {feedback.user?.full_name || 'N/A'}</p>
      <p><strong>Room No:</strong> {feedback.bookedRoom?.room_no || 'N/A'}</p>
      <p><strong>Accessibility to Warden:</strong> {feedback.accessibility_to_warden}</p>
      <p><strong>Accessibility to Hostel Committee Members:</strong> {feedback.accessibility_to_hostel_committee_members}</p>
      <p><strong>Redressal of Problems:</strong> {feedback.redressal_of_problems}</p>
      <p><strong>Room:</strong> {feedback.room}</p>
      <p><strong>Mess:</strong> {feedback.mess}</p>
      <p><strong>Hostel Surroundings:</strong> {feedback.hostel_surroundings}</p>
      <p><strong>Overall Rating:</strong> {feedback.overall_rating}</p>
      <p><strong>Feedback Message:</strong> {feedback.feedback_message || '-'}</p>
    </div>
  );
}
