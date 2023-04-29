import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import "../pages/styles.css";
import {FaPlus} from "react-icons/fa";
import BasicDatePicker from "./DatePicker";
import dayjs from "dayjs";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="actions">
        <button type="submit">Confirm</button>
        <button onClick={handleOpen} id="proxyAddSchedButton" hidden></button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{...style, width: 200}}>
          <h5 id="child-modal-description"> </h5>
          <div className="actions">
            <button onClick={handleClose}>OK</button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function AddSchedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddSchedSubmit = (event) => {
    event.preventDefault();

    var elements = document
      .getElementById("addSchedForm")
      .querySelectorAll("input");
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
      var item = elements.item(i);
      if (i === 0) {
        var parsedValue = dayjs(item.value).format("YYYY-MM-DD");
        obj["date"] = parsedValue;
      } else obj[item.name] = item.value;
    }
    console.log(obj);
    obj["facultyId"] = sessionStorage.getItem("accountId");
    addSchedule(obj);
  };

  async function addSchedule(data) {
    document.getElementById("proxyAddSchedButton").click();
    var response = await fetch("/api/addSchedule", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var responseData = await response.json();
    var alertField = document.getElementById("child-modal-description");
    alertField.innerHTML = responseData.message;
  }

  return (
    <>
      <div>
        <div className="add-sched" onClick={handleOpen}>
          <FaPlus /> <h5>Add New Schedule</h5>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{backdrop: Backdrop}}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6">
              <h2>Add New Schedule</h2>
            </Typography>
            <form onSubmit={handleAddSchedSubmit} id="addSchedForm">
              <Typography id="transition-modal-description" sx={{mt: 2}}>
                <div className="details">
                  <h3>
                    <b>Date</b>
                  </h3>
                  <BasicDatePicker />
                </div>
                <div className="details">
                  <h3>
                    <b>Start Time</b>
                  </h3>
                  <input type="time" name="startTime" required />
                </div>
                <div className="details">
                  <h3>
                    <b>End Time</b>
                  </h3>
                  <input type="time" name="endTime" required />
                </div>
                <div className="details">
                  <h3>
                    <b>Location</b>
                  </h3>
                  <input
                    type="text"
                    placeholder="Location"
                    name="location"
                    required
                  />
                </div>
                <input type="text" name="facultyId" value="11" hidden />
                <ChildModal />
              </Typography>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default AddSchedModal;
