import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import timeLineElements from './data';

const App = () => {
  return (
    <div>
      <h1 className='title'>Timeline</h1>
      <VerticalTimeline>
        {
          timeLineElements.map((items) => {

            return(
              <VerticalTimelineElement key={items.id} date={items.date} dateClassName='date' />
            )
          })
        }
      </VerticalTimeline>
    </div>
  )
}

export default App
