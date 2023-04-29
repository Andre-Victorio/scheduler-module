import React from "react";
import "./styles.css";
import {Link, useLocation} from "react-router-dom";
import RetrieveSchedules from "../components/retrieveSchedule";
import DisplaySchedules from "../components/DisplaySchedules";
function Available_sched() {
  const location = useLocation();
  const propsData = location.state;
  if (propsData !== null) {
    const facultyId = propsData.accountId;
    sessionStorage.setItem("facultyAvailableSchedId", facultyId);
  }

  const schedules = RetrieveSchedules(
    sessionStorage.getItem("facultyAvailableSchedId")
  );
  console.log(schedules);
  return (
    <div className="page">
      <section>
        {/*PAGE HEADING*/}
        <div className="container">
          <h1>Available Schedule</h1>
        </div>

        <DisplaySchedules
          scheduleCollection={schedules}
          userType={sessionStorage.getItem("userType")}
        />

        {/*RETURNS TO CREATE MEETING PAGE*/}
        <div className="return">
          <Link to="/create_meeting">Return</Link>
        </div>
      </section>
    </div>
  );
}

export default Available_sched;
