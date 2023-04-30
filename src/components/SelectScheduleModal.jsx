import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import {capitalizeWords} from "../components/utility";
import "../pages/styles.css";

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
        <button
          onClick={handleOpen}
          id="proxySelectscheduleButton"
          hidden
        ></button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{...style, width: 200}}>
          <h5 id="child-modal-description">
            Scheduled meeting has been submitted for approval.
          </h5>
          <div className="actions">
            <button onClick={handleClose}>OK</button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function SelectSchedModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const facultyName = props.facultyName;
  const date = props.date;
  const location = props.location;
  const startTime = props.startTime;
  const scheduleId = props.scheduleId;
  const studentId = sessionStorage.getItem("accountId");
  const handleAppointmentSubmit = (event) => {
    event.preventDefault();
    createAppointment();
  };

  async function createAppointment() {
    document.getElementById("proxySelectscheduleButton").click();
    const description = document.getElementById("description").value;
    const category =
      document.getElementById("categorySelect").options[
        document.getElementById("categorySelect").selectedIndex
      ].value;
    const data = {
      scheduleId: scheduleId,
      studentId: studentId,
      description: description,
      category: category,
    };
    var response = await fetch("/api/createAppointment", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var responseData = await response.json();
    console.log(responseData);
    // var alertField = document.getElementById("alert");
    // alertField.innerHTML = responseData.message;
  }
  return (
    <div>
      <div className="actions">
        <button onClick={handleOpen}>Select</button>
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
              <h2>Schedule Meeting</h2>
            </Typography>
            <form onSubmit={handleAppointmentSubmit}>
              <Typography id="transition-modal-description" sx={{mt: 2}}>
                <div className="details">
                  <h3>
                    <b>{date}</b>
                  </h3>
                  <h3>{capitalizeWords(facultyName)}</h3>
                </div>

                <div className="details">
                  <h3>
                    <b>Time</b>
                  </h3>
                  <h3>{startTime}</h3>
                </div>

                <div className="details">
                  <h3>
                    <b>Location</b>
                  </h3>
                  <h3>{location}</h3>
                </div>

                <div className="details">
                  <h3>
                    <b>Description</b>
                  </h3>
                  <input
                    type="text"
                    placeholder="Purpose of meeting"
                    id="description"
                    required
                  ></input>
                </div>
                <div className="details">
                  <h3>
                    <b>Category</b>
                  </h3>
                  <select name="category" id="categorySelect" required>
                    <option value="">Select Category</option>
                    <option value="consultation">Consultation</option>
                    <option value="grading">Grading</option>
                    <option value="miscellaneous">Miscellaneous</option>
                  </select>
                </div>
                <ChildModal />
              </Typography>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default SelectSchedModal;
