import React from 'react'
import './styles.css'
import Collapsible from 'react-collapsible';
import AddSchedModal from '../components/AddSchedModal'
import RemoveSched from '../components/RemoveSched';

function FacultySched() {
  return (
    <div className="page">
    <section>

       {/*PAGE HEADING*/}
        <div className="container">
        <h1>My Schedule</h1>

        {/*ADDS NEW SCHEDULE CARD TO DISPLAY*/}
        <div className="add-sched">
        <AddSchedModal />
        </div>

       {/*SCHEDULE CARDS - DISPLAY AVAILABLE SCHEDULE*/}
      </div>
        <div className="cards">
              <div className="avail-sched-card">
                  <h2><b>MARCH 26</b></h2> {/*DATE OF AVAILABILITY*/}
                  
                  {/*COLLAPSIBLE CONTENT*/}
                  <div className="collapsible-container">
                    <Collapsible trigger ="View Schedules">
                       <div className="collapsible-content">
                          
                          {/*FACULTY'S AVAILABLE SCHEDULE*/}
                          <div className="details">
                            <h4><b>9:00-10:30AM</b></h4>
                            <div className ="actions">
                            {/*REMOVE TIME ALOTTED FOR AVAILABILITY*/}
                            <RemoveSched />
                            </div>
                          </div>

                          {/*FACULTY'S AVAILABLE SCHEDULE*/}
                          <div className="details">
                            <h4><b>12:00-1:30PM</b></h4>
                            <div className ="actions">
                            {/*REMOVE TIME ALOTTED FOR AVAILABILITY*/}
                            <RemoveSched />
                            </div>
                          </div>
                    
                        </div>
                       

                      </Collapsible>
                      </div>
            </div>
            </div>
    </section>
    </div>
 
  )
}

export default FacultySched