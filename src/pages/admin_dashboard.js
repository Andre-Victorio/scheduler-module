import React from "react";
import "./styles.css";
import Collapsible from "react-collapsible";
import ApproveMeetingModal from "../components/ApproveMeetinModal";
import CancelMeetingModal from "../components/CancelMeetingModal";
import RetrieveAppointments from "../components/retrieveAppointments";
import {parseDate, parseTime, capitalizeWords} from "../components/utility";
//DISPLAY ALL MEETINGS WITH STATUS 'PENDING'
function AdminDashboard() {
  const appointments = RetrieveAppointments("admin");
  return (
    <div className="admin_page">
      <section>
        {/*PAGE TITLE*/}
        <div className="container">
          <h1>Dashboard</h1>
        </div>

        {/*CARDS - CONTAIN DETAILS OF MEETING*/}
        {appointments.pending.map(function (key, value) {
          return (
            <div className="cards">
              <div className="tab-card">
                <h3>
                  <b>{parseDate(key.pendingDataWrapper.scheduleData.Date)}</b>
                </h3>
                {/*DATE*/}
                <h5>
                  {capitalizeWords(key.pendingDataWrapper.facultyData.Name)}
                </h5>
                <h5>
                  {capitalizeWords(key.pendingDataWrapper.studentData.Name)}
                </h5>
                <h5>
                  {parseTime(key.pendingDataWrapper.scheduleData.StartTime)}
                </h5>
                <h4 className="status_pending">PENDING</h4>
                {/*COLLAPSIBLE CONTENT - DOESN'T DISPLAY PRIORITY NUMBER*/}
                <div className="collapsible-container">
                  <Collapsible trigger="View Details">
                    <div className="collapsible-content">
                      <div className="details">
                        <h5>
                          <b>Location</b>
                        </h5>
                        <p>{key.pendingDataWrapper.scheduleData.Location}</p>
                      </div>

                      <div className="details">
                        <h5>
                          <b>Description</b>
                        </h5>
                        <p>{key.pendingDataWrapper.data.Description}</p>
                      </div>

                      <div className="actions">
                        {/*APPROVE MEETING - CHANGE STATUS OF MEETING TO APPROVED AND HIDE FROM DASHBOARD*/}
                        <ApproveMeetingModal
                          appointmentId={
                            key.pendingDataWrapper.data.AppointmentId
                          }
                        />
                        {/*CANCEL MEETING BUTTON*/}
                        <CancelMeetingModal
                          appointmentId={
                            key.pendingDataWrapper.data.AppointmentId
                          }
                        />
                      </div>
                    </div>
                  </Collapsible>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default AdminDashboard;
