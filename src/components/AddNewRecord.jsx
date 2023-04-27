import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import "../pages/styles.css";
import {FaPlus} from "react-icons/fa";
import {useState} from "react";
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
        aria-describedby="alert"
      >
        <Box sx={{...style, width: 200}}>
          <h5 id="alert"> </h5>
          <div className="actions">
            <button onClick={handleClose}>OK</button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function AddNewRecord() {
  const [open, setOpen] = React.useState(false);
  const [inputs, setInputs] = useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddAccountFormChange = (event) => {
    const name = event.target.name;
    var value;
    value = event.target.value;
    roleSelectionHandler(value, name);
    console.log(inputs);
    setInputs((values) => ({...values, [name]: value}));
  };

  const handleAddAccountSubmit = (event) => {
    event.preventDefault();
    addAccount();
  };

  function roleSelectionHandler(value, name) {
    if (name === "userType") {
      var roleSelection = document.getElementById("roleSelect");
      while (roleSelection.hasChildNodes()) {
        roleSelection.removeChild(roleSelection.firstChild);
      }
      var facultyUserTypes = ["Full Time Instructor", "Lab Technician", "Program Coordinator"];
      var option = document.createElement("option");
      if (value === "student") {
        roleSelection.disabled = true;
        option.value = value;
        option.innerHTML = "Student";
        roleSelection.appendChild(option);
        setInputs((values) => ({...values, role: value}));
      } else if (value === "faculty") {
        roleSelection.disabled = false;
        setInputs((values) => ({...values, role: "full time instructor"}));
        for (var x in facultyUserTypes) {
          var options = document.createElement("option");
          options.value = facultyUserTypes[x].toLowerCase();
          options.innerHTML = facultyUserTypes[x];
          roleSelection.appendChild(options);
        }
      } else {
        roleSelection.disabled = true;
        option.value = "";
        option.innerHTML = "Select type of user to choose role";
        roleSelection.appendChild(option);
      }
      // <option value="student">Student</option>
    }
  }

  async function addAccount() {
    document.getElementById("proxyButton").click();
    var response = await fetch("/api/addAccount", {
      method: "POST",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var responseData = await response.json();
    var alertField = document.getElementById("alert");
    alertField.innerHTML = responseData.message;
  }
  return (
    <>
      <div>
        <div className="add-sched" onClick={handleOpen}>
          <FaPlus /> <h5>Add New Record</h5>
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
              <h2>Add New Record</h2>
            </Typography>
            <form onSubmit={handleAddAccountSubmit}>
              <Typography id="transition-modal-description" sx={{mt: 2}}>
                <div className="details">
                  <h3>
                    <b>Name</b>
                  </h3>
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={handleAddAccountFormChange}
                    name="name"
                    required
                  ></input>
                </div>

                <div className="details">
                  <h3>
                    <b>User Type</b>
                  </h3>
                  <select
                    name="userType"
                    value={inputs.userType || ""}
                    required
                    onChange={handleAddAccountFormChange}
                  >
                    <option value="">Select type of user:</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                  </select>
                  {/* <input
                    type="text"
                    placeholder="User Type"
                    name="userType"
                  ></input> */}
                </div>

                <div className="details">
                  <h3>
                    <b>Role</b>
                  </h3>
                  {/* <input
                    type="text"
                    placeholder="Role"
                    onChange={handleAddAccountFormChange}
                    name="role"
                  ></input> */}
                  <select
                    name="role"
                    id="roleSelect"
                    disabled
                    required
                    onChange={handleAddAccountFormChange}
                  >
                    <option value="">Select type of user to choose role</option>
                  </select>
                </div>

                <div className="details">
                  <h3>
                    <b>ID</b>
                  </h3>
                  <input
                    type="text"
                    placeholder="ID"
                    onChange={handleAddAccountFormChange}
                    name="id"
                    required
                  ></input>
                </div>

                <div className="details">
                  <h3>
                    <b>Email</b>
                  </h3>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={handleAddAccountFormChange}
                    name="email"
                    required
                  ></input>
                </div>
                <ChildModal />
              </Typography>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default AddNewRecord;
