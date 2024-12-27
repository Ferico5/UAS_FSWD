import { Link } from "react-router-dom";

export default function ChangePassword() {
  return (
    <div className="container">
      <div className="content">
        <h2>Change Password</h2>

        <div className="formcontainer">
          <p>LAST UPDATED:</p>

          <form className="form" method="post">
            <div className="fillform">
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
