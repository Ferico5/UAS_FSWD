import '../style/MyProfile.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import axios from 'axios';

export default function MyProfile() {
  const { user, setUser } = useAuth();
  const isAdmin = user && user.role === 'admin';
  const userId = user.id_user;
  console.log(userId);
  const navigate = useNavigate();

  const [fullName, setFullName] = useState(user.full_name || '');
  const [contactNo, setContactNo] = useState(user.contact_no || '');
  const [email, setEmail] = useState(user.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi password jika admin
    if (isAdmin && newPassword !== confirmNewPassword) {
      setErrorMessage('New password and confirm password do not match!');
      return;
    }

    try {
      const updatedData = {
        full_name: fullName,
        contact_no: contactNo,
        email,
        ...(isAdmin && { current_password: currentPassword, new_password: newPassword }), // Hanya kirim password jika admin
      };

      // Kirim data ke server
      await axios.put(`http://localhost:5000/users/${userId}`, updatedData);
      setUser({ ...user, full_name: fullName, contact_no: contactNo, email });
      navigate('/');
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while updating the profile.');
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h2>My Profile</h2>

        <div className="formcontainer">
          <p>LAST UPDATED:</p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="fillform">
              <p>
                Full Name: <input type="text" name="full_name" id="full_name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </p>
              <p>
                Contact No: <input type="number" name="contact_no" id="contact_no" value={contactNo} onChange={(e) => setContactNo(e.target.value)} required />
              </p>
              <p>
                {isAdmin ? (
                  <>
                    Admin Email: <input type="email" name="admin_email" id="admin_email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </>
                ) : (
                  <>
                    Email: <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </>
                )}
              </p>

              {isAdmin && (
                <>
                  <p>
                    Current Password: <input type="password" name="current_password" id="current_password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
                  </p>
                  <p>
                    New Password: <input type="password" name="new_password" id="new_password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                  </p>
                  <p>
                    Confirm New Password: <input type="password" name="confirm_new_password" id="confirm_new_password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} required />
                  </p>
                </>
              )}

              {errorMessage && <div className="error-message">{errorMessage}</div>}

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
