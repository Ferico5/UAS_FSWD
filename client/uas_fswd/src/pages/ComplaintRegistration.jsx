import '../style/ComplaintRegistration.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

export default function ComplaintRegistration() {
  const { user } = useAuth();

  const [roomNo, setRoomNo] = useState('');
  const [complaintType, setComplaintType] = useState('Food related');
  const [explainComplaint, setExplainComplaint] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomNo = async () => {
      try {
        if (user) {
          const response = await axios.get(`http://localhost:5000/complaint_room_no/${user.id_user}`);
          setRoomNo(response.data.room_no);
        }
      } catch (err) {
        console.error('Error fetching room number:', err);
      }
    };

    fetchRoomNo();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (user && roomNo) {
        await axios.post('http://localhost:5000/register_complaint', {
          id_user: user.id_user,
          room_no: user.room_no,
          complaint_type: complaintType,
          explain_complaint: explainComplaint,
          complaint_status: 'Unprocessed',
        });

        navigate('/registered_complaints');
      }
    } catch (err) {
      console.error('Error submitting complaint:', err);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h2>Complaint Registration</h2>

        <div>
          <div>
            <form className="form-complaint" onSubmit={handleSubmit}>
              <div className="fillform-complaint">
                <p>
                  Complaint Type:
                  <select name="complaint_type" id="complaint_type" value={complaintType} onChange={(e) => setComplaintType(e.target.value)} required>
                    <option value="Food related" name="food_related">
                      Food Related
                    </option>
                    <option value="Room related" name="room_related">
                      Room Related
                    </option>
                    <option value="Fee related" name="fee_related">
                      Fee Related
                    </option>
                    <option value="Electrical" name="electrical">
                      Electrical
                    </option>
                    <option value="Plumbing" name="plumbing">
                      Plumbing
                    </option>
                    <option value="Discipline" name="discipline">
                      Discipline
                    </option>
                    <option value="Other" name="other">
                      Other
                    </option>
                  </select>
                </p>
                <p>
                  Explain the Complaint: <input type="textarea" name="explain_complaint" id="explain_complaint" value={explainComplaint} onChange={(e) => setExplainComplaint(e.target.value)} required></input>
                </p>
                <div className="buttonform">
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
        </div>
      </div>
    </div>
  );
}
