export default function Rooms() {
  return (
    <div className="container">
      <div className="content">
        <h2>Room Update</h2>
        <div className="container">
          <div className="box">
            <div className="boxheader">
              <p>ALL ROOMS</p>
            </div>
            <div className="boxinfo">
              <table border="1" cellSpacing="0">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Room No</th>
                    <th>Seater</th>
                    <th>Fee Per Month</th>
                    <th>Seater Remaining</th>
                    <th colSpan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* looping */}
                  <tr>
                    <td id="center"></td>
                    <td id="center"></td>
                    <td id="center"></td>
                    <td id="center"></td>
                    <td id="center"></td>
                    <td id="center">
                      <a href="roominfoupdate.php?room_no=<?php echo $row['room_no']; ?>">
                        <button>Update</button>
                      </a>
                    </td>
                    <td id="center">
                      <form method="post" onSubmit="return confirm('Are you sure you want to delete this room?');">
                        <input type="hidden" name="room_no" value=""></input>
                        <button type="submit" name="delete">
                          Delete
                        </button>
                      </form>
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
