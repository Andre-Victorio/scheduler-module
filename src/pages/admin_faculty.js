import * as React from 'react'
import {useState, useEffect, useRef, useCallback} from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import EditStudentModal from '../components/EditRecordModal';
import RemoveRecordModal from '../components/RemoveRecordModal';
import AddNewRecord from '../components/AddNewRecord';
import './styles.css'

//DISPLAYS ALL STUDENT RECORDS IN THE DATABASE. ONLY FACULTY & LAB TECH
// const tableData = [
//     {
//       id: 1,
//       name: 'AAAA',
//       role: 'Full Time Instructor',
//       email: 'aaaa@usc.edu.ph'
//     },
//     {
//         id: 1,
//         name: 'BBBB',
//         role: 'Lab Technican',
//         email: 'bbbb@usc.edu.ph'
//     },
 
//   ];


function AdminFaculty() {
  const [account, setAccounts] = useState([]);
  const dataFetchedRef = useRef(false);
  const fetchAccounts = useCallback( async () =>{
    var response = await fetch("/api/retrieveAccounts", {
      method: "POST",
      body: JSON.stringify({userType: "faculty"}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    var data = await response.json();
    setAccounts(data["data"]);
    console.log(data);
  },[]);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchAccounts();
  }, [fetchAccounts]);
  return (
    <div className="admin_page">
        <section>

            {/*PAGE TITLE*/}
            <div className="container">
                <h1>Faculty</h1>
                    <div className="add-sched">
                    {/*BUTTON TO ADD NEW RECORD IN THE DATABASE*/}
                    <AddNewRecord />
                    </div>

                {/*SEARCH FACYLTY/LAB TECH TO SEARCH STUDENT BY NAME OR ID*/}
                <div className="searchbar">
                    <input type="text" placeholder='Search'></input>
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
            <TableCell>Role</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {account.map((row) => (
            <TableRow key={row.FacultyId}>
              {console.log(row)}
              <TableCell>{row.ID}</TableCell>
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.Role}</TableCell>
              <TableCell>{row.Email}</TableCell>
              <TableCell>
                <div className="actions">
                 {/*BUTTON TO EDIT FACULTY DATA*/}
                <EditStudentModal />
                {/*BUTTON TO REMOVE FACULTY DATA*/}
                <RemoveRecordModal />
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
  )
}

export default AdminFaculty