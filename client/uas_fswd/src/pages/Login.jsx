import { Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Mengambil fungsi login dari context

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (response.data.msg === 'Login successful') {
        // Simpan data user setelah login berhasil
        login(response.data.response);
        navigate('/');
      } else if (response.data.msg === 'Invalid email or password') {
        setErrorMessage('Email or Password is incorrect!');
        setIsLoading(false);
        return;
      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage('An error occured, please try again later!');
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-content">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <Button type="primary" loading={isLoading} htmlType="submit" className="button">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
