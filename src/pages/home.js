import React from "react";
import "./styles.css";
import HomeModal from "../components/HomeModal";
import RetrieveAppointments from "../components/retrieveAppointments";
import {parseDate, parseTime, capitalizeWords} from "../components/utility";
function Home() {
  const appointments = RetrieveAppointments("student");
  //cards - Dummy data. Represents details for upcoming meetings.
  // const [cards] = useState([
  //   {
  //     id: 1,
  //     date: "MARCH 1",
  //     person_of_interest: "BANDALAN, CHRISTINE DALMAN",
  //     time: "4:00PM",
  //     location: "DCISM OFFICE",
  //   },
  //   {
  //     id: 2,
  //     date: "MARCH 1",
  //     person_of_interest: "BANDALAN, CHRISTINE DALMAN",
  //     time: "4:00PM",
  //     location: "DCISM OFFICE",
  //   },
  //   {
  //     id: 3,
  //     date: "MARCH 1",
  //     person_of_interest: "BANDALAN, CHRISTINE DALMAN",
  //     time: "4:00PM",
  //     location: "DCISM OFFICE",
  //   },
  // ]);
  return (
    <div className="page">
      <section>
        {/* PAGE TITLE */}
        <div className="container">
          <h1>Upcoming Meetings</h1>
        </div>

        {/* cards - DISPLAY INFORMATION OF UPCOMING MEETINGS  */}
        <div className="cards">
          {appointments.approved.map((key, value) => (
            <div className="card">
              <h3>
                <b>{parseDate(key.approvedDataWrapper.scheduleData.Date)}</b>
              </h3>
              <h5>
                {capitalizeWords(key.approvedDataWrapper.facultyData.Name)}
              </h5>
              <h6>{key.approvedDataWrapper.scheduleData.Location}</h6>
              <h6>
                {parseTime(key.approvedDataWrapper.scheduleData.StartTime)}
              </h6>
              <HomeModal className="modal" data={key.approvedDataWrapper} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
