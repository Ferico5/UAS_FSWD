import '../style/Feedback.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

export default function Feedback() {
  const { user } = useAuth();
  const isAdmin = user && user.role === 'admin';
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate()

  // Fetch feedbacks for admin
  useEffect(() => {
    if (isAdmin) {
      fetchFeedbacks();
    }
  }, [isAdmin]);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/feedback');
      setFeedbacks(response.data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  // Feedback form state for normal users
  const [formData, setFormData] = useState({
    accessibility_to_warden: '',
    accessibility_to_hostel_committee_members: '',
    redressal_of_problems: '',
    room: '',
    mess: '',
    hostel_surroundings: '',
    overall_rating: '',
    feedback_message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('You need to be logged in to submit feedback!');
      return;
    }

    const feedbackData = {
      ...formData,
      id_user: user.id_user, // Attach user ID from context
    };

    try {
      const response = await axios.post('http://localhost:5000/feedback', feedbackData);
      if (response.status === 201) {
        alert('Feedback successfully submitted!');
        setFormData({
          accessibility_to_warden: '',
          accessibility_to_hostel_committee_members: '',
          redressal_of_problems: '',
          room: '',
          mess: '',
          hostel_surroundings: '',
          overall_rating: '',
          feedback_message: '',
        });
        navigate('/')
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('There was an issue submitting your feedback. Please try again later.');
    }
  };

  return (
    <div className="container">
      <div className="content">
        {isAdmin ? <h2>Registered Feedbacks</h2> : <h2>Feedback</h2>}

        {isAdmin ? (
          <div className="box-feedback">
            <div className="boxheader">
              <p>FEEDBACK DETAILS</p>
            </div>
            <div className="boxinfo">
              <table border="1" cellSpacing="0">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Room No</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {feedbacks.map((feedback, index) => (
                    <tr key={feedback.id_feedback}>
                      <td id="center">{index + 1}</td>
                      <td id='center'>{feedback.user?.full_name || 'N/A'}</td>
                      <td id="center">{feedback.bookedRoom?.room_no || 'N/A'}</td>
                      <td id="center">
                        <Link to={`/feedback/${feedback.id_feedback}`}>
                          <button>View Details</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="box-feedback">
            <form className="form-feedback" onSubmit={handleSubmit}>
              <div className="fillform-feedback">
                <div className="flex">
                  <div className="flexforp">
                  <p>Accessibility to Warden:</p>
                  </div>
                  {['Excellent', 'Very Good', 'Good', 'Average', 'Below Average'].map((option) => (
                    <label key={option}>
                      <input type="radio" name="accessibility_to_warden" value={option} checked={formData.accessibility_to_warden === option} onChange={handleInputChange} />
                      {option}
                    </label>
                  ))}
                </div>

                <div className="flex">
                  <div className="flexforp">
                    <p>Accessibility to Hostel Committee Members:</p>
                  </div>
                  {['Excellent', 'Very Good', 'Good', 'Average', 'Below Average'].map((option) => (
                    <label key={option}>
                      <input type="radio" name="accessibility_to_hostel_committee_members" value={option} checked={formData.accessibility_to_hostel_committee_members === option} onChange={handleInputChange} />
                      {option}
                    </label>
                  ))}
                </div>

                <div className="flex">
                  <div className="flexforp">
                    <p>Redressal of Problems:</p>
                  </div>
                  {['Excellent', 'Very Good', 'Good', 'Average', 'Below Average'].map((option) => (
                    <label key={option}>
                      <input type="radio" name="redressal_of_problems" value={option} checked={formData.redressal_of_problems === option} onChange={handleInputChange} />
                      {option}
                    </label>
                  ))}
                </div>

                <div className="flex">
                  <div className="flexforp">
                    <p>Room:</p>
                  </div>
                  {['Excellent', 'Very Good', 'Good', 'Average', 'Below Average'].map((option) => (
                    <label key={option}>
                      <input type="radio" name="room" value={option} checked={formData.room === option} onChange={handleInputChange} />
                      {option}
                    </label>
                  ))}
                </div>

                <div className="flex">
                  <div className="flexforp">
                    <p>Mess:</p>
                  </div>
                  {['Excellent', 'Very Good', 'Good', 'Average', 'Below Average'].map((option) => (
                    <label key={option}>
                      <input type="radio" name="mess" value={option} checked={formData.mess === option} onChange={handleInputChange} />
                      {option}
                    </label>
                  ))}
                </div>

                <div className="flex">
                  <div className="flexforp">
                    <p>Hostel Surroundings:</p>
                  </div>
                  {['Excellent', 'Very Good', 'Good', 'Average', 'Below Average'].map((option) => (
                    <label key={option}>
                      <input type="radio" name="hostel_surroundings" value={option} checked={formData.hostel_surroundings === option} onChange={handleInputChange} />
                      {option}
                    </label>
                  ))}
                </div>

                <div className="flex">
                  <div className="flexforp">
                    <p>Overall Rating:</p>
                  </div>
                  {['Excellent', 'Very Good', 'Good', 'Average', 'Below Average'].map((option) => (
                    <label key={option}>
                      <input type="radio" name="overall_rating" value={option} checked={formData.overall_rating === option} onChange={handleInputChange} />
                      {option}
                    </label>
                  ))}
                </div>

                <div className="flex">
                  <div className="flexforp">
                    <p>Feedback Message (if any):</p>
                  </div>
                  <input type="text" name="feedback_message" className="input-type" value={formData.feedback_message} onChange={handleInputChange} />
                </div>

                <div className="buttonform-feedback">
                  <button type="reset">
                    <Link to="/">Cancel</Link>
                  </button>
                  <button type="submit" id="submit">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}