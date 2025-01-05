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
  const [bookingDates, setBookingDates] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        if (user) {
          const response = await axios.get(`http://localhost:5000/book_hostel/${user.id_user}`);
          const bookings = response.data;

          // Convert to formatted date
          const bookingOptions = bookings.map((booking) => {
            const date = new Date(booking.stay_from);
            const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

            return {
              room_no: booking.room_no,
              booking_date: formattedDate, // Use formatted date for the dropdown
              stay_from: booking.stay_from,
            };
          });

          setBookingDates(bookingOptions); // Set booking data to state
          if (bookingOptions.length > 0) {
            setSelectedBooking(bookingOptions[0].booking_date);
            setRoomNo(bookingOptions[0].room_no); // Sinkronkan roomNo dengan pilihan default
          }
        }
      } catch (err) {
        console.error('Error fetching booking data:', err);
      }
    };

    fetchBookingData();
  }, [user]);

  const handleBookingChange = (e) => {
    const selectedDate = e.target.value;
    setSelectedBooking(selectedDate);

    // Find the room number based on the selected booking date
    const selectedBookingData = bookingDates.find((booking) => booking.booking_date === selectedDate);
    setRoomNo(selectedBookingData ? selectedBookingData.room_no : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (user && roomNo) {
        await axios.post('http://localhost:5000/register_complaint', {
          id_user: user.id_user,
          room_no: roomNo,
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
                  Booking Date:
                  <select name="booking_date" id="booking_date" value={selectedBooking} onChange={handleBookingChange} required>
                    {bookingDates.map((booking, index) => (
                      <option key={index} value={booking.booking_date}>
                        {booking.booking_date} - Room {booking.room_no}
                      </option>
                    ))}
                  </select>
                </p>

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
