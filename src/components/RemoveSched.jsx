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
        <button type="submit">Confirm</button>
        <button onClick={handleOpen} id="proxyButton" hidden></button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{...style, width: 200}}>
          <h5 id="child-modal-description">
            The selected schedule has successfully been removed.
          </h5>

          <div className="actions">
            <button onClick={handleClose}>OK</button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function RemoveSched(props) {
  console.log(props.scheduleId);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleRemoveScheduleSubmit = (event) => {
    event.preventDefault();
    deleteSchedule();
  };
  async function deleteSchedule() {
    document.getElementById("proxyButton").click();
    var response = await fetch("/api/deleteSchedule", {
      method: "POST",
      body: JSON.stringify({scheduleId: props.scheduleId}),
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
        <button onClick={handleOpen}>Remove</button>
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
              <h2>Remove Sched</h2>
            </Typography>
            <form onSubmit={handleRemoveScheduleSubmit}>
              <Typography id="transition-modal-description" sx={{mt: 2}}>
                <h3>Are you sure you want to proceed?</h3>
                <ChildModal />
              </Typography>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default RemoveSched;
