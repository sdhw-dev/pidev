import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class Calendrier extends React.Component {

    render() {
        return (
          <FullCalendar
            plugins={[ dayGridPlugin ]}
            eventContent={renderEventContent}
            events={[
              { title: 'Troc 1', date: '2021-04-20' },
              { title: 'Troc 2', date: '2021-04-15' }
            ]}
          />
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


