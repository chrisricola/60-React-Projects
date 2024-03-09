import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import timeLineElements from './data';
import 'react-vertical-timeline-component/style.min.css'

const App = () => {

  let workIcon = {background: "limegreen"}
  let schoolIcon = {background: "lightcoral"}
  return (
    <div>
      <h1 className='title'>Timeline</h1>
      <VerticalTimeline>
        {
          timeLineElements.map((items) => {

            return(
              <VerticalTimelineElement key={items.id} date={items.date} dateClassName='date'  iconStyle={items.icon === "work" ? workIcon : schoolIcon}>
                <h3 className='vertical-timeline-element-title'>{items.title}</h3>
                <h5 className='vertical-timeline-element-subtitle'>{items.location}</h5>
                <p className='p'>{items.description}</p>
              </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
    </div>
  )
}

export default App
