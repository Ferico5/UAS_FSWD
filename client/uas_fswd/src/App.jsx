// import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './style/App.css'

// import pages
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BookHostel from './pages/BookHostel';
import RoomDetails from './pages/RoomDetails';
import ComplaintRegistration from './pages/ComplaintRegistration';
import RegisteredComplaints from './pages/RegisteredComplaints';
import Feedback from './pages/feedback';
import MyProfile from './pages/MyProfile';
import ChangePassword from './pages/ChangePassword';

// import components
import Header from './components/Header';
import Navbar from './components/Navbar';

// Import context
import { AuthProvider } from './context/AuthContext';


const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Navbar className='navbar' />
        <Outlet className='outlet' />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/book_hostel',
        element: <BookHostel />,
      },
      {
        path: '/room_details',
        element: <RoomDetails />,
      },
      {
        path: '/complaint_registration',
        element: <ComplaintRegistration />,
      },
      {
        path: '/registered_complaints',
        element: <RegisteredComplaints />,
      },
      {
        path: '/feedback',
        element: <Feedback />,
      },
      {
        path: '/my_profile',
        element: <MyProfile />,
      },
      {
        path: '/change_password',
        element: <ChangePassword />,
      },
    ],
  },
  // {
  //   path: '/register',
  //   element: <Register />,
  // },
  // {
  //   path: '/login',
  //   element: <Login />,
  // },
]);

const App = () => {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
};

export default App;
