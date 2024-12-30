export default function Students() {
  return (
    <div className="container">
      <div className="content">
        <h2>Students&apos; Data</h2>

        <div className="box">
                    <div className="boxheader">
                        <p>ALL STUDENTS&apos; DATA</p>
                    </div>
                    <div className="boxinfo">
                        <table border="1" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Registration No</th>
                                    <th>Full Name</th>
                                    <th>Gender</th>
                                    <th>Contact No</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* looping */}
                                <tr>
                                    <td id="center"></td>
                                    <td id="center"></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
      </div>
    </div>
  );
}
