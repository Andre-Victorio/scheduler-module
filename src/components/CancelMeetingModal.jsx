import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
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
        <button onClick={handleOpen}>Confirm</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{...style, width: 200}}>
          <h5 id="child-modal-description">Cancellation has been confirmed.</h5>

          <div className="actions">
            <button onClick={handleClose}>OK</button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function CancelMeeting(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCancelAppointmentSubmit = (event) => {
    event.preventDefault();
    cancelAppointment();
  };

  async function cancelAppointment() {
    var response = await fetch("/api/cancelAppointment", {
      method: "POST",
      body: JSON.stringify({
        appointmentId: document.getElementById("appointmentId").value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var responseData = await response.json();
    console.log(responseData);
  }
  return (
    <div>
      <div className="actions">
        <button onClick={handleOpen}>Cancel Meeting</button>
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
              <h2>Cancel Meeting</h2>
            </Typography>
            <form
              id="cancelAppointmentForm"
              onSubmit={handleCancelAppointmentSubmit}
            >
              <Typography id="transition-modal-description" sx={{mt: 2}}>
                <h3>Are you sure you want to cancel this meeting?</h3>
                <input
                  id="appointmentId"
                  type="text"
                  defaultValue={props.appointmentId}
                  hidden
                />
                <ChildModal />
              </Typography>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default CancelMeeting;
