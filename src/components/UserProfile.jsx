import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import '../pages/styles.css'
import { FaUser } from 'react-icons/fa';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function UserProfile() {
 const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <FaUser className="icon" onClick={handleOpen} />
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
             <h2>User Profile</h2>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <div className="details">
                <h3><b>Name</b></h3>
                <h3> Username</h3>
              </div>

              <div className="details">
              <h3><b>Role</b></h3>
                <h3>User Role</h3>
              </div>

              <div className="actions">
                <button onClick={handleClose}>OK</button>
              </div>
              
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default UserProfile