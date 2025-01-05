import '../style/BookHostel.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

export default function BookHostel() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const { user, updateRoomNo } = useAuth();
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({
    room_no: '',
    food_status: 'Without Food',
    stay_from: '',
    duration: '1 Month',
    course: '',
    emergency_contact: '',
    guardian_name: '',
    guardian_relation: '',
    guardian_contact_no: '',
    correspondense_address: '',
    correspondense_city: '',
    correspondense_state: 'Indonesia',
    correspondense_pincode: '',
  });

  const navigate = useNavigate();

  const localStates = ['Indonesia', 'Malaysia', 'Singapore', 'Hongkong', 'Philippines', 'Myanmar', 'Vietnam', 'Other'];

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/rooms');
        const data = response.data;
        setRooms(data);

        // Only set the default room if there's no room selected yet
        if (!selectedRoom) {
          const firstAvailableRoom = data.find((room) => room.remaining_seater > 0);
          if (firstAvailableRoom) {
            setSelectedRoom(firstAvailableRoom);
            updateRoomNo(firstAvailableRoom.room_no);
          }
        }
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    const fetchStates = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countries = response.data.map((country) => country.name.common);
        setStates(countries.sort()); // Atur daftar negara secara alfabetis
      } catch (error) {
        console.error('Error fetching states from API:', error);
        setStates(localStates); // Gunakan data lokal jika gagal
      }
    };

    fetchRooms();
    fetchStates();
  }, [updateRoomNo]);

  const handleRoomChange = (e) => {
    const room = rooms.find((room) => room.room_no === parseInt(e.target.value));
    setSelectedRoom(room);
    if (room) {
      updateRoomNo(room.room_no);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      room_no: selectedRoom.room_no,
      food_status: formData.food_status,
      stay_from: formData.stay_from,
      duration: formData.duration,
      id_user: user.id_user,
    };

    const personalInfoData = {
      course: formData.course,
      emergency_contact: formData.emergency_contact,
      guardian_name: formData.guardian_name,
      guardian_relation: formData.guardian_relation,
      guardian_contact_no: formData.guardian_contact_no,
      correspondense_address: formData.correspondense_address,
      correspondense_city: formData.correspondense_city,
      correspondense_state: formData.correspondense_state,
      correspondense_pincode: formData.correspondense_pincode,
      id_user: user.id_user,
    };

    try {
      // Send POST request for booking the room
      const bookingResponse = await axios.post('http://localhost:5000/book_hostel', bookingData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (bookingResponse.status === 200) {
        // Update the remaining_seater count in the database
        await axios.put('http://localhost:5000/update_room', {
          room_no: selectedRoom.room_no,
          remaining_seater: selectedRoom.remaining_seater - 1,
        });
      }

      // Send POST request for personal info
      await axios.post('http://localhost:5000/personal_info', personalInfoData);

      navigate('/room_details');
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  // Mendapatkan tanggal hari ini untuk atribut `min`
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="container">
      <div className="content">
        <h2>Book Hostel</h2>

        <div className="formcontainer">
          <p>FILL ALL INFO</p>

          <form className="form" method="post" onSubmit={handleSubmit}>
            <div className="fillform">
              <h3>Room Related Info</h3>
              <p>
                Room No:
                <select name="room_no" id="room_no" required onChange={handleRoomChange}>
                  {rooms
                    .filter((room) => room.remaining_seater > 0)
                    .map((room) => (
                      <option key={room.id_room} value={room.room_no}>
                        Room {room.room_no} ({room.remaining_seater} seaters remaining)
                      </option>
                    ))}
                </select>
              </p>
              <p>
                Seater: <input type="text" name="seater" id="seater" value={selectedRoom?.seater || ''} readOnly></input>
              </p>
              <p>
                Fees Per Month: <input type="text" name="fees_per_month" id="fees_per_month" value={selectedRoom?.fees_per_month || ''} readOnly></input>
              </p>
              <p>
                Food Status:
                <select name="food_status" id="food_status" onChange={(e) => setFormData({ ...formData, food_status: e.target.value })}>
                  <option value="Without Food" name="without_food">
                    Without Food
                  </option>
                  <option value="With Food" name="with_food">
                    With Food (Rp. 350,000 Per Month Extra)
                  </option>
                </select>
              </p>
              <p>
                Stay From: <input type="date" name="stay_from" id="stayFrom" min={today} onChange={(e) => setFormData({ ...formData, stay_from: e.target.value })} required></input>
              </p>
              <p>
                Duration:
                <select name="duration" id="duration" onChange={(e) => setFormData({ ...formData, duration: e.target.value })}>
                  <option value="1 Month" name="1 Month">
                    1 Month
                  </option>
                  <option value="2 Month" name="2 Month">
                    2 Month
                  </option>
                  <option value="3 Month" name="3 Month">
                    3 Month
                  </option>
                  <option value="4 Month" name="4 Month">
                    4 Month
                  </option>
                  <option value="5 Month" name="5 Month">
                    5 Month
                  </option>
                  <option value="6 Month" name="6 Month">
                    6 Month
                  </option>
                  <option value="7 Month" name="7 Month">
                    7 Month
                  </option>
                  <option value="8 Month" name="8 Month">
                    8 Month
                  </option>
                  <option value="9 Month" name="9 Month">
                    9 Month
                  </option>
                  <option value="10 Month" name="10 Month">
                    10 Month
                  </option>
                  <option value="11 Month" name="11 Month">
                    11 Month
                  </option>
                  <option value="12 Month" name="12 Month">
                    12 Month
                  </option>
                </select>
              </p>

              <h3>Personal Info</h3>
              <p>
                Course: <input type="text" name="course" onChange={(e) => setFormData({ ...formData, course: e.target.value })} required></input>
              </p>
              <p>
                Full Name: <input type="text" name="fullName" id="fullName" value={user?.full_name || ''} readOnly></input>
              </p>
              <p>
                Gender: <input type="text" name="gender" id="gender" value={user?.gender || ''} readOnly></input>
              </p>
              <p>
                Contact No: <input type="text" name="contactNo" id="contactNo" value={user?.contact_no || ''} readOnly></input>
              </p>
              <p>
                Emergency Contact: <input type="text" name="emergencyContact" onChange={(e) => setFormData({ ...formData, emergency_contact: e.target.value })} required></input>
              </p>
              <p>
                Guardian Name: <input type="text" name="guardianName" onChange={(e) => setFormData({ ...formData, guardian_name: e.target.value })} required></input>
              </p>
              <p>
                Guardian Relation: <input type="text" name="guardianRelation" onChange={(e) => setFormData({ ...formData, guardian_relation: e.target.value })} required></input>
              </p>
              <p>
                Guardian Contact No: <input type="number" name="guardianContactNo" onChange={(e) => setFormData({ ...formData, guardian_contact_no: e.target.value })} required></input>
              </p>

              <h3>Correspondense Address</h3>
              <p>
                Address: <input type="text" name="correspondenseAddress" onChange={(e) => setFormData({ ...formData, correspondense_address: e.target.value })} required></input>
              </p>
              <p>
                City: <input type="text" name="correspondenseCity" onChange={(e) => setFormData({ ...formData, correspondense_city: e.target.value })} required></input>
              </p>
              <p>
                State:
                <select name="correspondenseState" id="correspondenseState" value={formData.correspondense_state} onChange={(e) => setFormData({ ...formData, correspondense_state: e.target.value })} required>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                Pincode: <input type="text" name="pincode" onChange={(e) => setFormData({ ...formData, correspondense_pincode: e.target.value })} required></input>
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
  );
}
