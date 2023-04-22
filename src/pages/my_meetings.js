import React from 'react'
import {useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Collapsible from 'react-collapsible';
import './styles.css'
import CancelMeetingModal from '../components/CancelMeetingModal';

function My_meetings() {
  
//TAB TO TOGGLE BETWEEN 'APPROVED' and 'PENDING'
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="page">
      <section>
            {/* PAGE TITLE */}
            <div className="container">
              <h1>My Meetings</h1>
            </div>
        
        {/* TAB CONTAINER */}
        <div className="tablist-container">

        <Tabs id="controlled-tabs" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

        {/* TAB HEADINGS*/}
        <TabList>
          <Tab><div className="tab-container"><h4>APPROVED</h4></div></Tab>
          <Tab><div className="tab-container"><h4>PENDING</h4></div></Tab>
        </TabList>

        {/* TAB CONTENTS - APPROVED*/}
          <TabPanel>
            <div className="cards">

              <div className="tab-card">
                  <h3><b>MARCH 26</b></h3> {/* DATE*/}
                  <h5>CHRISTINE BANDALAN, DALMAN</h5> {/* FACULTY OF INTEREST*/}
                  <h5>4:30PM</h5> {/* TIME OF MEETING */}
                  <h4 className="status_approved">APPROVED</h4> {/* MEETING STATUS - APPROVED */}
                  <div className ="hide">x</div> {/* TOGGLE TO HIDE CARD */}

                      {/* COLLAPSIBLE CONTENT */}
                      <div className="collapsible-container">
                          <Collapsible trigger ="View Details">
                            <div className="collapsible-content">
                          
                                {/* DISPLAY PRIORITY NUMBER */}
                                <div className="details">
                                <h4><b>PRIORITY NUMBER</b></h4>
                                <h4><b>1</b></h4>
                                </div>

                                {/* DISPLAY LOCATION*/}
                                <div className="details">
                                <h5><b>Location</b></h5>
                                <p>DCISM Office</p>
                                </div>

                                {/* DISPLAY MEETING DESCRIPTION*/}
                                <div className="details">
                                <h5><b>Description</b></h5>
                                <p>Project consultation and updates</p>
                                </div>

                                {/* CANCEL MEETING BUTTON*/}
                                <div className="actions">
                                <CancelMeetingModal />
                                </div>
                            </div>
                          </Collapsible>
                       </div>
                  </div>        
               </div>
           </TabPanel>
              
          
           {/* TAB CONTENTS - PENDING*/}
           {/* PENDING APPOINTMENTS DON'T HAVE PRIORITY NUMBER*/}
          <TabPanel>
    
          <div className="cards">
              <div className="tab-card">

                  <h3><b>MARCH 26</b></h3> {/* DATE*/}
                  <h5>CHRISTINE BANDALAN, DALMAN</h5> {/* FACULTY OF INTEREST*/}
                  <h5>4:30PM</h5> {/*TIME*/}
                  <h4 className="status_pending">PENDING</h4> {/*STATUS - PENDING*/}

                  {/* COLLAPSIBLE CONTENT */}
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
                            <CancelMeetingModal />
                            </div>

                        </div>
                      </Collapsible>
                  </div>
                 </div>
               </div>     
          </TabPanel>
        </Tabs>

        </div>
      </section>
    </div>
  )
}

export default My_meetings
