export default function AddRoom() {
  return (
    <div className="container">
      <div className="content">
        <h2>Add Room</h2>

        <div className="container">
          <div className="box">
            <form className="form" method="post">
              <div className="fillform">
                <p>
                  Select seater :
                  <select name="select_seater" id="select_seater" required>
                    <option value="1" name="1 Seater">
                      1 Seater
                    </option>
                    <option value="2" name="2 Seater">
                      2 Seater
                    </option>
                    <option value="3" name="3 Seater">
                      3 Seater
                    </option>
                    <option value="4" name="4 Seater">
                      4 Seater
                    </option>
                    <option value="5" name="5 Seater">
                      5 Seater
                    </option>
                  </select>
                </p>
                <p>
                  Room No : <input type="text" name="room_no" id="room_no" required></input>
                </p>
                <p>
                  Fee (per student) : <input type="text" name="fees_per_month" id="fees_per_month" required></input>
                </p>
                <div className="buttonform">
                  <button type="reset">
                    <a href="">Cancel</a>
                  </button>
                  <button type="submit" id="submit">
                    Add Room
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
