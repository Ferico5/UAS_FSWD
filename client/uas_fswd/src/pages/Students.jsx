import { useEffect, useState } from "react";
import axios from "axios";

export default function Students() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        const fetchStudents = async() => {
            try {
                const response = await axios.get('http://localhost:5000/users')
                setStudents(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchStudents()
    }, [])

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
                  <th>Full Name</th>
                  <th>Gender</th>
                  <th>Contact No</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                <tr key={student.id_user}>
                  <td id="center">{index+1}</td>
                  <td id="center">{student.full_name}</td>
                  <td id="center">{student.gender}</td>
                  <td id="center">{student.contact_no}</td>
                  <td id="center">{student.email}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
