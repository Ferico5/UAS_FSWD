/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddRoom() {
  const [roomNo, setRoomNo] = useState('');
  const [seater, setSeater] = useState(1);
  const [feesPerMonth, setFeesPerMonth] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let remainingSeater = seater;

    try {
      const response = await axios.post('http://localhost:5000/add_room', {
        room_no: roomNo,
        seater,
        fees_per_month: feesPerMonth,
        remaining_seater: remainingSeater,
      });

      if (response.data.msg === 'Room Added!') {
        navigate('/rooms');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg(error.response.data.msg); // Set error message
      } else {
        setErrorMsg('Something went wrong! Please try again.'); // General error message
      }
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h2>Add Room</h2>

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
                {errorMsg && <p className="error-msg">{errorMsg}</p>}

                <div className="buttonform">
                  <button type="reset">
                    <Link to="/">Cancel</Link>
                  </button>
                  <button type="submit" id="submit">
                    Add Room
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
