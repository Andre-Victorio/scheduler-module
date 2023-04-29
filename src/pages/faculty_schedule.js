import "./styles.css";
import AddSchedModal from "../components/AddSchedModal";
import DisplaySchedules from "../components/DisplaySchedules";
import RetrieveSchedules from "../components/retrieveSchedule";
function FacultySched() {
  var scheduleCollection = RetrieveSchedules();
  return (
    <div className="page">
      <section>
        {/*PAGE HEADING*/}
        <div className="container">
          <h1>My Schedule</h1>

          {/*ADDS NEW SCHEDULE CARD TO DISPLAY*/}
          <div className="add-sched">
            <AddSchedModal />
          </div>

          {/*SCHEDULE CARDS - DISPLAY AVAILABLE SCHEDULE*/}
        </div>
        <DisplaySchedules
          scheduleCollection={scheduleCollection}
          userType={sessionStorage.getItem("userType")}
        />
      </section>
    </div>
  );
}

export default FacultySched;
