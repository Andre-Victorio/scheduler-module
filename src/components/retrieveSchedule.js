import {useState, useEffect, useRef, useCallback} from "react";
import {parseSchedules} from "../components/utility";

function RetrieveSchedules() {
  const [scheduleCollection, setScheduleCollection] = useState([]);
  const dataFetchedRef = useRef(false);
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
    var parsedSchedules = parseSchedules(data["data"]);
    var array = Array.from(parsedSchedules, ([name, value]) => ({name, value}));
    setScheduleCollection(array);
  }, []);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchSchedule();
  }, [fetchSchedule]);
  return scheduleCollection;
}

export default RetrieveSchedules;
