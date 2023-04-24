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
    // console.log("hehehe");
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="actions">
        <button type="submit">Confirm</button>
        <button onClick={handleOpen} id="proxyEditRecordButton" hidden></button>
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

function EditRecordModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const details = props.details;

  const handleUpdateAccountSubmit = (event) => {
    event.preventDefault();
    const data =
      details.userType === "student"
        ? {
            accountId: details.accountId,
            id: document.getElementById("editedId").value,
            name: document.getElementById("editedName").value,
            course: document.getElementById("editedCourse").value,
            role: document.getElementById("editedRoleSelect").options[
              document.getElementById("editedRoleSelect").selectedIndex
            ].value,
            email: document.getElementById("editedEmail").value,
            userType: details.userType,
            oldEmail: document.getElementById("oldEmail").value,
          }
        : {
            accountId: details.accountId,
            id: document.getElementById("editedId").value,
            name: document.getElementById("editedName").value,
            role: document.getElementById("editedRoleSelect").options[
              document.getElementById("editedRoleSelect").selectedIndex
            ].value,
            email: document.getElementById("editedEmail").value,
            userType: details.userType,
            oldEmail: document.getElementById("oldEmail").value,
          };
    console.log(
      document.getElementById("editedRoleSelect").options[
        document.getElementById("editedRoleSelect").selectedIndex
      ].value
    );
    updateAccount(data);
  };

  async function updateAccount(data) {
    document.getElementById("proxyEditRecordButton").click();
    var response = await fetch("/api/updateAccount", {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var responseData = await response.json();
    var alertField = document.getElementById("child-modal-description");
    alertField.innerHTML = responseData.message;
  }

  function RoleSelectionHandler(props) {
    const tableData = [
      {
        value: "instructor",
        name: "Instructor",
      },
      {
        value: "lab technician",
        name: "Lab Technician",
      },
    ];
    const x =
      props.userType === "student" ? (
        <option value="student">Student</option>
      ) : (
        tableData.map((row) => (
          <option key={row.value} value={row.value}>
            {row.name}
          </option>
        ))
      );

    return x;
  }

  function UserTypeHandler(props) {
    return props.userType === "student" ? (
      <div className="details">
        <h3>
          <b>Course</b>
        </h3>
        <input
          type="text"
          placeholder="Course"
          id="editedCourse"
          defaultValue={details.course}
          required
        ></input>
      </div>
    ) : (
      ""
    );
  }

  return (
    <div>
      <div className="actions">
        <button onClick={handleOpen}>Edit</button>
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
              <h2>
                Edit{" "}
                {details.userType.charAt(0).toUpperCase() +
                  details.userType.slice(1).toLowerCase()}{" "}
                Information
              </h2>
            </Typography>
            <form onSubmit={handleUpdateAccountSubmit}>
              <Typography id="transition-modal-description" sx={{mt: 2}}>
                <div className="details">
                  <h3>
                    <b>ID</b>
                  </h3>
                  <input
                    type="text"
                    placeholder="ID"
                    id="editedId"
                    defaultValue={details.id}
                    required
                  ></input>
                </div>

                <div className="details">
                  <h3>
                    <b>Name</b>
                  </h3>
                  <input
                    type="text"
                    placeholder="Name"
                    id="editedName"
                    defaultValue={details.name}
                    required
                  ></input>
                </div>

                <UserTypeHandler userType={details.userType} />

                <div className="details">
                  <h3>
                    <b>Role</b>
                  </h3>
                  <select name="role" id="editedRoleSelect" required>
                    {/* <option value="">Select type of user to choose role</option> */}
                    <RoleSelectionHandler userType={details.userType} />
                  </select>
                </div>

                <div className="details">
                  <h3>
                    <b>Email</b>
                  </h3>
                  <input
                    type="text"
                    placeholder="Email Address"
                    id="editedEmail"
                    defaultValue={details.email}
                    required
                  ></input>
                </div>
                <input
                  defaultValue={details.email}
                  hidden
                  id="oldEmail"
                ></input>
                <ChildModal />
              </Typography>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default EditRecordModal;
