export default function AddAdmin() {
  return (
    <div className="container">
      <div className="content">
        <h2>Add Admin</h2>

        <div className="formcontainer">
          <p>ADD ADMIN&apos;S PROFILE:</p>

          <form className="form" method="post">
            <div className="fillform">
              <p>
                Admin Id : <input type="text" name="admin_id" id="admin_id" value="" readOnly></input>
              </p>
              <p>
                Username: <input type="text" name="username" id="username" required></input>
              </p>
              <p>
                Admin Email: <input type="email" name="admin_email" id="admin_email" required></input>
              </p>
              <p>
                Admin Password: <input type="password" name="password" id="password" required></input>
              </p>
              <p>
                Confirm Admin Password: <input type="password" name="confirmPassword" id="confirmPassword" required></input>
              </p>
              <p id="error-message">
                Passwords do not match!
              </p>

              <div className="buttonform">
                <button type="reset">
                  <a href="dashboardadmin.php">Cancel</a>
                </button>
                <button type="submit" id="submit">
                  Add Admin
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
