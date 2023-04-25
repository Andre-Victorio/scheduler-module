import React from "react";
import "./styles.css";
import {Link} from "react-router-dom";
import {FaAngleDoubleRight} from "react-icons/fa";
import RetrieveAccounts from "../components/retrieveAccounts";
import {capitalizeWords} from "../components/utility";
//FACULTY CARDS - Dummy data. Represents faculty in the database.
function Create_meeting() {
  // const [faculty_cards] = useState([
  //   {
  //     name: "FIRSTNAME LASTNAME",
  //     role: "Full Time Instructor",
  //   },
  //   {
  //     name: "FIRSTNAME LASTNAME",
  //     role: "Full Time Instructor",
  //   },
  //   {
  //     name: "FIRSTNAME LASTNAME",
  //     role: "Full Time Instructor",
  //   },
  //   {
  //     name: "FIRSTNAME LASTNAME",
  //     role: "Full Time Instructor",
  //   },
  //   {
  //     name: "FIRSTNAME LASTNAME",
  //     role: "Full Time Instructor",
  //   },
  //   {
  //     name: "FIRSTNAME LASTNAME",
  //     role: "Full Time Instructor",
  //   },
  //   {
  //     name: "FIRSTNAME LASTNAME",
  //     role: "Full Time Instructor",
  //   },
  //   {
  //     name: "FIRSTNAME LASTNAME",
  //     role: "Full Time Instructor",
  //   },
  //   {
  //     name: "FIRSTNAME LASTNAME",
  //     role: "Full Time Instructor",
  //   },
  // ]);
  var accounts = RetrieveAccounts("faculty");
  return (
    <div className="page">
      <section>
        <div className="container">
          {/*PAGE HEADER*/}
          <h1>Create Meeting</h1>

          {/*SEARCH BAR - SEARCH FACULTY BY NAME OR ROLE 'Instructor  or Tab Tech*/}
          <div className="searchbar">
            <input type="text" placeholder="Search"></input>
            <button>Search</button>
          </div>
        </div>

        {/*FACULTY CARDS - DISPLAY FACULTY INSIDE DATABASE*/}
        <div className="faculty_cards">
          {accounts.map((card, i) => (
            <div key={i} className="card">
              <h3>
                <b>{card.img}</b>
              </h3>
              <h3>{capitalizeWords(card.Name)}</h3>
              <h6>{capitalizeWords(card.Role)}</h6>

              {/*REDIRECT TO FACULTY'S AVAILABLE SCHEDULE*/}
              <Link to="/available_sched">
                <FaAngleDoubleRight className="icon" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Create_meeting;
