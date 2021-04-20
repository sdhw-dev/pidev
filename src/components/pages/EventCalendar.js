import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import NavbarServices from "../NavbarServices";
import Sidebar from '../SideBar'
import "./calendar.css";

export default class EventCalendar extends React.Component {

    render() {
        
        return (
           
            <div >
                <NavbarServices/>
                <div style= {{display:'flex' , flexDirection :'row'}} >
               <Sidebar/>
          <FullCalendar
            plugins={[ dayGridPlugin ]}
            eventContent={renderEventContent}
            events={[
              { title: 'Troc 1', date: '2021-04-20' },
              { title: 'Troc 2', date: '2021-04-15' }
            ]}
          />
          </div>
            </div>
        )
      }
    }
    
    function renderEventContent(eventInfo) {
      return (
        <>
          <b>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
        </>
      )
    }