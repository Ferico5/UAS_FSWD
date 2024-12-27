import '../style/ComplaintRegistration.css';
import { Link } from 'react-router-dom';

export default function ComplaintRegistration() {
  return (
    <div className="container">
      <div className="content">
        <h2>Complaint Registration</h2>

        <div>
          <div>
            <form className="form-complaint" method="post">
              <div className="fillform-complaint">
                <p>
                  Complaint Type:
                  <select name="complaint_type" id="complaint_type" required>
                    <option value="Food related" name="food_related">
                      Food Related
                    </option>
                    <option value="Room related" name="room_related">
                      Room Related
                    </option>
                    <option value="Fee related" name="fee_related">
                      Fee Related
                    </option>
                    <option value="Electrical" name="electrical">
                      Electrical
                    </option>
                    <option value="Plumbing" name="plumbing">
                      Plumbing
                    </option>
                    <option value="Discipline" name="discipline">
                      Discipline
                    </option>
                    <option value="Other" name="other">
                      Other
                    </option>
                  </select>
                </p>
                <p>
                  Explain the Complaint: <input type="textarea" name="explain_complaint" id="explain_complaint" required></input>
                </p>
                <div className="buttonform">
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
        </div>
      </div>
    </div>
  );
}
