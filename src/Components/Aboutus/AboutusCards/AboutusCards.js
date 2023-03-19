import React from 'react'
import './AboutusCards.css'
import ContactCard from './ContactCard/ContactCard'
import AddressCard from './AddressCard/AddressCard'
import OperationHoursCard from './OperationHoursCard/OperationHoursCard'
import SocialMediaCard from './SocialMediaCard/SocialMediaCard'
import StatementCard from './StatementCard/StatementCard'

const AboutusCards = (props) => {
  return (
    <div className="row">
      <ContactCard 
        showPanel={props.showPanel} toggleShowPanel={props.toggleShowPanel}
        contactList={props.contactList}
      />
      <AddressCard/>
      <OperationHoursCard/>
      <SocialMediaCard/>
      <StatementCard/>
    </div>
  )
}

export default AboutusCards