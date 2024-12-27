import '../style/BookHostel.css';
import { Link } from 'react-router-dom';

export default function BookHostel() {
  return (
    <div className="container">
      <div className="content">
        <h2>Book Hostel</h2>

        <div className="formcontainer">
          <p>FILL ALL INFO</p>

          <form className="form" method="post" action="">
            <div className="fillform">
              <h3>Room Related Info</h3>
              <p>
                Room No:
                <select name="room_no" id="room_no" required>
                  <option>Choose Room Number</option>
                  <option value="">{/* looping pilihan */}</option>
                </select>
              </p>
              <p>
                Seater: <input type="text" name="seater" id="seater" readOnly></input>
              </p>
              <p>
                Fees Per Month: <input type="text" name="fees_per_month" id="fees_per_month" readOnly></input>
              </p>
              <p>
                Food Status:
                <select name="food_status" id="food_status">
                  <option value="Without Food" name="without_food">
                    Without Food
                  </option>
                  <option value="With Food" name="with_food">
                    With Food (Rp. 350,000 Per Month Extra)
                  </option>
                </select>
              </p>
              <p>
                Stay From: <input type="date" name="stay_from" id="stayFrom" required></input>
              </p>
              <p>
                Duration:
                <select name="duration" id="duration">
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
                Course: <input type="text" name="course" required></input>
              </p>
              <p>
                Registration No: <input type="text" name="registrationNo" id="registrationNo" value="" readOnly></input>
              </p>
              <p>
                Full Name: <input type="text" name="fullName" id="fullName" value="" readOnly></input>
              </p>
              <p>
                Gender: <input type="text" name="gender" id="gender" value="" readOnly></input>
              </p>
              <p>
                Contact No: <input type="text" name="contactNo" id="contactNo" value="" readOnly></input>
              </p>
              <p>
                Emergency Contact: <input type="text" name="emergencyContact" required></input>
              </p>
              <p>
                Guardian Name: <input type="text" name="guardianName" required></input>
              </p>
              <p>
                Guardian Relation: <input type="text" name="guardianRelation" required></input>
              </p>
              <p>
                Guardian Contact No: <input type="number" name="guardianContactNo" required></input>
              </p>

              <h3>Correspondense Address</h3>
              <p>
                Address: <input type="text" name="correspondenseAddress" required></input>
              </p>
              <p>
                City: <input type="text" name="correspondenseCity" required></input>
              </p>
              <p>
                State:
                <select name="correspondenseState" id="correspondenseState" required></select>
              </p>
              <p>
                Pincode: <input type="text" name="pincode" required></input>
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
