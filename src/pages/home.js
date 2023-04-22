import React from 'react'
import {useState} from 'react'
import './styles.css'
import HomeModal from '../components/HomeModal'

function Home() {

  //cards - Dummy data. Represents details for upcoming meetings.
  const [cards] = useState([
    {
      id: 1,
      date: 'MARCH 1',
      person_of_interest: 'BANDALAN, CHRISTINE DALMAN',
      time: '4:00PM',
      location: 'DCISM OFFICE',
    },
    {
      id: 2,
      date: 'MARCH 1',
      person_of_interest: 'BANDALAN, CHRISTINE DALMAN',
      time: '4:00PM',
      location: 'DCISM OFFICE',
    },
    {
      id: 3,
      date: 'MARCH 1',
      person_of_interest: 'BANDALAN, CHRISTINE DALMAN',
      time: '4:00PM',
      location: 'DCISM OFFICE',
    },
    
  ])
  return (
    <div className="page">
      <section>
             {/* PAGE TITLE */}
            <div className="container">
              <h1>Upcoming Meetings</h1>
            </div>

          {/* cards - DISPLAY INFORMATION OF UPCOMING MEETINGS  */}
          <div className="cards">
            {
              cards.map((card,i) => (

            <div key={i} className="card">
              <h3><b>{card.date}</b></h3>
              <h5>{card.person_of_interest}</h5>
              <h6>{card.location}</h6>
              <h6>{card.time}</h6>

              {/* HomeModal - DISPLAYS DETAILS OF UPCOMING MEETINGS  */}
              <HomeModal className="modal"/>               
            </div>
             ))
              }
          </div>
          </section>
       </div>    
  )
}

export default Home
