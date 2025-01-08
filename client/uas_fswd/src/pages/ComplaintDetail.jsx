import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

export default function ComplaintDetail() {
  const { user } = useAuth();
  const { register_complaint_id } = useParams();
  const isAdmin = user && user.role === 'admin';
  const [complaintDetail, setComplaintDetail] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('In Process');
  const [remark, setRemark] = useState('');
  const [dateRemark, setDateRemark] = useState('');
  const [submittedRemark, setSubmittedRemark] = useState('');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    return formattedDate;
  };

  useEffect(() => {
    const fetchComplaintDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/complaint_detail/${register_complaint_id}`);
        setComplaintDetail(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    const fetchRemarkComplaint = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/remark_complaint/${register_complaint_id}`);
        setRemark(response.data.complaint_remark);

        const formattedDate = formatDate(response.data.updatedAt);
        setDateRemark(formattedDate);
      } catch (error) {
        console.error('Error fetching remark:', error.message);
      }
    };

    fetchComplaintDetail();
    fetchRemarkComplaint();
  }, [register_complaint_id]);

  const handleUpdateClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async () => {
    try {
      const currentDate = new Date();
      const formattedDate = formatDate(currentDate);

      if (!remark) {
        const addRemarkComplaint = {
          complaint_remark: submittedRemark,
          register_complaint_id: register_complaint_id,
        };

        await axios.post(`http://localhost:5000/remark_complaint/${register_complaint_id}`, addRemarkComplaint);
        setRemark(submittedRemark);

        const updateStatus = {
          register_complaint_id: register_complaint_id,
          complaint_status: status,
        };

        await axios.put(`http://localhost:5000/update_complaint_status/${register_complaint_id}`, updateStatus);

        const updatedComplaintDetail = {
          ...complaintDetail,
          complaint_status: status,
          complaint_remark: submittedRemark,
          updatedAt: formattedDate,
        };

        setComplaintDetail(updatedComplaintDetail);
        setDateRemark(formattedDate);
        setShowModal(false);
      } else {
        if (remark !== submittedRemark || status !== complaintDetail.complaint_status) {
          const updateComplaint = {
            complaint_remark: submittedRemark,
            complaint_status: status,
          };

          await axios.put(`http://localhost:5000/remark_complaint/${register_complaint_id}`, updateComplaint);
          setRemark(submittedRemark);

          const updateStatus = {
            register_complaint_id: register_complaint_id,
            complaint_status: status,
          };

          await axios.put(`http://localhost:5000/update_complaint_status/${register_complaint_id}`, updateStatus);

          const updatedComplaintDetail = {
            ...complaintDetail,
            complaint_status: status,
            complaint_remark: submittedRemark,
            updatedAt: formattedDate,
          };

          setComplaintDetail(updatedComplaintDetail);
          setDateRemark(formattedDate);
          setShowModal(false);
        } else {
          setShowModal(false);
        }
      }
    } catch (error) {
      console.error('Error updating complaint:', error.message);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h2>Complaint Registration</h2>

        <div className="boxheader">
          <p>COMPLAINT DETAILS</p>
        </div>

        <div className="boxinfo">
          <table border="1" cellSpacing="0">
            <thead>
              <tr>
                <th colSpan="4" className="blue">
                  Complaint Related Info
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bold">Complaint Number :</td>
                <td>{complaintDetail?.register_complaint_id}</td>
                <td className="bold">Registration Date :</td>
                <td>{complaintDetail?.createdAt && formatDate(complaintDetail.createdAt)}</td>
              </tr>
              <tr>
                <td className="bold">Complaint Type :</td>
                <td>{complaintDetail?.complaint_type}</td>
                <td className="bold">Complaint Status :</td>
                <td colSpan="2">{complaintDetail?.complaint_status}</td>
              </tr>
              <tr>
                <td className="bold">Complaint Details :</td>
                <td colSpan="3">{complaintDetail?.explain_complaint}</td>
              </tr>
              <tr>
                <td colSpan="4" className="blue bold">
                  Complaint History
                </td>
              </tr>
              <tr>
                <td className="bold">Complaint Remark :</td>
                <td colSpan="3">{remark}</td>
              </tr>
              <tr>
                <td className="bold">Posting Date :</td>
                <td colSpan="3">{dateRemark}</td>
              </tr>
              {isAdmin ? (
                <tr>
                  <td colSpan="4">
                    <button type="submit" id="update" onClick={handleUpdateClick}>
                      Update
                    </button>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Take Action</h3>
              <div className="modal-body">
                <div>
                  <label>Select Status: </label>
                  <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="In Process">In Process</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
                <div>
                  <label>Remark or Text: </label>
                  <textarea value={submittedRemark} onChange={(e) => setSubmittedRemark(e.target.value)} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" onClick={handleCloseModal}>
                  Close
                </button>
                <button type="button" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
