import React from "react";
import "./App.css";
import FacultyNavbar from "./components/faculty_navbar";
import Home from "./pages/home";
import My_meetings from "./pages/my_meetings";
import {Route, Routes} from "react-router-dom";
import Create_meeting from "./pages/create_meeting";
import Available_sched from "./pages/available_sched";
import FacultyHome from "./pages/faculty_home";
import FacultyMeetings from "./pages/faculty_meetings";
import FacultySched from "./pages/faculty_schedule";
import AdminNavbar from "./components/admin_navbar";
import AdminDashboard from "./pages/admin_dashboard";
import AdminAppointments from "./pages/admin_appointments";
import AdminStudents from "./pages/admin_students";
import Navbar from "./components/student_navbar";
import AdminFaculty from "./pages/admin_faculty";
import {Link} from "react-router-dom";
import Login from "./components/LogIn";
function App() {
  React.useEffect(() => {
    const adminNavbar = document.getElementById("adminNavbar");
    const facultyNavbar = document.getElementById("facultyNavbar");
    const studentNavbar = document.getElementById("studentNavbar");
    var userType = sessionStorage.getItem("userType");
    if (userType !== null) {
      if (window.location.href === "http://localhost:3000/") {
        adminNavbar.hidden = true;
        facultyNavbar.hidden = true;
        studentNavbar.hidden = true;
      } else if (userType === "admin") {
        adminNavbar.hidden = false;
      } else if (userType === "faculty") {
        facultyNavbar.hidden = false;
      } else if (userType === "student") {
        studentNavbar.hidden = false;
      }
      if (window.location.href !== "http://localhost:3000/") {
        window.history.pushState(null, null, window.location.href);

        window.onpopstate = function (event) {
          if (window.location.href === "http://localhost:3000/") {
            window.history.go(1);
          }
        };
      }
    } else {
      document.getElementById("loginForm").hidden = false;
    }
  }, []);
  return (
    <>
      {/*'Navbar' - STUDENT VIEW*/}
      {/*'FacultyNavbar' - Faculty VIEW*/}
      {/*'AdminNavbar' - Admin VIEW*/}
      <div id="facultyNavbar" hidden>
        <FacultyNavbar />
        <Link
          to="/faculty_home"
          className="bottom-navbar-link"
          id="facultyNavbarHome"
        ></Link>
      </div>
      <div id="adminNavbar" hidden>
        <AdminNavbar />
        <Link
          to="/admin_dashboard"
          className="side-navbar-link"
          id="adminNavbarHome"
        ></Link>
      </div>
      <div id="studentNavbar" hidden>
        <Navbar />
        <Link
          to="/home"
          className="bottom-navbar-link"
          id="studentNavbarHome"
        ></Link>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/my_meetings" element={<My_meetings />} />
          <Route path="/create_meeting" element={<Create_meeting />} />
          <Route path="/available_sched" element={<Available_sched />} />
          <Route path="/faculty_home" element={<FacultyHome />} />
          <Route path="/faculty_meetings" element={<FacultyMeetings />} />
          <Route path="/faculty_schedule" element={<FacultySched />} />
          <Route path="/admin_dashboard" element={<AdminDashboard />} />
          <Route path="/admin_appointments" element={<AdminAppointments />} />
          <Route path="/admin_students" element={<AdminStudents />} />
          <Route path="/admin_faculty" element={<AdminFaculty />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
