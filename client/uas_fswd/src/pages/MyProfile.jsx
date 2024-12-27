import '../style/MyProfile.css';
import { Link } from 'react-router-dom';

export default function MyProfile() {
  return (
    <div className="container">
      <div className="content">
        <h2>My Profile</h2>

        <div className="formcontainer">
          <p>LAST UPDATED:</p>

          <form className="form" method="post">
            <div className="fillform">
              <p>
                Registration No: <input type="text" name="registration_no" id="registration_no" value="" readOnly></input>
              </p>
              <p>
                Full Name: <input type="text" name="full_name" id="full_name" value="" readOnly></input>
              </p>
              <p>
                Gender: <input type="text" name="gender" id="gender" value="" readOnly></input>
              </p>
              <p>
                Contact No: <input type="number" name="contact_no" id="contact_no" value="" required></input>
              </p>
              <p>
                Email: <input type="email" name="email" id="email" value="" readOnly></input>
              </p>

              <div className="buttonform">
                <button type="reset">
                  <Link to="/">Cancel</Link>
                </button>
                <button type="submit" id="submit">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
