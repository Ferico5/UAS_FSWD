import '../style/RoomDetails.css';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

export default function RoomDetails() {
  const { user } = useAuth();
  const [bookingDetails, setBookingDetails] = useState(null);
  const [personalInfo, setPersonalInfo] = useState(null);
  const [registrationDetails, setRegistrationDetails] = useState(null);
  const [roomDetails, setRoomDetails] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          // Fetch booking details
          const bookingResponse = await axios.get(`http://localhost:5000/book_hostel/${user.id_user}`);
          setBookingDetails(bookingResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchPersonalInfo = async () => {
      try {
        if (user) {
          // Fetch personal info
          const personalInfoResponse = await axios.get(`http://localhost:5000/personal_info/${user.id_user}`);
          setPersonalInfo(personalInfoResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchRegistration = async () => {
      try {
        if (user) {
          const registrationResponse = await axios.get(`http://localhost:5000/users/${user.id_user}`);
          setRegistrationDetails(registrationResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    fetchPersonalInfo();
    fetchRegistration();
  }, [user]);

  useEffect(() => {
    const fetchRoom = async () => {
      if (bookingDetails && bookingDetails[currentPage]) {
        const roomResponse = await axios.get(`http://localhost:5000/rooms/${bookingDetails[currentPage].room_no}`);
        setRoomDetails(roomResponse.data);
      }
    };

    fetchRoom();
  }, [bookingDetails, user, currentPage]);

  // Format dates
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    return formattedDate;
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    const formattedTime = date.toTimeString().split(' ')[0]; // Get time in HH:MM:SS format
    return `${formattedDate} ${formattedTime}`;
  };

  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < bookingDetails.length - 1) setCurrentPage(currentPage + 1);
  };

  if (!bookingDetails || !personalInfo || !registrationDetails) {
    return <div>Loading...</div>; // Tampilkan loading jika data belum tersedia
  }

  return (
    <div className="container">
      <div className="content">
        <h2>Room Details</h2>

        <div>
          <div>
            <div className="boxheader">
              <p>
                ROOM DETAILS - PAGE {currentPage + 1} OF {bookingDetails.length}
              </p>
            </div>
            <div className="boxinfo">
              <table border="1" cellSpacing="0">
                <thead>
                  <tr>
                    <th colSpan="6" className="blue bigger">
                      Room Related Info
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* looping */}
                  <tr>
                    <td className="bold">Registration Number :</td>
                    <td>{bookingDetails[currentPage].id_user}</td>
                    <td className="bold">Apply Date :</td>
                    <td colSpan="3">{formatDateTime(bookingDetails.createdAt)}</td>
                  </tr>
                  <tr>
                    <td className="bold">Room no :</td>
                    <td>{bookingDetails[currentPage].room_no}</td>
                    <td className="bold">Seater :</td>
                    <td>{roomDetails?.seater || 'N/A'}</td>
                    <td className="bold">Fees PM : </td>
                    <td>{roomDetails?.fees_per_month || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className="bold">Food Status :</td>
                    <td>{bookingDetails[currentPage].food_status}</td>
                    <td className="bold">Stay From :</td>
                    <td>{formatDate(bookingDetails[currentPage].stay_from)}</td>
                    <td className="bold">Duration : </td>
                    <td>{bookingDetails[currentPage].duration}</td>
                  </tr>
                  <tr>
                    <td className="bold">Hostel Fee :</td>
                    <td>{(parseInt(roomDetails?.fees_per_month) || 0) * (parseInt(bookingDetails[currentPage]?.duration) || 0)}</td>
                    <td className="bold">Food Fee :</td>
                    <td id="food_fee">{bookingDetails[currentPage].food_status === 'With Food' ? '350000' : '0'}</td>
                    <td className="bold">Total Food Fee :</td>
                    <td id="food_fee">{(bookingDetails[currentPage].food_status === 'With Food' ? 350000 : 0) * (parseInt(bookingDetails?.duration) || 0)}</td>
                  </tr>
                  <tr>
                    <td className="bold">Total Fee :</td>
                    <td colSpan="5" id="total_fee">
                      {(parseInt(roomDetails?.fees_per_month) || 0) * (parseInt(bookingDetails[currentPage]?.duration) || 0) + (bookingDetails[currentPage].food_status === 'With Food' ? 350000 : 0) * (parseInt(bookingDetails[currentPage]?.duration) || 0)}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="6" className="red">
                      Personal Info
                    </td>
                  </tr>
                  <tr>
                    <td className="bold">Registration No :</td>
                    <td>{personalInfo[currentPage].id_personal_info}</td>
                    <td className="bold">Full Name :</td>
                    <td>{registrationDetails.full_name}</td>
                    <td className="bold">Email : </td>
                    <td>{registrationDetails.email}</td>
                  </tr>
                  <tr>
                    <td className="bold">Contact No :</td>
                    <td>{registrationDetails.contact_no}</td>
                    <td className="bold">Gender :</td>
                    <td>{registrationDetails.gender}</td>
                    <td className="bold">Course : </td>
                    <td>{personalInfo[currentPage].course}</td>
                  </tr>
                  <tr>
                    <td className="bold">Emergency Contact No :</td>
                    <td>{personalInfo[currentPage].emergency_contact}</td>
                    <td className="bold">Guardian Name :</td>
                    <td>{personalInfo[currentPage].guardian_name}</td>
                    <td className="bold">Guardian Relation : </td>
                    <td>{personalInfo[currentPage].guardian_relation}</td>
                  </tr>
                  <tr>
                    <td className="bold">Guardian Contact No :</td>
                    <td colSpan="5">{personalInfo[currentPage].guardian_contact_no}</td>
                  </tr>
                  <tr>
                    <td colSpan="6" className="bold blue">
                      Addresses
                    </td>
                  </tr>
                  <tr>
                    <td className="bold">Correspondense Address :</td>
                    <td colSpan="2">{personalInfo[currentPage].correspondense_address}</td>
                    <td className="bold">Correspondense State :</td>
                    <td colSpan="2">{personalInfo[currentPage].correspondense_state}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Navigasi Pagination */}
            <div className="pagination">
              <button onClick={handlePrevious} disabled={currentPage === 0}>
                Previous
              </button>
              <button onClick={handleNext} disabled={currentPage === bookingDetails.length - 1}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
