import Collapsible from "react-collapsible";
import {parseTime} from "./utility";
import RemoveSched from "./RemoveSched";
import SelectSchedModal from "./SelectScheduleModal";
function DisplaySchedules(props) {
  var scheduleCollection = props.scheduleCollection;
  console.log(scheduleCollection);
  return scheduleCollection.map(function (key, value) {
    return (
      <div className="cards" key={value}>
        <div className="avail-sched-card">
          <h2>
            <b>{key.name}</b>
          </h2>
          <div className="collapsible-container">
            <Collapsible trigger="View Schedules">
              {scheduleCollection[value].value.map(function (key1, value2) {
                var toggle =
                  props.userType === "faculty" ? (
                    <RemoveSched scheduleId={key1.scheduleId} />
                  ) : (
                    <SelectSchedModal />
                  );
                return (
                  <div className="collapsible-content">
                    <div className="details">
                      <h3>
                        <b>
                          {parseTime(key1.startTime) +
                            " - " +
                            parseTime(key1.endTime)}
                        </b>
                      </h3>
                      <h3>
                        <b>{key1.location}</b>
                      </h3>

                      <div className="actions">
                        {/* <RemoveSched /> */}
                        {toggle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Collapsible>
          </div>
        </div>
      </div>
    );
  });
}

export default DisplaySchedules;
