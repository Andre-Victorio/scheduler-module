import React from 'react'
import {useState} from 'react'
import './styles.css'
import { Link } from "react-router-dom"
import {FaAngleDoubleRight} from 'react-icons/fa'


//FACULTY CARDS - Dummy data. Represents faculty in the database.
function Create_meeting() {
  const [faculty_cards] = useState([
    {
      name: 'FIRSTNAME LASTNAME',
      role: 'Full Time Instructor',
    }, 
    {
      name: 'FIRSTNAME LASTNAME',
      role: 'Full Time Instructor',
    }, 
    {
      name: 'FIRSTNAME LASTNAME',
      role: 'Full Time Instructor',
    }, 
    {
      name: 'FIRSTNAME LASTNAME',
      role: 'Full Time Instructor',
    }, 
    {
      name: 'FIRSTNAME LASTNAME',
      role: 'Full Time Instructor',
    }, 
    {
      name: 'FIRSTNAME LASTNAME',
      role: 'Full Time Instructor',
    }, 
    {
      name: 'FIRSTNAME LASTNAME',
      role: 'Full Time Instructor',
    }, 
    {
      name: 'FIRSTNAME LASTNAME',
      role: 'Full Time Instructor',
    }, 
    {
      name: 'FIRSTNAME LASTNAME',
      role: 'Full Time Instructor',
    }, 
    
  
  ])
  return (
    <div className="page">
    <section>
            <div className="container">
                  {/*PAGE HEADER*/}
                <h1>Create Meeting</h1>
                
                {/*SEARCH BAR - SEARCH FACULTY BY NAME OR ROLE 'Instructor  or Tab Tech*/}
                <div className="searchbar">
                 <input type="text" placeholder='Search'></input>
                 <button>Search</button>
                </div>
            </div>
      

      {/*FACULTY CARDS - DISPLAY FACULTY INSIDE DATABASE*/}
      <div className="faculty_cards">
            {
              faculty_cards.map((card,i) => (

            <div key={i} className="card">
              <h3><b>{card.img}</b></h3>
              <h3>{card.name}</h3>
              <h6>{card.role}</h6>

              {/*REDIRECT TO FACULTY'S AVAILABLE SCHEDULE*/}
              <Link to ="/available_sched"><FaAngleDoubleRight className="icon" /></Link> 
            </div>
             ))
              }
          </div>
      </section>
    </div>
  )
}

export default Create_meeting

