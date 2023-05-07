import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditRecordModal from "../components/EditRecordModal";
import RemoveRecordModal from "../components/RemoveRecordModal";
import AddNewRecord from "../components/AddNewRecord";
import RetrieveAccounts from "../components/retrieveAccounts";
import {capitalizeWords} from "../components/utility";
import {useState, useEffect, useCallback} from "react";
import "./styles.css";

//DISPLAYS ALL STUDENT RECORDS IN THE DATABASE. ONLY STUDENTS
// const tableData = [
//     {
//       id: 1,
//       name: 'AAAA',
//       course: 'BSIT',
//       email: 'aaaa@usc.edu.ph'
//     },
//     {
//         id: 1,
//         name: 'BBBB',
//         course: 'BSCS',
//         email: 'bbbb@usc.edu.ph'
//     },

//   ];

function AdminStudents() {
  var accounts = RetrieveAccounts("student");
  const [state, setstate] = useState({
    query: "",
    list: [],
  });

  const handleChange = (e) => {
    const results = accounts.filter((account) => {
      if (e.target.value === "") return accounts;
      var x;
      try {
        if (account.Name.toLowerCase().includes(e.target.value.toLowerCase())) {
          x = account.Name.toLowerCase().includes(e.target.value.toLowerCase());
        } else if (
          account.ID.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          x = account.ID.toLowerCase().includes(e.target.value.toLowerCase());
        } else if (
          account.Email.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          x = account.Email.toLowerCase().includes(
            e.target.value.toLowerCase()
          );
        } else if (
          account.Course.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          x = account.Course.toLowerCase().includes(
            e.target.value.toLowerCase()
          );
        }
        return x;
      } catch (error) {}
    });
    setstate({
      query: e.target.value,
      list: results,
    });
  };

  const displayResult = useCallback(async () => {
    var cards = document.getElementById("table").children;
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
      data.push(list[x].StudentId);
    }
    return data;
  }
  return (
    <div className="admin_page">
      <section>
        {/*PAGE TITLE*/}
        <div className="container">
          <h1>Students</h1>
          <div className="add-sched">
            {/*BUTTON TO ADD NEW RECORD IN THE DATABASE*/}
            <AddNewRecord />
          </div>

          {/*SEARCH BAR TO SEARCH STUDENT BY NAME OR ID*/}
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search"
              onChange={handleChange}
              value={state.query}
            ></input>
            <button>Search</button>
          </div>
        </div>

        {/*TABLE*/}
        <div className="table-container">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Course</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody id="table">
                {accounts.map((row) => (
                  <TableRow key={row.StudentId} id={row.StudentId}>
                    <TableCell>{row.ID}</TableCell>
                    <TableCell>{capitalizeWords(row.Name)}</TableCell>
                    <TableCell>{capitalizeWords(row.Course)}</TableCell>
                    <TableCell>{row.Email}</TableCell>
                    <TableCell>
                      <div className="actions">
                        {/*BUTTON TO EDIT STUDENT DATA*/}
                        <EditRecordModal
                          details={{
                            accountId: row.StudentId,
                            userType: row.UserType,
                            id: row.ID,
                            name: row.Name,
                            course: row.Course,
                            role: row.Role,
                            email: row.Email,
                          }}
                        />

                        {/*BUTTON TO REMOVE STUDENT DATA*/}
                        <RemoveRecordModal
                          details={{
                            accountId: row.StudentId,
                            userType: row.UserType,
                          }}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>
    </div>
  );
}

export default AdminStudents;
