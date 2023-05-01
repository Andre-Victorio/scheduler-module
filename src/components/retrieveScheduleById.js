import {useState, useEffect, useRef, useCallback} from "react";
function RetrieveScheduleById(id) {
  const [schedule, setSchedule] = useState([]);
  const dataFetchedRef = useRef(false);
  const fetchSchedule = useCallback(async () => {
    var response = await fetch("/api/retrieveScheduleById", {
      method: "POST",
      body: JSON.stringify({scheduleId: id}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var data = await response.json();
    setSchedule(data["data"]);
    console.log(data);
  }, [id]);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchSchedule();
  }, [fetchSchedule]);
  return schedule;
}

export default RetrieveScheduleById;
