import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import axios from 'axios';

export default function ChangePassword() {
  const { user, logout } = useAuth(); // Ambil data user dari context
  const userId = user?.id_user; // Ambil ID pengguna dari konteks
  const navigate = useNavigate(); // Buat instance navigate

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi bahwa new password dan confirm new password sama
    if (newPassword !== confirmNewPassword) {
      setErrorMessage('New password and confirm password do not match!');
      return;
    }

    try {
      // Kirim permintaan untuk memverifikasi current password
      const response = await axios.post(`http://localhost:5000/users/verify-password`, { id_user: userId, current_password: currentPassword });

      if (response.data.valid) {
        // Kirim permintaan untuk mengubah password
        const updatedData = {
          current_password: currentPassword,
          new_password: newPassword,
          new_password_confirmation: confirmNewPassword, // Pastikan ini dikirimkan
        };

        const updateResponse = await axios.put(`http://localhost:5000/users/${userId}`, updatedData);
        console.log(updateResponse.data); // Pastikan untuk memeriksa respons dari server
        logout();
        navigate('/login'); // Arahkan ke halaman yang diinginkan setelah berhasil
      } else {
        setErrorMessage('Current password is incorrect.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while changing the password.');
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h2>Change Password</h2>

        <div className="formcontainer">
          <p>LAST UPDATED:</p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="fillform">
              <p>
                Current Password: <input type="password" name="current_password" id="current_password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
              </p>
              <p>
                New Password: <input type="password" name="new_password" id="new_password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
              </p>
              <p>
                Confirm New Password: <input type="password" name="confirm_new_password" id="confirm_new_password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} required />
              </p>

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
