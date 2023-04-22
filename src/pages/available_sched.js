import React from 'react'
import './styles.css'
import { Link } from "react-router-dom"
import Collapsible from 'react-collapsible';
import SelectSchedModal from '../components/SelectScheduleModal';

function Available_sched() {
  return (
    <div className="page">
    <section>

            {/*PAGE HEADING*/}
            <div className="container">
             <h1>Available Schedule</h1>
            </div>

            {/*SCHEDULE CARDS - DISPLAY AVAILABLE SCHEDULE OF SELECTED FACULTY*/}
           <div className="cards">
              <div className="avail-sched-card">

                  <h2><b>MARCH 26</b></h2> {/*DATE OF AVAILABILITY*/}
                  <h5>CHRISTINE BANDALAN, DALMAN</h5> {/*NAME OF FACULTY*/}


                  {/*COLLAPSIBLE CONTENT*/}
                  <div className="collapsible-container">
                      <Collapsible trigger ="View Schedules">
                       <div className="collapsible-content">
                          
                           {/*FACULTY'S AVAILABLE SCHEDULE*/}
                            <div className="details">
                            <h4><b>9:00-10:30AM</b></h4>
                            <div className ="actions">
                            {/*SELECT SCHED BUTTON - NEEDS TO REFLECT TIME SELECTED*/}
                            <SelectSchedModal />
                            </div>
                            </div>

                            {/*FACULTY'S AVAILABLE SCHEDULE*/}
                            <div className="details">
                            <h4><b>12:00-1:30PM</b></h4>
                            <div className ="actions">
                            {/*SELECT SCHED BUTTON - NEEDS TO REFLECT TIME SELECTED*/}
                            <SelectSchedModal />
                            </div>
                            </div>

                          
                           {/*FACULTY'S AVAILABLE SCHEDULE*/}
                            <div className="details">
                            <h4><b>1:00-2:30PM</b></h4>
                            <div className ="actions">
                            {/*SELECT SCHED BUTTON - NEEDS TO REFLECT TIME SELECTED*/}
                            <SelectSchedModal className = "modal"/>
                            </div>
                            </div>

                        </div>
                      </Collapsible>
                  </div>
                
          </div>
        </div>

    {/*RETURNS TO CREATE MEETING PAGE*/}
    <div className ="return">
      <Link to ="/create_meeting">Return</Link>
    </div>
    </section>
    </div>
  )
}

export default Available_sched