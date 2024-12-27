import '../style/RegisteredComplaints.css';
import '../style/RoomDetails.css'

export default function RegisteredComplaints() {
  return (
    <div className="container">
      <div className="content">
        <h2>Registered Complaints</h2>

        <div>
          <div className="box">
            <div className="boxheader">
              <p>COMPLAINT DETAILS</p>
            </div>
            <div className="boxinfo">
              <table border="1" cellSpacing="0">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Room No</th>
                    <th>Complaint Type</th>
                    <th>Complaint Status</th>
                    <th>Complaint Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id="center">1</td>
                    <td id="center">101</td>
                    <td>aaaaaaaaaaa</td>
                    <td>bbbbbbbbb</td>
                    <td>cccccccccccc</td>
                    <td id="center">
                      <a href="">
                        <button>Action</button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
