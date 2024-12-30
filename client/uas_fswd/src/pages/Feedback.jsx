import '../style/Feedback.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Feedback() {
  const [isAdmin] = useState(true);

  return (
    <div className="container">
      <div className="content">
        {isAdmin ? <h2>Registered Complaints</h2> : <h2>My Complaints</h2>}

        {isAdmin ? (
          <div className="box-feedback">
          <div className="boxheader">
              <p>COMPLAINT DETAILS</p>
          </div>
          <div className="boxinfo">
              <table border="1" cellSpacing="0">
                  <thead>
                      <tr>
                          <th>No</th>
                          <th>Full name</th>
                          <th>Room No</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                    {/* looping */}
                      <tr>
                          <td id="center"></td>
                          <td></td>
                          <td id="center"></td>
                          <td id="center"><a href=""><button>Action</button></a></td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
        ) : (
          <div className="box-feedback">
          <form className="form-feedback" method="post">
            <div className="fillform-feedback">
              <div className="flex">
                <div className="flexforp">
                  <p>Accessibility to Warden: </p>
                </div>
                <input type="radio" id="Warden_Excellent" name="accessibility_to_warden" value="Excellent"></input>
                <label htmlFor="Warden_Excellent">Excellent</label>
                <input type="radio" id="Warden_Very_Good" name="accessibility_to_warden" value="Very Good"></input>
                <label htmlFor="Warden_Very_Good">Very Good</label>
                <input type="radio" id="Warden_Good" name="accessibility_to_warden" value="Good"></input>
                <label htmlFor="Warden_Good">Good</label>
                <input type="radio" id="Warden_Average" name="accessibility_to_warden" value="Average"></input>
                <label htmlFor="Warden_Average">Average</label>
                <input type="radio" id="Warden_Below_Average" name="accessibility_to_warden" value="Below Average"></input>
                <label htmlFor="Warden_Below_Average">Below Average</label>
              </div>

              <div className="flex">
                <div className="flexforp">
                  <p>Accessibility to Hostel Committee Members: </p>
                </div>
                <input type="radio" id="Hostel_Committee_Members_Excellent" name="accessibility_to_hostel_committee_members" value="Excellent"></input>
                <label htmlFor="Hostel_Committee_Members_Excellent">Excellent</label>
                <input type="radio" id="Hostel_Committee_Members_Very_Good" name="accessibility_to_hostel_committee_members" value="Very Good"></input>
                <label htmlFor="Hostel_Committee_Members_Very_Good">Very Good</label>
                <input type="radio" id="Hostel_Committee_Members_Good" name="accessibility_to_hostel_committee_members" value="Good"></input>
                <label htmlFor="Hostel_Committee_Members_Good">Good</label>
                <input type="radio" id="Hostel_Committee_Members_Average" name="accessibility_to_hostel_committee_members" value="Average"></input>
                <label htmlFor="Hostel_Committee_Members_Average">Average</label>
                <input type="radio" id="Hostel_Committee_Members_Below_Average" name="accessibility_to_hostel_committee_members" value="Below Average"></input>
                <label htmlFor="Hostel_Committee_Members_Below_Average">Below Average</label>
              </div>

              <div className="flex">
                <div className="flexforp">
                  <p>Redressal of Problems: </p>
                </div>
                <input type="radio" id="Redressal_of_Problems_Excellent" name="redressal_of_problems" value="Excellent"></input>
                <label htmlFor="Redressal_of_Problems_Excellent">Excellent</label>
                <input type="radio" id="Redressal_of_Problems_Very_Good" name="redressal_of_problems" value="Very Good"></input>
                <label htmlFor="Redressal_of_Problems_Very_Good">Very Good</label>
                <input type="radio" id="Redressal_of_Problems_Good" name="redressal_of_problems" value="Good"></input>
                <label htmlFor="Redressal_of_Problems_Good">Good</label>
                <input type="radio" id="Redressal_of_Problems_Average" name="redressal_of_problems" value="Average"></input>
                <label htmlFor="Redressal_of_Problems_Average">Average</label>
                <input type="radio" id="Redressal_of_Problems_Below_Average" name="redressal_of_problems" value="Below Average"></input>
                <label htmlFor="Redressal_of_Problems_Below_Average">Below Average</label>
              </div>

              <div className="flex">
                <div className="flexforp">
                  <p>Room: </p>
                </div>
                <input type="radio" id="Room_Excellent" name="room" value="Excellent"></input>
                <label htmlFor="Room_Excellent">Excellent</label>
                <input type="radio" id="Room_Very_Good" name="room" value="Very Good"></input>
                <label htmlFor="Room_Very_Good">Very Good</label>
                <input type="radio" id="Room_Good" name="room" value="Good"></input>
                <label htmlFor="Room_Good">Good</label>
                <input type="radio" id="Room_Average" name="room" value="Average"></input>
                <label htmlFor="Room_Average">Average</label>
                <input type="radio" id="Room_Below_Average" name="room" value="Below Average"></input>
                <label htmlFor="Room_Below_Average">Below Average</label>
              </div>

              <div className="flex">
                <div className="flexforp">
                  <p>Mess: </p>
                </div>
                <input type="radio" id="Mess_Excellent" name="mess" value="Excellent"></input>
                <label htmlFor="Mess_Excellent">Excellent</label>
                <input type="radio" id="Mess_Very_Good" name="mess" value="Very Good"></input>
                <label htmlFor="Mess_Very_Good">Very Good</label>
                <input type="radio" id="Mess_Good" name="mess" value="Good"></input>
                <label htmlFor="Mess_Good">Good</label>
                <input type="radio" id="Mess_Average" name="mess" value="Average"></input>
                <label htmlFor="Mess_Average">Average</label>
                <input type="radio" id="Mess_Below_Average" name="mess" value="Below Average"></input>
                <label htmlFor="Mess_Below_Average">Below Average</label>
              </div>

              <div className="flex">
                <div className="flexforp">
                  <p>Hostel Surroundings (eg Mall etc.): </p>
                </div>
                <input type="radio" id="Hostel_Surroundings_Excellent" name="hostel_surroundings" value="Excellent"></input>
                <label htmlFor="Hostel_Surroundings_Excellent">Excellent</label>
                <input type="radio" id="Hostel_Surroundings_Very_Good" name="hostel_surroundings" value="Very Good"></input>
                <label htmlFor="Hostel_Surroundings_Very_Good">Very Good</label>
                <input type="radio" id="Hostel_Surroundings_Good" name="hostel_surroundings" value="Good"></input>
                <label htmlFor="Hostel_Surroundings_Good">Good</label>
                <input type="radio" id="Hostel_Surroundings_Average" name="hostel_surroundings" value="Average"></input>
                <label htmlFor="Hostel_Surroundings_Average">Average</label>
                <input type="radio" id="Hostel_Surroundings_Below_Average" name="hostel_surroundings" value="Below Average"></input>
                <label htmlFor="Hostel_Surroundings_Below_Average">Below Average</label>
              </div>

              <div className="flex">
                <div className="flexforp">
                  <p>Overall Rating: </p>
                </div>
                <input type="radio" id="Overall_Rating_Excellent" name="overall_rating" value="Excellent"></input>
                <label htmlFor="Overall_Rating_Excellent">Excellent</label>
                <input type="radio" id="Overall_Rating_Very_Good" name="overall_rating" value="Very Good"></input>
                <label htmlFor="Overall_Rating_Very_Good">Very Good</label>
                <input type="radio" id="Overall_Rating_Good" name="overall_rating" value="Good"></input>
                <label htmlFor="Overall_Rating_Good">Good</label>
                <input type="radio" id="Overall_Rating_Average" name="overall_rating" value="Average"></input>
                <label htmlFor="Overall_Rating_Average">Average</label>
                <input type="radio" id="Overall_Rating_Below_Average" name="overall_rating" value="Below Average"></input>
                <label htmlFor="Overall_Rating_Below_Average">Below Average</label>
              </div>

              <div className="flex">
                <div className="flexforp">
                  <p>Feedback Message (if any): </p>
                </div>
                <input type="text" name="feedback_message" className="input-type"></input>
              </div>

              <div className="buttonform-feedback">
                <button type="reset">
                  <Link to="/">Cancel</Link>
                </button>
                <button type="submit" id="submit">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
        )}

        
      </div>
    </div>
  );
}
