import {useState, useEffect, useRef, useCallback} from "react";
function RetrieveFacultyWithSchedule() {
  const [accounts, setAccounts] = useState([]);
  const dataFetchedRef = useRef(false);
  const fetchAccounts = useCallback(async () => {
    var response = await fetch("/api/retrieveAccounts", {
      method: "POST",
      body: JSON.stringify({userType: "faculty"}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var data = await response.json();
    // console.log(data);

    data["data"].forEach(async (element) => {
      var schedules = await fetch("/api/retrieveSchedules", {
        method: "POST",
        body: JSON.stringify({
          userType: sessionStorage.getItem("userType"),
          accountId: element.FacultyId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      var scheduleData = await schedules.json();
      //   console.log(scheduleData["data"].length);
      if (scheduleData["data"].length !== 0) {
        setAccounts((accounts) => [...accounts, element]);
      }
    });

    // setAccounts(data["data"]);
    // console.log(data);
  }, []);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchAccounts();
  }, [fetchAccounts]);
  return accounts;
}

export default RetrieveFacultyWithSchedule;
