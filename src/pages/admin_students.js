import * as React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import EditStudentModal from '../components/EditRecordModal';
import RemoveRecordModal from '../components/RemoveRecordModal';
import AddNewRecord from '../components/AddNewRecord';
import './styles.css'


//DISPLAYS ALL STUDENT RECORDS IN THE DATABASE. ONLY STUDENTS
const tableData = [
    {
      id: 1,
      name: 'AAAA',
      course: 'BSIT',
      email: 'aaaa@usc.edu.ph'
    },
    {
        id: 1,
        name: 'BBBB',
        course: 'BSCS',
        email: 'bbbb@usc.edu.ph'
    },
 
  ];


function AdminStudents() {
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
                            <TableCell>Course</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {tableData.map((row) => (
                            <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.course}</TableCell>
                            <TableCell>{row.email}</TableCell>

                            <TableCell>
                                <div className="actions">
                                        {/*BUTTON TO EDIT STUDENT DATA*/}
                                        <EditStudentModal />

                                        {/*BUTTON TO REMOVE STUDENT DATA*/}
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

export default AdminStudents