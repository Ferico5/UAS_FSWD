import '../style/RoomDetails.css';

export default function RoomDetails() {
  return (
    <div className="container">
      <div className="content">
        <h2>Room Details</h2>

        <div>
          <div>
            <div className='boxheader'>
              <p>ALL ROOM DETAILS</p>
            </div>
            <div className='boxinfo'>
              <table border="1" cellSpacing="0">
                <thead>
                  <tr>
                    <th colSpan="6" className='blue bigger'>Room Related Info</th>
                  </tr>
                </thead>
                <tbody>
                  {/* looping */}
                  <tr>
                    <td className='bold'>Registration Number :</td>
                    <td>1111</td>
                    <td className='bold'>Apply Date :</td>
                    <td colSpan="3">121212</td>
                  </tr>
                  <tr>
                    <td className='bold'>Room no :</td>
                    <td>111</td>
                    <td className='bold'>Seater :</td>
                    <td>3</td>
                    <td className='bold'>Fees PM : </td>
                    <td>123121313</td>
                  </tr>
                  <tr>
                    <td className='bold'>Food Status :</td>
                    <td>121212</td>
                    <td className='bold'>Stay From :</td>
                    <td>12312</td>
                    <td className='bold'>Duration : </td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td className='bold'>Hostel Fee :</td>
                    <td>111111</td>
                    <td className='bold'>Food Fee :</td>
                    <td colSpan="3" id="food_fee">
                      23423423
                    </td>
                  </tr>
                  <tr>
                    <td className='bold'>Total Fee :</td>
                    <td colSpan="5" id="total_fee">
                      234234234
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="6" className='red'>Personal Info</td>
                  </tr>
                  <tr>
                    <td className='bold'>Registration No :</td>
                    <td>123123</td>
                    <td className='bold'>Full Name :</td>
                    <td>asfdasfds</td>
                    <td className='bold'>Email : </td>
                    <td>asdfsd</td>
                  </tr>
                  <tr>
                    <td className='bold'>Contact No :</td>
                    <td>234234234</td>
                    <td className='bold'>Gender :</td>
                    <td>afs</td>
                    <td className='bold'>Course : </td>
                    <td>234dsf</td>
                  </tr>
                  <tr>
                    <td className='bold'>Emergency Contact No :</td>
                    <td>234213</td>
                    <td className='bold'>Guardian Name :</td>
                    <td>afggwer</td>
                    <td className='bold'>Guardian Relation : </td>
                    <td>awetg</td>
                  </tr>
                  <tr>
                    <td className='bold'>Guardian Contact No :</td>
                    <td colSpan="5">adfeceeef</td>
                  </tr>
                  <tr>
                    <td colSpan="6" className='bold blue'>Addresses</td>
                  </tr>
                  <tr>
                    <td className='bold'>Correspondense Address :</td>
                    <td colSpan="2">sdfsdf</td>
                    <td className='bold'>Correspondense State :</td>
                    <td colSpan="2">sdfsefd</td>
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
