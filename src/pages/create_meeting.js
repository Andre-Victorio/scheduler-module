import React, {useCallback} from "react";
import "./styles.css";
import {Link} from "react-router-dom";
import {FaAngleDoubleRight} from "react-icons/fa";
// import RetrieveAccounts from "../components/retrieveAccounts";
import RetrieveFacultyWithSchedule from "../components/retrieveFacultyWithScheduleWrapper";
import {capitalizeWords} from "../components/utility";
import {useState, useEffect} from "react";
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
  var accounts = RetrieveFacultyWithSchedule();

  console.log(accounts);
  const [state, setstate] = useState({
    query: "",
    list: [],
  });

  const handleChange = (e) => {
    const results = accounts.filter((account) => {
      if (e.target.value === "") return accounts;
      var x =
        account.Role.toLowerCase().includes(e.target.value.toLowerCase()) ===
        true
          ? account.Role.toLowerCase().includes(e.target.value.toLowerCase())
          : account.Name.toLowerCase().includes(e.target.value.toLowerCase());
      return x;
    });
    setstate({
      query: e.target.value,
      list: results,
    });
  };

  const displayResult = useCallback(async () => {
    var cards = document.getElementById("facultyCards").children;
    const foundElements = parseList(state.list);
    for (var x = 0; x < cards.length; x++) {
      if (!foundElements.includes(parseInt(cards[x].id))) {
        cards[x].style.display = "none";
        // console.log(cards[x]);
      } else {
        cards[x].style.display = "revert";
      }
      // console.log(foundElements.includes(parseInt(cards[x].id)));
    }
  }, [state.list]);

  useEffect(() => {
    displayResult();
  }, [displayResult]);

  function parseList(list) {
    var data = [];
    for (var x in list) {
      data.push(list[x].FacultyId);
    }
    return data;
  }
  return (
    <div className="page">
      <section>
        <div className="container">
          {/*PAGE HEADER*/}
          <h1>Create Meeting</h1>

          {/*SEARCH BAR - SEARCH FACULTY BY NAME OR ROLE 'Instructor  or Tab Tech*/}
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search"
              value={state.query}
              onChange={handleChange}
            ></input>
            <button>Search</button>
          </div>
        </div>

        {/*FACULTY CARDS - DISPLAY FACULTY INSIDE DATABASE*/}
        <div style={{width: "180vh"}}>
          <div className="faculty_cards" id="facultyCards">
            {accounts.map((card) => {
              const data = {accountId: card.FacultyId, name: card.Name};
              return (
                <div key={card.FacultyId} className="card" id={card.FacultyId}>
                  <h3>
                    <b>{card.img}</b>
                  </h3>
                  <h3>{capitalizeWords(card.Name)}</h3>
                  <h6>{capitalizeWords(card.Role)}</h6>
                  {/*REDIRECT TO FACULTY'S AVAILABLE SCHEDULE*/}
                  {/* state={{accountId: this.parent.id}} */}
                  <Link to="/available_sched" state={data}>
                    <FaAngleDoubleRight className="icon" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Create_meeting;
