import {useState, useEffect, useRef, useCallback} from "react";
function RetrieveAppointments() {
  const [approved, setApproved] = useState([]);
  const [pending, setPending] = useState([]);
  const dataFetchedRef = useRef(false);
  const fetchSchedule = useCallback(async () => {
    if (sessionStorage.getItem("accountId") !== null) {
      var appointments = await fetch("/api/retrieveAppointmentsById", {
        method: "POST",
        body: JSON.stringify({accountId: sessionStorage.getItem("accountId")}),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    var data = await appointments.json();
    for (var x in data["data"]) {
      if (data["data"][x].status === 0) {
        const pendingDataWrapper = await wrapper(data["data"][x]);
        setPending((pending) => [...pending, {pendingDataWrapper}]);
      } else {
        const approvedDataWrapper = await wrapper(data["data"][x]);
        setApproved((approved) => [...approved, {approvedDataWrapper}]);
      }
    }
  }, []);

  async function wrapper(data) {
    const scheduleData = await retrieveSchedule(data.ScheduleId);
    const [facultyData, studentData] = await Promise.all([
      retrieveAccount(scheduleData.FacultyId, "faculty"),
      retrieveAccount(data.StudentId, "student"),
    ]);
    return {data, scheduleData, facultyData, studentData};
  }

  async function retrieveSchedule(scheduleId) {
    var schedule = await fetch("/api/retrieveScheduleById", {
      method: "POST",
      body: JSON.stringify({scheduleId: scheduleId}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const scheduleData = await schedule.json();
    return scheduleData["data"][0];
  }

  async function retrieveAccount(accountId, userType) {
    var account = await fetch("/api/retrieveAccountById", {
      method: "POST",
      body: JSON.stringify({accountId: accountId, userType: userType}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const accountData = await account.json();
    return accountData["data"][0];
  }
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchSchedule();
  }, [fetchSchedule]);
  return {approved, pending};
}

export default RetrieveAppointments;
