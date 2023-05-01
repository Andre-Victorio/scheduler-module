export function capitalizeWords(str) {
  var parsedStr;
  if (str !== null) {
    parsedStr = str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return parsedStr;
}

export function parseDate(s) {
  var date = new Date(s);
  return (
    date.toLocaleString("default", {month: "long"}) +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear()
  );
}
export function parseSchedules(schedules) {
  var parsedSchedules = new Map();
  for (var x in schedules) {
    if (parsedSchedules.has(parseDate(schedules[x].Date))) {
      parsedSchedules.get(parseDate(schedules[x].Date)).push({
        startTime: schedules[x].StartTime,
        endTime: schedules[x].EndTime,
        location: schedules[x].Location,
        scheduleId: schedules[x].ScheduleId,
      });
    } else {
      parsedSchedules.set(parseDate(schedules[x].Date), [
        {
          startTime: schedules[x].StartTime,
          endTime: schedules[x].EndTime,
          location: schedules[x].Location,
          scheduleId: schedules[x].ScheduleId,
        },
      ]);
    }
  }
  return parsedSchedules;
}

export function parseTime(time) {
  time = time.split(":"); // convert to array

  // fetch
  var hours = Number(time[0]);
  var minutes = Number(time[1]);

  // calculate
  var timeValue;

  if (hours > 0 && hours <= 12) {
    timeValue = "" + hours;
  } else if (hours > 12) {
    timeValue = "" + (hours - 12);
  } else if (hours === 0) {
    timeValue = "12";
  }

  timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes; // get minutes
  timeValue += hours >= 12 ? " PM" : " AM"; // get AM/PM
  return timeValue;
}
