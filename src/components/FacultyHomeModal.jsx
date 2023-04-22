import {FaAngleDoubleRight} from 'react-icons/fa'
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

function FacultyHomeModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <FaAngleDoubleRight className="icon" onClick={handleOpen} />
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
             <h2>Meeting Details</h2>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <div className="details">
                <h3><b>March 28</b></h3>
                <h3> Student Name</h3>
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
                <h4>Project Consultation and updates</h4>
              </div>

              <div className="details">
              <h3><b>Priority</b></h3>
                <h3>1</h3>
              </div>
              
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default FacultyHomeModal
