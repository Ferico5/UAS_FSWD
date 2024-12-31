import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function UpdateRoom() {
    const { id_room } = useParams(); // Mengambil id_room dari URL
    const [roomNo, setRoomNo] = useState('');
    const [seater, setSeater] = useState('');
    const [feesPerMonth, setFeesPerMonth] = useState('');
    const [remainingSeater, setRemainingSeater] = useState('')
    const navigate = useNavigate();

    // Fungsi untuk mengambil data ruangan berdasarkan id_room
    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/rooms/${id_room}`);
                const roomData = response.data;

                // Mengisi form dengan data ruangan yang ada
                setRoomNo(roomData.room_no);
                setSeater(roomData.seater);
                setFeesPerMonth(roomData.fees_per_month);
                setRemainingSeater(roomData.remaining_seater);
            } catch (error) {
                console.error('Error fetching room data:', error.message);
            }
        };

        fetchRoomData();
    }, [id_room]); // Menggunakan id_room di dependency array untuk mengupdate data saat id berubah
  
    const handleSubmit = async(e) => {
      e.preventDefault()
  
      try {
        const response = await axios.put(`http://localhost:5000/update_room/${id_room}`, {
          room_no: roomNo,
          seater,
          fees_per_month: feesPerMonth,
          remaining_seater: remainingSeater,
        })
  
        if (response.data.msg === 'Room Added!') {
          navigate('/rooms')
        }
      } catch (error) {
        console.error(error.message)
      }
    }
  
    return (
      <div className="container">
        <div className="content">
          <h2>Update Room</h2>
  
          <div className="container">
            <div className="box">
              <form className="form" onSubmit={handleSubmit}>
                <div className="fillform">
                  <p>
                    Select seater :
                    <select name="select_seater" id="select_seater" value={seater} onChange={(e) => setSeater(e.target.value)} required>
                      <option value="1" name="1 Seater">
                        1 Seater
                      </option>
                      <option value="2" name="2 Seater">
                        2 Seater
                      </option>
                      <option value="3" name="3 Seater">
                        3 Seater
                      </option>
                      <option value="4" name="4 Seater">
                        4 Seater
                      </option>
                      <option value="5" name="5 Seater">
                        5 Seater
                      </option>
                    </select>
                  </p>
                  <p>
                    Room No : <input type="text" name="room_no" id="room_no" value={roomNo} onChange={(e) => setRoomNo(e.target.value)} required></input>
                  </p>
                  <p>
                    Fee (per student) : <input type="text" name="fees_per_month" id="fees_per_month" value={feesPerMonth} onChange={(e) => setFeesPerMonth(e.target.value)} required></input>
                  </p>
                  <p>Remaining Seater : <input type="number" id="remaining_seater" name="remaining_seater" value={remainingSeater} onChange={(e) => setRemainingSeater(e.target.value)} required></input></p>
                  <div className="buttonform">
                    <button type="reset">
                      <Link to="/">Cancel</Link>
                    </button>
                    <button type="submit" id="submit">
                      Update Room
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