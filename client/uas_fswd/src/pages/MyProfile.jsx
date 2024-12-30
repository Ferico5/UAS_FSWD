import '../style/MyProfile.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function MyProfile() {
  const [isAdmin] = useState(true);

  return (
    <div className="container">
      <div className="content">
        <h2>My Profile</h2>

        <div className="formcontainer">
          <p>LAST UPDATED:</p>

          <form className="form" method="post">
            {isAdmin ? (
              <div className="fillform">
                <p>
                  Admin Id : <input type="text" name="admin_id" id="admin_id" value="" readOnly></input>
                </p>
                <p>
                  Username: <input type="text" name="username" id="username" value=""></input>
                </p>
                <p>
                  Admin Email: <input type="email" name="admin_email" id="admin_email" value=""></input>
                </p>
                <p>
                  Current Password: <input type="password" name="current_password" id="current_password" required></input>
                </p>
                <p>
                  New Password: <input type="password" name="new_password" id="new_password" required></input>
                </p>
                <p>
                  Confirm New Password: <input type="password" name="confirm_new_password" id="confirm_new_password" required></input>
                </p>

                <div className="buttonform">
                  <button type="reset">
                    <a href="dashboardadmin.php">Cancel</a>
                  </button>
                  <button type="submit" id="submit">
                    Update
                  </button>
                </div>
              </div>
            ) : (
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
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
