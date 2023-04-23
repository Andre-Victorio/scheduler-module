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

function ChildModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    console.log(props);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAccountDeletion = async () => {
    await deleteAccount(props.details.accountId, props.details.userType);
    document.getElementById("proxyDeleteAccountModalButton").click();
  };
  async function deleteAccount(accountId, userType) {
    var response = await fetch("/api/disableAccount", {
      method: "PATCH",
      body: JSON.stringify({accountId: accountId, userType: userType}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var data = await response.json();
    console.log(data);
  }
  return (
    <React.Fragment>
      <div className="actions">
        <button onClick={handleAccountDeletion}>Confirm</button>
        <button
          onClick={handleOpen}
          id="proxyDeleteAccountModalButton"
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
          <h5 id="child-modal-description">This record has been removed.</h5>

          <div className="actions">
            <button onClick={handleClose}>OK</button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function RemoveRecord(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <h2>Record Removal</h2>
            </Typography>
            <Typography id="transition-modal-description" sx={{mt: 2}}>
              <h3>Are you sure you want to remove this record?</h3>
              <ChildModal details={props.details} />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default RemoveRecord;
