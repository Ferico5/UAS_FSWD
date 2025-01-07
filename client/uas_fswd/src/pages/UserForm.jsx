/* eslint-disable react/prop-types */
import { Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // Import useAuth

export default function UserForm({ isAdmin }) {
  const [isLoading, setIsLoading] = useState(false);
  const [fullname, setFullname] = useState('');
  const [gender, setGender] = useState('Male');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { logout } = useAuth(); // Ambil fungsi logout dari context

  // Set role based on isAdmin prop
  const role = isAdmin ? 'admin' : 'user';

  const registerUser = async () => {
    try {
      await axios.post('http://localhost:5000/users', {
        full_name: fullname,
        gender,
        contact_no: contactNo,
        email,
        password,
        role,
      });
      logout();
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage('Email is already exists!')
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      setErrorMessage('Password and confirm password do not match!');
      setIsLoading(false);
      return;
    }

    await registerUser();
    setIsLoading(false);
  };

  return (
    <div className='register-form'>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-content">
          <label htmlFor="full_name">Full Name</label>
          <input type="text" name="full_name" id="full_name" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} required />

          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label htmlFor="contact_no">Contact No</label>
          <input type="number" name="contact_no" id="contact_no" placeholder="Contact No" value={contactNo} onChange={(e) => setContactNo(e.target.value)} required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <label htmlFor="confirm_password">Confirm Password</label>
          <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <Button type="primary" loading={isLoading} htmlType="submit" className="button">
            {isAdmin ? 'Add Admin' : 'Register'}
          </Button>
        </div>
      </form>
    </div>
  );
}
