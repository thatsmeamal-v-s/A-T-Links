import React from 'react'
import edit from '../../../../images/edit.png'
import hours from '../../../../images/hours.png'

const OperationHoursCard = () => {
  return (
    <div className="column">
        <div className="card">
          <div className="card-heading">
            <img className="card-header-icon" alt="contact" src={hours}/>
            <span>Hours of Operations</span>
            <img className="edit-icon" alt="edit" src={edit}/>
          </div>
          <div className="card-content-container">
            <div className="card-content">
              <span>Monday to Friday - 09.00 AM to 06.00 PM</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OperationHoursCard