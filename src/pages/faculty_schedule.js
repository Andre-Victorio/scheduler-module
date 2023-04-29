import React, {useState, useEffect, useRef, useCallback} from "react";
import "./styles.css";
import Collapsible from "react-collapsible";
import AddSchedModal from "../components/AddSchedModal";
import RemoveSched from "../components/RemoveSched";
import RetrieveSchedules from "../components/retrieveSchedule";
import {parseSchedules} from "../components/utility";
import {parseTime} from "../components/utility";
function FacultySched() {
  const [scheduleCollection, setScheduleCollection] = useState([]);
  const dataFetchedRef = useRef(false);

  if (sessionStorage.getItem("accountId") !== null) {
    var schedules = RetrieveSchedules(
      sessionStorage.getItem("userType"),
      sessionStorage.getItem("accountId")
    );
    console.log(schedules);
    // var parsedSchedules = parseSchedules(schedules);
  }
  const fetchSchedule = useCallback(async () => {
    if (sessionStorage.getItem("accountId") !== null) {
      var response = await fetch("/api/retrieveSchedules", {
        method: "POST",
        body: JSON.stringify({
          userType: sessionStorage.getItem("userType"),
          accountId: sessionStorage.getItem("accountId"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    var data = await response.json();
    // console.log(data["data"]);
    var parsedSchedules = parseSchedules(data["data"]);
    var array = Array.from(parsedSchedules, ([name, value]) => ({name, value}));
    setScheduleCollection(array);
    // console.log("Parsed Date:" + new Date(data["data"][0].Date));
  }, []);

  // const groupSchedule = (parsedSchedules) => {
  //   var scheduleArray = [];
  //   for (let [key, value] of parsedSchedules.entries()) {
  //     const mainDiv = document.createElement("div");
  //     for (let [key2, value2] of value.entries()) {
  //       console.log(key2);
  //       groupTime(value2, mainDiv);
  //     }

  //     scheduleArray.push(
  //       <div className="cards">
  //         <div className="avail-sched-card">
  //           <h2>
  //             <b>{key}</b>
  //           </h2>
  //           <div className="collapsible-container">
  //             <Collapsible trigger="View Schedules">
  //               <div className="collapsible-content">{mainDiv}</div>
  //             </Collapsible>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  //   console.log(scheduleArray);
  //   return scheduleArray;
  // };

  function groupTime(value2, mainDiv) {
    const details = document.createElement("div");
    details.setAttribute("className", "details");
    const actions = document.createElement("div");
    actions.setAttribute("className", "actions");
    const h4 = document.createElement("div");
    const b = document.createElement("b");
    // for (let [key3, value3] of value2.entries()) {
    //   console.log(parseTime(value3));
    // }
    // b.innerHTML = value2;
    // console.log(value2.startTime);
    b.innerHTML = parseTime(value2.startTime) + "-" + parseTime(value2.endTime);
    h4.appendChild(b);
    details.appendChild(h4);
    actions.innerHTML = <RemoveSched />;
    mainDiv.appendChild(details);
    mainDiv.appendChild(actions);
  }
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchSchedule();
  }, [fetchSchedule]);
  console.log(scheduleCollection);
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
        {scheduleCollection.map(function (key, value) {
          return (
            <div className="cards" key={value}>
              <div className="avail-sched-card">
                <h2>
                  <b>{key.name}</b>
                </h2>
                <div className="collapsible-container">
                  <Collapsible trigger="View Schedules">
                    {scheduleCollection[value].value.map(function (
                      key1,
                      value2
                    ) {
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
                              <RemoveSched />
                            </div>
                          </div>

                          {/* <div className="details">
                            <h4>
                              <b>12:00-1:30PM</b>
                            </h4>
                            <div className="actions">
                              <RemoveSched />
                            </div>
                          </div> */}
                        </div>
                      );
                    })}
                  </Collapsible>
                </div>
              </div>
            </div>
          );
        })}

        {/* key.map((key2, value2) => (
            <div className="cards" key={value}>
              <div className="avail-sched-card">
                <h2>
                  <b>{console.log(key2)}</b>
                </h2>
                <div className="collapsible-container">
                  <Collapsible trigger="View Schedules">
                    <div className="collapsible-content">
                      <div className="details">
                        <h4>
                          <b>9:00-10:30AM</b>
                        </h4>
                        <div className="actions">
                          <RemoveSched />
                        </div>
                      </div>

                      <div className="details">
                        <h4>
                          <b>12:00-1:30PM</b>
                        </h4>
                        <div className="actions">
                          <RemoveSched />
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                </div>
              </div>
            </div>
          )) */}
        {/* {scheduleCollection} */}
      </section>
    </div>
  );
}

export default FacultySched;
