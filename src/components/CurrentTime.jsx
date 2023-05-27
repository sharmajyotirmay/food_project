import React from 'react'
import "./style/time-stl.css"
function CurrentTime({date}) {
  return (
    <div className='container_date'>

        <div className="date">
            <img src="./images/Select_date-01.svg" alt="" />
            <span>{date.toLocaleDateString()}</span>
        </div>

        <div className="time">
        <img src="./images/Set_time-01.svg" alt="" />
            <span>10:30 Pm-12:30 Pm</span>
        </div>

    </div>
  )
}

export default CurrentTime