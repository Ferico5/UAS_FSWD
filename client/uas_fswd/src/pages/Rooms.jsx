import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Rooms() {
  const [rooms, setRooms] = useState([]);

  // Fungsi untuk mengambil data room dari API
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/rooms');
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error.message);
      }
    };

    fetchRooms();
  }, []);

  const deleteRoom = async (id_room) => {
    if (window.confirm('Are you sure you want to delete this room?')) {
      try {
        // Hapus ruangan berdasarkan id_room
        const response = await axios.delete(`http://localhost:5000/delete_room/${id_room}`);
        if (response.data.msg === 'Room Deleted!') {
          // Update data rooms setelah penghapusan
          setRooms(rooms.filter(room => room.id_room !== id_room));
        }
      } catch (error) {
        console.error('Error deleting room:', error.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h2>Rooms Detail</h2>
        <div className="container">
          <div className="box">
            <div className="boxheader">
              <p>ALL ROOMS</p>
            </div>
            <div className="boxinfo">
              <table border="1" cellSpacing="0">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Room No</th>
                    <th>Seater</th>
                    <th>Fee Per Month</th>
                    <th>Seater Remaining</th>
                    <th colSpan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                {rooms.map((room, index) => (
                    <tr key={room.id_room}>
                      <td id="center">{index + 1}</td>
                      <td id="center">{room.room_no}</td>
                      <td id="center">{room.seater}</td>
                      <td id="center">{room.fees_per_month}</td>
                      <td id="center">{room.remaining_seater}</td>
                      <td id="center">
                        <Link to={`/update_room/${room.room_no}`}><button>Update</button></Link>
                      </td>
                      <td id="center">
                        <button onClick={() => deleteRoom(room.room_no)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
