import React from 'react'
import './styles.css'
import Collapsible from 'react-collapsible';
import ApproveMeetingModal from '../components/ApproveMeetinModal'
import CancelMeetingModal from  '../components/CancelMeetingModal'

//DISPLAY ALL MEETINGS WITH STATUS 'PENDING'
function AdminDashboard() {
  return (
    <div className="admin_page">
    <section>

        {/*PAGE TITLE*/}
       <div className="container">
        <h1>Dashboard</h1>
      </div>

    {/*CARDS - CONTAIN DETAILS OF MEETING*/}
      <div className="cards">
                 <div className="tab-card">
                  <h3><b>MARCH 26</b></h3> {/*DATE*/}
                  <h5>FACULTY NAME</h5> {/*FACULTY OF INTEREST*/}
                  <h5>STUDENT NAME</h5> {/*STUDENT OF INTEREST*/}
                  <h5>4:30PM</h5> {/*MEETING TIME*/}
                  <h4 className="status_pending">PENDING</h4>

                  {/*COLLAPSIBLE CONTENT - DOESN'T DISPLAY PRIORITY NUMBER*/}
                  <div className="collapsible-container">
                      <Collapsible trigger ="View Details">
                       <div className="collapsible-content">

                           <div className="details">
                            <h5><b>Location</b></h5>
                            <p>DCISM Office</p>
                            </div>

                           <div className="details">
                            <h5><b>Description</b></h5>
                            <p>Project consultation and updates</p>
                           </div>

                           <div className="actions">
                            {/*APPROVE MEETING - CHANGE STATUS OF MEETING TO APPROVED AND HIDE FROM DASHBOARD*/}
                            <ApproveMeetingModal /> 
                            {/*CANCEL MEETING BUTTON*/}
                            <CancelMeetingModal />
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

export default AdminDashboard