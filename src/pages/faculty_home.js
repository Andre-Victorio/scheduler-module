import React from "react";
import {useState} from "react";
import "./styles.css";
import FacultyHomeModal from "../components/FacultyHomeModal";
import RetrieveAppointments from "../components/retrieveAppointments";
import {parseDate, parseTime, capitalizeWords} from "../components/utility";
//FACULTY HOME - DISPLAYS UPCOMING MEETINGS WITH STUDENTS, MEETINGS WITH 'APPROVED' STATUS
function FacultyHome() {
  const appointments = RetrieveAppointments("faculty");
  //Dummy data - represents upcoming meetings with students
  // const [cards] = useState([
  //   {
  //     id: 1,
  //     date: 'MARCH 1',
  //     person_of_interest: 'STUDENT NAME',
  //     time: '4:00PM',
  //     location: 'DCISM OFFICE',
  //   },
  //   {
  //     id: 2,
  //     date: 'MARCH 1',
  //     person_of_interest: 'STUDENT NAME',
  //     time: '4:00PM',
  //     location: 'DCISM OFFICE',
  //   },
  //   {
  //     id: 3,
  //     date: 'MARCH 1',
  //     person_of_interest: 'STUDENT NAME',
  //     time: '4:00PM',
  //     location: 'DCISM OFFICE',
  //   },

  // ])
  return (
    <div className="page">
      <section>
        {/*PAGE HEADING*/}
        <div className="container">
          <h1>Upcoming Meetings</h1>
        </div>

        {/* cards - DISPLAY INFORMATION OF UPCOMING MEETINGS  */}
        <div className="cards">
          {
            //   cards.map((card,i) => (

            // <div key={i} className="card">
            //   <h3><b>{card.date}</b></h3>
            //   <h5>{card.person_of_interest}</h5>
            //   <h6>{card.location}</h6>
            //   <h6>{card.time}</h6>

            //   {/* FacultyHomeModal - DISPLAYS DETAILS OF UPCOMING MEETINGS  */}
            //   <FacultyHomeModal />
            // </div>
            //  ))
            appointments.approved.map((key, value) => (
              <div className="card">
                <h3>
                  <b>{parseDate(key.approvedDataWrapper.scheduleData.Date)}</b>
                </h3>
                <h5>
                  {capitalizeWords(key.approvedDataWrapper.studentData.Name)}
                </h5>
                <h6>{key.approvedDataWrapper.scheduleData.Location}</h6>
                <h6>
                  {parseTime(key.approvedDataWrapper.scheduleData.StartTime)}
                </h6>
                <FacultyHomeModal
                  className="modal"
                  data={key.approvedDataWrapper}
                />
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default FacultyHome;
