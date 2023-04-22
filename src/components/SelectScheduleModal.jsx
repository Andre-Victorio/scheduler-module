import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import '../pages/styles.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
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
          <Box sx={{ ...style, width: 200 }}>
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

function SelectSchedModal() {
 const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <div className ="actions"><button onClick={handleOpen}>Select</button></div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
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
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <div className="details">
                <h3><b>March 28</b></h3>
                <h3> Christine Bandalan, Dalman</h3>
              </div>

              <div className="details">
              <h3><b>Time</b></h3>
                <h3>4:30PM</h3>
              </div>

              <div className="details">
              <h3><b>Location</b></h3>
                <h3>DCISM Office</h3>
              </div>

              <div className="details">
              <h3><b>Description</b></h3>
              <input type="text" placeholder='Purpose of meeting'></input>
              </div>

                <ChildModal />
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    )
}

export default SelectSchedModal