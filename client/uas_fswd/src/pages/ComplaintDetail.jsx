import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ComplaintDetail() {
  const { register_complaint_id } = useParams();
  const [complaintDetail, setComplaintDetail] = useState(null);

  useEffect(() => {
    const fetchComplaintDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/complaint_detail/${register_complaint_id}`);
        setComplaintDetail(response.data)
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchComplaintDetail()
  }, [register_complaint_id]);

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
                <td>{complaintDetail.register_complaint_id}</td>
                <td className="bold">Registration Date :</td>
                <td>{complaintDetail.createdAt}</td>
              </tr>
              <tr>
                <td className="bold">Complaint Type :</td>
                <td>{complaintDetail.complaint_type}</td>
                <td className="bold">Complaint Status :</td>
                <td colSpan="2">{complaintDetail.complaint_status}</td>
              </tr>
              <tr>
                <td className="bold">Complaint Details :</td>
                <td colSpan="3">{complaintDetail.explain_complaint}</td>
              </tr>
              <tr>
                <td colSpan="4" className="blue bold center">
                  Complaint History
                </td>
              </tr>
              <tr>
                <td className="bold">Complaint Remark :</td>
                <td colSpan="3"></td>
              </tr>
              <tr>
                <td className="bold">Posting Date :</td>
                <td colSpan="3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
