import {useState, useEffect, useRef, useCallback} from "react";
function RetrieveSchedules(userType, accountId) {
  const [schedules, setSchedules] = useState([]);
  const dataFetchedRef = useRef(false);
  const fetchSchedule = useCallback(async () => {
    var response = await fetch("/api/retrieveSchedules", {
      method: "POST",
      body: JSON.stringify({userType: userType, accountId: accountId}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var data = await response.json();
    setSchedules(data["data"]);
    // console.log("Parsed Date:" + new Date(data["data"][0].Date));
  }, [userType, accountId]);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchSchedule();
  }, [fetchSchedule]);
  return schedules;
}

export default RetrieveSchedules;
