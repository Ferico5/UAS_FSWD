import '../style/Header.css';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { isLoggedIn, user, logout } = useAuth(); // Ambil status login dan data user dari context

  return (
    <div>
      {isLoggedIn ? (
        <div className="header">
          <div className="title-header">
            <h1>
              <a href="/">Unpri Hostel</a>
            </h1>
          </div>

          <div className="login-header">
            <div className="user-name">
              <h1>{user?.full_name}</h1>
            </div>

            <div className="logout">
              <a href="/login" onClick={logout}>
                Logout
              </a>{' '}
              {/* Logout user */}
            </div>
          </div>
        </div>
      ) : (
        <div className="header">
          <div className="title-header">
            <h1>
              <a href="/">Unpri Hostel</a>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
