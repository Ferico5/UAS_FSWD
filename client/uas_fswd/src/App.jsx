// import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './style/App.css';

// import pages
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BookHostel from './pages/BookHostel';
import RoomDetails from './pages/RoomDetails';
import ComplaintRegistration from './pages/ComplaintRegistration';
import RegisteredComplaints from './pages/RegisteredComplaints';
import Feedback from './pages/Feedback';
import MyProfile from './pages/MyProfile';
import ChangePassword from './pages/ChangePassword';
import Rooms from './pages/Rooms';
import AddRoom from './pages/AddRoom';
import AddAdmin from './pages/AddAdmin';
import Students from './pages/Students';
import UpdateRoom from './pages/UpdateRoom';
import FeedbackDetail from './pages/FeedbackDetail'

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
        <Navbar className="navbar" />
        <Outlet className="outlet" />
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
        path: '/registered_complaints/:status',
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
      {
        path: '/rooms',
        element: <Rooms />,
      },
      {
        path: '/add_room',
        element: <AddRoom />,
      },
      {
        path: '/add_admin',
        element: <AddAdmin />,
      },
      {
        path: '/students',
        element: <Students />,
      },
      {
        path: '/update_room/:id_room',
        element: <UpdateRoom />,
      },
      {
        path: '/feedback/:id_feedback',
        element: <FeedbackDetail />,
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
